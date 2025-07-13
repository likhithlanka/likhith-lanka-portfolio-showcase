import { useState, useEffect } from 'react';
import { Calendar, GitBranch, Star, Code, ExternalLink } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';
import { fetchGitHubRepos, fetchGitHubContributionsFromAPI, getContributionLevel, calculateGitHubStats } from '../lib/github-api';

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface GitHubStats {
  totalContributions: number;
  longestStreak: number;
  currentStreak: number;
  averagePerDay: number;
}

interface GitHubRepo {
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  html_url: string;
}

export const GitHubContributions = () => {
  const { content } = useContent();
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [stats, setStats] = useState<GitHubStats>({
    totalContributions: 0,
    longestStreak: 0,
    currentStreak: 0,
    averagePerDay: 0
  });
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [useRealData, setUseRealData] = useState(false);

  // Extract username from GitHub URL
  const getGitHubUsername = (url: string): string => {
    const match = url.match(/github\.com\/([^\/]+)/);
    return match ? match[1] : 'likhithlanka'; // fallback to default
  };

  // Generate mock data for demonstration
  const generateMockContributions = (): ContributionDay[] => {
    const contributions: ContributionDay[] = [];
    const today = new Date();
    const oneYearAgo = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
    
    for (let d = new Date(oneYearAgo); d <= today; d.setDate(d.getDate() + 1)) {
      // More realistic pattern - higher activity on weekdays, some gaps
      const dayOfWeek = d.getDay();
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
      const baseActivity = isWeekend ? 0.3 : 0.7;
      const randomFactor = Math.random();
      
      let count = 0;
      if (randomFactor < baseActivity) {
        count = Math.floor(Math.random() * 6) + 1; // 1-6 contributions
      }
      
      let level: 0 | 1 | 2 | 3 | 4 = 0;
      if (count === 0) level = 0;
      else if (count <= 2) level = 1;
      else if (count <= 4) level = 2;
      else if (count <= 6) level = 3;
      else level = 4;

      contributions.push({
        date: new Date(d).toISOString().split('T')[0],
        count,
        level
      });
    }
    
    return contributions;
  };

  const calculateStats = (contributions: ContributionDay[]): GitHubStats => {
    const totalContributions = contributions.reduce((sum, day) => sum + day.count, 0);
    const daysWithContributions = contributions.filter(day => day.count > 0).length;
    
    // Calculate streaks
    let currentStreak = 0;
    let longestStreak = 0;
    let tempStreak = 0;
    
    // Start from the most recent day and go backwards
    for (let i = contributions.length - 1; i >= 0; i--) {
      if (contributions[i].count > 0) {
        tempStreak++;
        if (i === contributions.length - 1 || currentStreak === 0) {
          currentStreak = tempStreak;
        }
      } else {
        longestStreak = Math.max(longestStreak, tempStreak);
        if (currentStreak === 0) {
          tempStreak = 0;
        }
      }
    }
    longestStreak = Math.max(longestStreak, tempStreak);

    return {
      totalContributions,
      longestStreak,
      currentStreak,
      averagePerDay: totalContributions / 365
    };
  };

  useEffect(() => {
    const loadGitHubData = async () => {
      const username = getGitHubUsername(content.links.github);
      
      if (useRealData) {
        try {
          // Try to fetch real contribution data
          const contributionData = await fetchGitHubContributionsFromAPI(username);
          if (contributionData && contributionData.contributions) {
            const realContributions = contributionData.contributions.map((day: any) => ({
              date: day.date,
              count: day.count,
              level: getContributionLevel(day.count)
            }));
            setContributions(realContributions);
            setStats(calculateStats(realContributions));
          } else {
            throw new Error('No contribution data available');
          }

          // Fetch repository data
          const repoData = await fetchGitHubRepos(username);
          if (repoData) {
            setRepos(repoData.repos || []);
          }
        } catch (error) {
          console.warn('Failed to fetch real GitHub data, using mock data:', error);
          // Fall back to mock data
          const mockContributions = generateMockContributions();
          setContributions(mockContributions);
          setStats(calculateStats(mockContributions));
        }
      } else {
        // Use mock data
        const mockContributions = generateMockContributions();
        setContributions(mockContributions);
        setStats(calculateStats(mockContributions));
      }
      
      setIsLoading(false);
    };

    loadGitHubData();
  }, [content.links.github, useRealData]);

  const getContributionColor = (level: number): string => {
    const colors = [
      'bg-gray-100 dark:bg-gray-800', // 0 contributions
      'bg-green-200 dark:bg-green-900', // 1-2 contributions
      'bg-green-300 dark:bg-green-700', // 3-4 contributions
      'bg-green-400 dark:bg-green-600', // 5-6 contributions
      'bg-green-600 dark:bg-green-500'  // 7+ contributions
    ];
    return colors[level] || colors[0];
  };

  const getMonthLabel = (date: string): string => {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return monthNames[new Date(date).getMonth()];
  };

  const getDayOfWeek = (date: string): number => {
    return new Date(date).getDay();
  };

  const organizeByWeeks = (contributions: ContributionDay[]) => {
    const weeks: ContributionDay[][] = [];
    let currentWeek: ContributionDay[] = [];
    
    contributions.forEach((day, index) => {
      const dayOfWeek = getDayOfWeek(day.date);
      
      if (index === 0) {
        // Fill in empty days at the beginning of the first week
        for (let i = 0; i < dayOfWeek; i++) {
          currentWeek.push({ date: '', count: 0, level: 0 });
        }
      }
      
      currentWeek.push(day);
      
      if (currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    });
    
    // Add remaining days
    if (currentWeek.length > 0) {
      weeks.push(currentWeek);
    }
    
    return weeks;
  };

  if (isLoading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-4"></div>
          <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
    );
  }

  const weeks = organizeByWeeks(contributions);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 hover-lift">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
          <GitBranch className="text-white" size={24} />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            GitHub Activity
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {stats.totalContributions} contributions in the last year
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {stats.totalContributions}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Total</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
            {stats.longestStreak}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Best Streak</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {stats.currentStreak}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Current</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            {stats.averagePerDay.toFixed(1)}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Per Day</div>
        </div>
      </div>

      {/* Contribution Graph */}
      <div className="mb-4">
        <div className="flex gap-1 overflow-x-auto pb-2">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-1">
              {week.map((day, dayIndex) => (
                <div
                  key={`${weekIndex}-${dayIndex}`}
                  className={`w-3 h-3 rounded-sm transition-all hover:scale-125 ${
                    day.date ? getContributionColor(day.level) : 'bg-transparent'
                  }`}
                  title={
                    day.date
                      ? `${day.count} contributions on ${new Date(day.date).toLocaleDateString()}`
                      : ''
                  }
                />
              ))}
            </div>
          ))}
        </div>
        
        {/* Legend */}
        <div className="flex items-center justify-between mt-4 text-xs text-gray-500 dark:text-gray-400">
          <span>Less</span>
          <div className="flex gap-1">
            {[0, 1, 2, 3, 4].map(level => (
              <div
                key={level}
                className={`w-3 h-3 rounded-sm ${getContributionColor(level)}`}
              />
            ))}
          </div>
          <span>More</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={() => setUseRealData(!useRealData)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            useRealData
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          {useRealData ? 'Using Real Data' : 'Using Demo Data'}
        </button>
        <a
          href={content.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
        >
          <Code size={16} />
          View on GitHub
        </a>
      </div>
    </div>
  );
};

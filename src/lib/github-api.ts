// GitHub API service for fetching contribution data
// You'll need to replace 'YOUR_GITHUB_USERNAME' with your actual GitHub username

export interface GitHubContribution {
  date: string;
  contributionCount: number;
  color: string;
}

export interface GitHubStats {
  totalContributions: number;
  weeks: Array<{
    contributionDays: GitHubContribution[];
  }>;
}

// Option 1: Using GitHub's public API (limited data)
export const fetchGitHubRepos = async (username: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
    const repos = await response.json();
    
    // Calculate contributions from repo data (approximate)
    const totalRepos = repos.length;
    const publicRepos = repos.filter((repo: any) => !repo.private).length;
    const totalStars = repos.reduce((sum: number, repo: any) => sum + repo.stargazers_count, 0);
    const totalForks = repos.reduce((sum: number, repo: any) => sum + repo.forks_count, 0);
    
    return {
      totalRepos,
      publicRepos,
      totalStars,
      totalForks,
      repos: repos.slice(0, 6) // Get top 6 repos
    };
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return null;
  }
};

// Option 2: Using GitHub's GraphQL API (requires token for detailed contribution data)
export const fetchGitHubContributions = async (username: string, token?: string) => {
  if (!token) {
    console.warn('GitHub token not provided. Using mock data.');
    return null;
  }

  const query = `
    query($username: String!) {
      user(login: $username) {
        contributionsCollection {
          totalCommitContributions
          totalIssueContributions
          totalPullRequestContributions
          totalPullRequestReviewContributions
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                color
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { username }
      })
    });

    const data = await response.json();
    return data.data?.user?.contributionsCollection;
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error);
    return null;
  }
};

// Option 3: Using GitHub contributions API (third-party)
export const fetchGitHubContributionsFromAPI = async (username: string) => {
  try {
    // Using a third-party service that scrapes GitHub contributions
    const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching GitHub contributions from API:', error);
    return null;
  }
};

// Generate contribution level based on count
export const getContributionLevel = (count: number): 0 | 1 | 2 | 3 | 4 => {
  if (count === 0) return 0;
  if (count <= 2) return 1;
  if (count <= 4) return 2;
  if (count <= 8) return 3;
  return 4;
};

// Calculate streaks and other stats
export const calculateGitHubStats = (contributions: GitHubContribution[]) => {
  const totalContributions = contributions.reduce((sum, day) => sum + day.contributionCount, 0);
  
  let currentStreak = 0;
  let longestStreak = 0;
  let tempStreak = 0;
  
  // Calculate streaks (going backwards from today)
  for (let i = contributions.length - 1; i >= 0; i--) {
    if (contributions[i].contributionCount > 0) {
      tempStreak++;
      if (i === contributions.length - 1) {
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
    currentStreak,
    longestStreak,
    averagePerDay: totalContributions / 365
  };
};

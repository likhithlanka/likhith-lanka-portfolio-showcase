import { useState, useEffect } from 'react';
import { Calendar, Users, TrendingUp, Award } from 'lucide-react';

interface TimelineItem {
  year: string;
  role: string;
  company: string;
  duration: string;
  achievements: string[];
  technologies: string[];
  impact: string;
  icon: React.ReactNode;
}

export const InteractiveTimeline = () => {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const timeline: TimelineItem[] = [
    {
      year: "2023",
      role: "PM-2 (AFBP Program)",
      company: "Amazon Customer Service",
      duration: "June 2023 - Present",
      achievements: [
        "Led enterprise-wide BI transformation across 5 verticals, increasing WAU by 35%",
        "Owned end-to-end development of 5+ automation features in VIBE platform",
        "Launched automated bulk overlay features, reducing manual effort by 100+ analyst hours",
        "Consolidated 20+ forecasting dashboards, cutting duplicate reports by 60%",
        "Coordinated KPI alignment sessions with C-level stakeholders across 5 verticals"
      ],
      technologies: ["QuickSight", "Business Intelligence", "Agile", "Data Analytics"],
      impact: "35% WAU increase, 100+ hours saved",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      year: "2022",
      role: "Product Consultant",
      company: "Supply Compass (B2B SaaS)",
      duration: "June 2021 - March 2022",
      achievements: [
        "Orchestrated user research program with A/B testing and usability studies",
        "Drove UI/UX improvements that increased user satisfaction by 15%",
        "Led feature prioritization workshops with C-suite stakeholders",
        "Delivered PRDs & high-fidelity Figma prototypes for supply chain visibility",
        "Achieved 20% faster development cycles and 35% improved resource allocation"
      ],
      technologies: ["Figma", "A/B Testing", "User Research", "Product Strategy"],
      impact: "15% satisfaction increase, 25% churn reduction",
      icon: <Users className="w-5 h-5" />
    },
    {
      year: "2021",
      role: "Back-End Lead Developer",
      company: "Supply Compass (B2B SaaS)",
      duration: "October 2019 - June 2021",
      achievements: [
        "Architected HubSpot CRM integration with admin dashboard and Slack workflows",
        "Served as Product Owner bridging tech and business teams",
        "Spearheaded backend development with 4-engineer team",
        "Architected Python-based RESTful APIs and optimized database queries",
        "Achieved 30% faster deployment cycles and enhanced system reliability"
      ],
      technologies: ["Python", "RESTful APIs", "HubSpot", "Database Optimization"],
      impact: "30% faster deployments, 10% lead increase",
      icon: <Award className="w-5 h-5" />
    },
    {
      year: "2021",
      role: "MBA Student",
      company: "IIM Calcutta",
      duration: "2021 - 2023",
      achievements: [
        "Vice President for Data Analytics Club",
        "Campus Winner – Microsoft PM Engage (product management competition)",
        "National Finalist in WinZO BOSS and Global Management Challenge",
        "Specialized in Digital Strategy & Product Management",
        "Graduated with distinction"
      ],
      technologies: ["Strategy", "Analytics", "Leadership", "Product Management"],
      impact: "Microsoft PM Engage winner",
      icon: <Calendar className="w-5 h-5" />
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const timelineElement = document.getElementById('timeline');
    if (timelineElement) {
      observer.observe(timelineElement);
    }

    return () => observer.disconnect();
  }, []);

  const handleNodeClick = (year: string) => {
    setSelectedYear(selectedYear === year ? null : year);
  };

  return (
    <div id="timeline" className="timeline-container">
      <div className="timeline-track">
        {timeline.map((item, index) => (
          <div 
            key={index}
            className={`timeline-node ${selectedYear === item.year ? 'active' : ''} ${
              isVisible ? 'animate-fade-in-up' : ''
            }`}
            onClick={() => handleNodeClick(item.year)}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="timeline-dot" />
            <div className="timeline-content">
              <div className="flex items-center mb-2">
                <div className="text-blue-600 dark:text-blue-400 mr-2">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                    {item.role}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {item.company}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.duration}
                  </p>
                </div>
              </div>
              
              <div className="mb-3">
                <span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-2 py-1 rounded-full text-sm font-medium">
                  {item.impact}
                </span>
              </div>

              {selectedYear === item.year && (
                <div className="achievements-popup">
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                    Key Achievements:
                  </h4>
                  {item.achievements.map((achievement, i) => (
                    <div key={i} className="achievement-item">
                      ✓ {achievement}
                    </div>
                  ))}
                  
                  <div className="mt-3">
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {item.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

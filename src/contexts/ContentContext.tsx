import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface PortfolioContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  about: {
    title: string;
    subtitle: string;
    paragraph1: string;
    paragraph2: string;
    metrics: {
      wauGrowth: { value: string; label: string };
      hoursSaved: { value: string; label: string };
      reportsReduction: { value: string; label: string };
      fasterDecisions: { value: string; label: string };
    };
  };
  skills: {
    title: string;
    subtitle: string;
    categories: {
      productManagement: { title: string; skills: string[] };
      dataAnalytics: { title: string; skills: string[] };
      technicalTools: { title: string; skills: string[] };
      leadershipStrategy: { title: string; skills: string[] };
    };
  };
  featuredWork: {
    title: string;
    subtitle: string;
    projects: {
      aiCoverLetter: {
        title: string;
        description: string;
        impact: string;
        metrics: string;
        technologies: string[];
      };
      aiCvPlatform: {
        title: string;
        description: string;
        impact: string;
        metrics: string;
        technologies: string[];
      };
      dataPipeline: {
        title: string;
        description: string;
        impact: string;
        metrics: string;
        technologies: string[];
      };
    };
  };
  experience: {
    title: string;
    subtitle: string;
  };
  education: {
    title: string;
    items: {
      mba: {
        degree: string;
        institution: string;
        period: string;
        gpa: string;
        achievements: string[];
      };
      btech: {
        degree: string;
        institution: string;
        period: string;
        gpa: string;
        achievements: string[];
      };
    };
  };
  footer: {
    tagline: string;
    copyright: string;
  };
  links: {
    resume: string;
    portfolio: string;
    ctaLink: string;
    github: string;
    linkedin: string;
    email: string;
  };
}

const defaultContent: PortfolioContent = {
  hero: {
    title: "Hi, I'm Likhith",
    subtitle: "PM-2 at Amazon | Digital Strategy & Product Leader | MBA from IIM Calcutta",
    description: "4+ years of cross-functional experience in product strategy, forecasting automation, capacity planning and engineering. Proven ability to bridge business and technology, driving scalable, customer-centric solutions."
  },
  about: {
    title: "About Me",
    subtitle: "Passionate about creating products that transform businesses and delight users",
    paragraph1: "Product Manager with 4+ years of cross-functional experience spanning product strategy, forecasting automation, capacity planning and engineering. Proven ability to bridge business and technology, having transitioned from backend development to product leadership.",
    paragraph2: "Currently PM-2 at Amazon, with an MBA from IIM Calcutta and strong technical foundation in system design, analytics, and AI-driven product development. Focused on shipping scalable, customer-centric solutions that drive measurable business impact.",
    metrics: {
      wauGrowth: { value: "35%", label: "WAU Growth" },
      hoursSaved: { value: "100+", label: "Hours Saved" },
      reportsReduction: { value: "60%", label: "Duplicate Reports Cut" },
      fasterDecisions: { value: "25%", label: "Faster Decisions" }
    }
  },
  skills: {
    title: "Skills & Expertise",
    subtitle: "A comprehensive toolkit spanning product strategy, data science, and technical leadership",
    categories: {
      productManagement: {
        title: "Product Management",
        skills: ["Product Strategy", "Roadmap Planning", "Feature Prioritization", "PRD Writing", "Agile/Scrum", "A/B Testing", "OKRs & KPIs", "User Research", "Competitive Analysis", "Go-to-Market Strategy"]
      },
      dataAnalytics: {
        title: "Data & Analytics",
        skills: ["Python", "SQL", "Data Analysis & Visualization", "Product Analytics", "Machine Learning", "Capacity Planning", "Statistical Analysis", "Predictive Modeling", "Business Intelligence", "ETL Processes"]
      },
      technicalTools: {
        title: "Technical & Tools",
        skills: ["API Architecture", "System Design", "Cloud Platforms (AWS)", "Figma/Design Tools", "Tableau/QuickSight", "Excel/Google Sheets", "Git/Version Control", "Agile Tools (Jira, Asana)", "Collaboration (Miro, Slack)", "Documentation (Notion, Confluence)"]
      },
      leadershipStrategy: {
        title: "Leadership & Strategy",
        skills: ["Cross-functional Leadership", "Stakeholder Management", "Strategic Planning", "Team Building", "Change Management", "Executive Communication", "Conflict Resolution", "Mentoring & Coaching", "Project Management", "Business Development"]
      }
    }
  },
  featuredWork: {
    title: "Featured Work",
    subtitle: "Real-world applications of AI and data science in product development",
    projects: {
      aiCoverLetter: {
        title: "AI Cover Letter Tool",
        description: "Led development of an AI-driven cover letter tool from ideation to deployment, writing PRDs and designing the system architecture, reducing cover letter creation time by 50%.",
        impact: "50% time reduction",
        metrics: "PRDs written, system designed",
        technologies: ["AI/ML", "System Architecture", "Product Strategy"]
      },
      aiCvPlatform: {
        title: "AI CV Optimization Platform",
        description: "Led development of a microservices-based platform with systemized skill clustering and LLM-driven analysis of 2K+ job descriptions, achieving 200+ new user sign-ups within the first week.",
        impact: "200+ signups in week 1",
        metrics: "2K+ job descriptions analyzed",
        technologies: ["Microservices", "LLM", "Data Analysis"]
      },
      dataPipeline: {
        title: "Data Pipeline Automation",
        description: "Developed automated ETL pipelines with ML-driven validation checks for CV optimization tool, boosting data accuracy by 40% and cutting manual processing time by 60%.",
        impact: "40% accuracy boost",
        metrics: "60% time reduction",
        technologies: ["ETL", "Machine Learning", "Data Validation"]
      }
    }
  },
  experience: {
    title: "Professional Journey",
    subtitle: "Click on timeline nodes to explore detailed achievements and impact"
  },
  education: {
    title: "Education",
    items: {
      mba: {
        degree: "MBA (Master of Business Administration)",
        institution: "IIM Calcutta",
        period: "2021 – 2023",
        gpa: "Distinction",
        achievements: [
          "Vice President for Data Analytics Club",
          "Campus Winner – Microsoft PM Engage (product management competition)",
          "National Finalist, WinZO BOSS and Global Management Challenge (strategy simulations)",
          "Specialized in Digital Strategy & Product Management"
        ]
      },
      btech: {
        degree: "B.Tech, Computer Science",
        institution: "IIIT Sri City",
        period: "2015 – 2019",
        gpa: "High Honors",
        achievements: [
          "Founder, CodeChef Campus Chapter (earned 5-star rating on CodeChef)",
          "Teaching Assistant for C Programming and Algorithms courses",
          "Active contributor to competitive programming community"
        ]
      }
    }
  },
  footer: {
    tagline: "Made with ☕ and Python.",
    copyright: "© 2024 Likhith Sai Lanka. All rights reserved."
  },
  links: {
    resume: "/resume-likhith-lanka.pdf",
    portfolio: "https://github.com/likhithlanka",
    ctaLink: "mailto:likhith.lanka@gmail.com",
    github: "https://github.com/likhithlanka",
    linkedin: "https://linkedin.com/in/likhith-lanka",
    email: "likhith.lanka@gmail.com"
  }
};

interface ContentContextType {
  content: PortfolioContent;
  updateContent: (newContent: PortfolioContent) => void;
  resetContent: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};

interface ContentProviderProps {
  children: ReactNode;
}

export const ContentProvider: React.FC<ContentProviderProps> = ({ children }) => {
  const [content, setContent] = useState<PortfolioContent>(defaultContent);

  useEffect(() => {
    // Load content from localStorage on mount
    const savedContent = localStorage.getItem('portfolioContent');
    if (savedContent) {
      try {
        setContent(JSON.parse(savedContent));
      } catch (error) {
        console.error('Error loading saved content:', error);
        setContent(defaultContent);
      }
    }
  }, []);

  const updateContent = (newContent: PortfolioContent) => {
    setContent(newContent);
    localStorage.setItem('portfolioContent', JSON.stringify(newContent));
  };

  const resetContent = () => {
    setContent(defaultContent);
    localStorage.removeItem('portfolioContent');
  };

  return (
    <ContentContext.Provider value={{ content, updateContent, resetContent }}>
      {children}
    </ContentContext.Provider>
  );
};

export default ContentProvider;

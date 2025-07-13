import { useState, useEffect } from 'react';
import { Calendar, MessageCircle, Download, ExternalLink, Linkedin } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';

interface VisitorContext {
  timeOnSkills: number;
  timeOnProjects: number;
  timeOnExperience: number;
  viewedProjects: number;
  scrollDepth: number;
  preferredTheme: 'light' | 'dark';
  hasDownloadedResume: boolean;
  hasVisitedLinkedIn: boolean;
}

interface CTAOption {
  id: string;
  primary: string;
  secondary: string;
  icon: React.ReactNode;
  action: () => void;
  priority: number;
  conditions: (context: VisitorContext) => boolean;
}

export const SmartCTA = () => {
  const { content } = useContent();
  const [visitorContext, setVisitorContext] = useState<VisitorContext>({
    timeOnSkills: 0,
    timeOnProjects: 0,
    timeOnExperience: 0,
    viewedProjects: 0,
    scrollDepth: 0,
    preferredTheme: 'light',
    hasDownloadedResume: false,
    hasVisitedLinkedIn: false
  });

  const [isVisible, setIsVisible] = useState(false);
  const [currentCTA, setCurrentCTA] = useState<CTAOption | null>(null);
  const [dismissedCTAs, setDismissedCTAs] = useState<Set<string>>(new Set());

  // Load dismissed CTAs from localStorage on mount
  useEffect(() => {
    const savedDismissed = localStorage.getItem('dismissedCTAs');
    if (savedDismissed) {
      try {
        const dismissed = JSON.parse(savedDismissed);
        setDismissedCTAs(new Set(dismissed));
      } catch (error) {
        console.error('Error loading dismissed CTAs:', error);
      }
    }
  }, []);

  // Save dismissed CTAs to localStorage
  const saveDismissedCTAs = (dismissed: Set<string>) => {
    try {
      localStorage.setItem('dismissedCTAs', JSON.stringify(Array.from(dismissed)));
    } catch (error) {
      console.error('Error saving dismissed CTAs:', error);
    }
  };

  useEffect(() => {
    let skillsStartTime = 0;
    let projectsStartTime = 0;
    let experienceStartTime = 0;

    const trackSectionTime = () => {
      const sections = ['skills', 'projects', 'experience'];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id;
          const now = Date.now();
          
          if (entry.isIntersecting) {
            // Section became visible
            if (sectionId === 'skills') skillsStartTime = now;
            if (sectionId === 'projects') projectsStartTime = now;
            if (sectionId === 'experience') experienceStartTime = now;
          } else {
            // Section left viewport
            if (sectionId === 'skills' && skillsStartTime > 0) {
              setVisitorContext(prev => ({
                ...prev,
                timeOnSkills: prev.timeOnSkills + (now - skillsStartTime) / 1000
              }));
            }
            if (sectionId === 'projects' && projectsStartTime > 0) {
              setVisitorContext(prev => ({
                ...prev,
                timeOnProjects: prev.timeOnProjects + (now - projectsStartTime) / 1000
              }));
            }
            if (sectionId === 'experience' && experienceStartTime > 0) {
              setVisitorContext(prev => ({
                ...prev,
                timeOnExperience: prev.timeOnExperience + (now - experienceStartTime) / 1000
              }));
            }
          }
        });
      }, { threshold: 0.5 });

      sectionElements.forEach(element => {
        if (element) observer.observe(element);
      });

      return () => observer.disconnect();
    };

    const trackScrollDepth = () => {
      const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        setVisitorContext(prev => ({
          ...prev,
          scrollDepth: Math.max(prev.scrollDepth, scrollPercent)
        }));
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    };

    const trackTheme = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setVisitorContext(prev => ({
        ...prev,
        preferredTheme: isDark ? 'dark' : 'light'
      }));
    };

    const handleProjectViewed = (event: CustomEvent) => {
      setVisitorContext(prev => ({
        ...prev,
        viewedProjects: prev.viewedProjects + 1
      }));
    };

    // Listen for project view events
    window.addEventListener('projectViewed', handleProjectViewed as EventListener);

    const cleanupSectionTracking = trackSectionTime();
    const cleanupScrollTracking = trackScrollDepth();
    trackTheme();

    // Show CTA after 5 seconds or 30% scroll for better testing
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    const showOnScroll = () => {
      if (visitorContext.scrollDepth > 30) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', showOnScroll);

    return () => {
      cleanupSectionTracking();
      cleanupScrollTracking();
      clearTimeout(showTimer);
      window.removeEventListener('scroll', showOnScroll);
      window.removeEventListener('projectViewed', handleProjectViewed as EventListener);
    };
  }, [visitorContext.scrollDepth]);

  const ctaOptions: CTAOption[] = [
    {
      id: 'product-strategy',
      primary: 'Discuss Product Strategy',
      secondary: 'You seem interested in my PM approach',
      icon: <MessageCircle size={20} />,
      action: () => window.open(content.links.linkedin, '_blank'),
      priority: 10,
      conditions: (context) => context.timeOnSkills > 10 || context.timeOnExperience > 8
    },
    {
      id: 'case-studies',
      primary: 'See Detailed Case Studies',
      secondary: 'Dive deeper into my project work',
      icon: <ExternalLink size={20} />,
      action: () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
      },
      priority: 8,
      conditions: (context) => context.timeOnProjects > 15 && context.viewedProjects < 2
    },
    {
      id: 'download-resume',
      primary: 'Download Resume',
      secondary: 'Get the full professional summary',
      icon: <Download size={20} />,
      action: () => {
        const link = document.createElement('a');
        link.href = content.links.resume;
        link.download = 'Likhith-Lanka-Resume.pdf';
        link.click();
        setVisitorContext(prev => ({ ...prev, hasDownloadedResume: true }));
      },
      priority: 6,
      conditions: (context) => !context.hasDownloadedResume && context.scrollDepth > 25
    },
    {
      id: 'connect-linkedin',
      primary: 'Connect on LinkedIn',
      secondary: 'Let\'s continue the conversation',
      icon: <Linkedin size={20} />,
      action: () => {
        window.open(content.links.linkedin, '_blank');
        setVisitorContext(prev => ({ ...prev, hasVisitedLinkedIn: true }));
      },
      priority: 5,
      conditions: (context) => !context.hasVisitedLinkedIn && context.scrollDepth > 40
    },
    {
      id: 'schedule-call',
      primary: 'Schedule a Call',
      secondary: 'Ready to discuss opportunities?',
      icon: <Calendar size={20} />,
      action: () => window.open('https://calendly.com/likhith-lanka', '_blank'),
      priority: 9,
      conditions: (context) => context.scrollDepth > 60 || (context.timeOnSkills > 15 && context.timeOnProjects > 10)
    }
  ];

  useEffect(() => {
    // Determine the best CTA based on visitor behavior
    const eligibleCTAs = ctaOptions.filter(cta => 
      cta.conditions(visitorContext) && !dismissedCTAs.has(cta.id)
    );
    const bestCTA = eligibleCTAs.sort((a, b) => b.priority - a.priority)[0];
    setCurrentCTA(bestCTA || null);
  }, [visitorContext, dismissedCTAs]);

  const handleDismiss = () => {
    if (currentCTA) {
      const newDismissed = new Set(dismissedCTAs);
      newDismissed.add(currentCTA.id);
      setDismissedCTAs(newDismissed);
      saveDismissedCTAs(newDismissed);
    }
    setIsVisible(false);
  };

  if (!isVisible || !currentCTA) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 transform transition-all duration-300 hover:scale-105">
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          ×
        </button>
        
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
            {currentCTA.icon}
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
              {currentCTA.primary}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              {currentCTA.secondary}
            </p>
            
            <div className="flex space-x-2">
              <button
                onClick={currentCTA.action}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                {currentCTA.primary}
              </button>
              <button
                onClick={handleDismiss}
                className="px-4 py-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-sm transition-colors"
              >
                Maybe later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

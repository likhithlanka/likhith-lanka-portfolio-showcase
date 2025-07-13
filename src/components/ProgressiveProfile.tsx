import { useState, useEffect } from 'react';

interface ProfileStage {
  depth: number;
  title: string;
  description: string;
  color: string;
}

export const ProgressiveProfile = () => {
  const [scrollDepth, setScrollDepth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const profileStages: ProfileStage[] = [
    { 
      depth: 0, 
      title: "Product Manager", 
      description: "Strategic thinking & execution",
      color: "from-blue-500 to-blue-600"
    },
    { 
      depth: 25, 
      title: "Data-Driven Leader", 
      description: "Analytics & insights focused",
      color: "from-green-500 to-green-600"
    },
    { 
      depth: 50, 
      title: "Technical Product Expert", 
      description: "Bridge between tech & business",
      color: "from-purple-500 to-purple-600"
    },
    { 
      depth: 75, 
      title: "Full-Stack PM", 
      description: "End-to-end product ownership",
      color: "from-orange-500 to-orange-600"
    },
    { 
      depth: 90, 
      title: "Innovation Catalyst", 
      description: "AI & future-tech product leader",
      color: "from-pink-500 to-pink-600"
    }
  ];

  useEffect(() => {
    const calculateScrollDepth = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
      setScrollDepth(scrollPercent);
    };

    const handleScroll = () => {
      calculateScrollDepth();
      // Show after 20% scroll
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    calculateScrollDepth(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getCurrentStage = (): ProfileStage => {
    for (let i = profileStages.length - 1; i >= 0; i--) {
      if (scrollDepth >= profileStages[i].depth) {
        return profileStages[i];
      }
    }
    return profileStages[0];
  };

  const currentStage = getCurrentStage();

  if (!isVisible) return null;

  return (
    <div className="progressive-profile">
      <div className="flex items-center mb-3">
        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${currentStage.color} mr-2 floating-icon`} />
        <div className="profile-stage-title">
          {currentStage.title}
        </div>
      </div>
      
      <div className="profile-stage-description">
        {currentStage.description}
      </div>
      
      <div className="profile-progress-bar">
        <div 
          className="profile-progress-fill"
          style={{ width: `${scrollDepth}%` }}
        />
      </div>
      
      <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
        Profile: {Math.round(scrollDepth)}% revealed
      </div>
    </div>
  );
};

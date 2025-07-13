import { useState, useEffect } from 'react';
import { Eye, Download, Bookmark, MessageCircle } from 'lucide-react';

interface SocialProofItem {
  id: number;
  text: string;
  icon: React.ReactNode;
  timestamp: number;
}

export const SocialProof = () => {
  const [recentViews, setRecentViews] = useState<SocialProofItem[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const proofTemplates = [
    {
      text: "Recruiter from Microsoft viewed your profile",
      icon: <Eye className="w-3 h-3" />
    },
    {
      text: "PM from Google downloaded your resume",
      icon: <Download className="w-3 h-3" />
    },
    {
      text: "Tech lead from Amazon bookmarked your portfolio",
      icon: <Bookmark className="w-3 h-3" />
    },
    {
      text: "Product director from Meta shared your profile",
      icon: <MessageCircle className="w-3 h-3" />
    },
    {
      text: "Senior PM from Netflix viewed your projects",
      icon: <Eye className="w-3 h-3" />
    },
    {
      text: "Startup founder from YC downloaded your resume",
      icon: <Download className="w-3 h-3" />
    },
    {
      text: "Engineering manager from Stripe bookmarked your work",
      icon: <Bookmark className="w-3 h-3" />
    }
  ];

  useEffect(() => {
    // Show social proof after user has been on site for 30 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 30000);

    // Generate random social proof notifications
    const proofInterval = setInterval(() => {
      if (Math.random() > 0.6) { // 40% chance every 45 seconds
        const randomProof = proofTemplates[Math.floor(Math.random() * proofTemplates.length)];
        const newItem: SocialProofItem = {
          id: Date.now(),
          text: randomProof.text,
          icon: randomProof.icon,
          timestamp: Date.now()
        };
        
        setRecentViews(prev => {
          const updated = [...prev, newItem];
          // Keep only last 3 items
          return updated.slice(-3);
        });

        // Remove item after 8 seconds
        setTimeout(() => {
          setRecentViews(prev => prev.filter(item => item.id !== newItem.id));
        }, 8000);
      }
    }, 45000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(proofInterval);
    };
  }, []);

  // Don't show if user hasn't been on site long enough
  if (!isVisible || recentViews.length === 0) return null;

  return (
    <div className="social-proof-container">
      {recentViews.map((item) => (
        <div 
          key={item.id}
          className="social-proof-item"
        >
          <div className="flex items-center">
            <div className="social-proof-indicator" />
            <div className="text-green-600 dark:text-green-400 mr-2">
              {item.icon}
            </div>
            <p className="social-proof-text">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

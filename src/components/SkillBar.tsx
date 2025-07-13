import { useEffect, useState } from 'react';

interface SkillBarProps {
  skill: string;
  level: number;
  delay?: number;
}

export const SkillBar = ({ skill, level, delay = 0 }: SkillBarProps) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => {
            setAnimatedLevel(level);
          }, delay);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`skill-${skill.replace(/\s+/g, '-').toLowerCase()}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [skill, level, delay]);

  return (
    <div 
      id={`skill-${skill.replace(/\s+/g, '-').toLowerCase()}`}
      className={`skill-bar mb-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
        <div 
          className="skill-bar-fill h-full rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: `${animatedLevel}%`,
            background: `linear-gradient(90deg, #3b82f6 0%, #1d4ed8 ${Math.min(level, 100)}%)`,
          }}
        />
      </div>
    </div>
  );
};

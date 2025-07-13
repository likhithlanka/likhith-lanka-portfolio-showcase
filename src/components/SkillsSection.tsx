
import { useState, useEffect, useRef } from 'react';
import { useContent } from '../contexts/ContentContext';
import designSystem from '../lib/design-system';
import { Download, MessageCircle } from 'lucide-react';

const SkillsSection = () => {
  const { content } = useContent();
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set());
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);
  const [showCTA, setShowCTA] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Add CSS styles for falling animation with accessibility support
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Skip animations for users who prefer reduced motion
      setAnimatedSkills(new Set(allSkills.map(skill => skill.name)));
      return;
    }

    const style = document.createElement('style');
    style.textContent = `
      .skill-fall-in {
        animation: skillFallIn ${designSystem.animations.duration.slower} ${designSystem.animations.easing.bounce} forwards;
      }
      
      .skill-pre-fall {
        transform: translateY(-100px) scale(0.8) rotate(-5deg);
        opacity: 0;
      }

      @keyframes skillFallIn {
        0% {
          transform: translateY(-100px) scale(0.8) rotate(-5deg);
          opacity: 0;
        }
        60% {
          transform: translateY(10px) scale(1.05) rotate(0deg);
          opacity: 1;
        }
        100% {
          transform: translateY(0) scale(1) rotate(0deg);
          opacity: 1;
        }
      }

      .skill-card {
        cursor: pointer;
        transition: all ${designSystem.animations.duration.normal} ${designSystem.animations.easing.easeInOut};
      }

      .skill-card:hover {
        transform: translateY(-4px) scale(1.02);
        filter: brightness(1.1);
        box-shadow: ${designSystem.shadows.xl};
      }

      .skill-card:focus {
        outline: 2px solid ${designSystem.colors.primary[500]};
        outline-offset: 2px;
      }

      .skill-expanded {
        z-index: 100 !important;
        transform: scale(1.1);
        box-shadow: ${designSystem.shadows['2xl']};
      }

      .skill-details {
        position: absolute;
        bottom: -40px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.9);
        color: white;
        padding: 8px 12px;
        border-radius: 6px;
        font-size: 0.75rem;
        white-space: nowrap;
        opacity: 0;
        animation: fadeInUp 0.3s ease-out forwards;
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateX(-50%) translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }
      }

      .cta-slide-in {
        animation: slideInFromBottom 0.5s ease-out forwards;
      }

      @keyframes slideInFromBottom {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .skill-fall-in,
        .skill-pre-fall,
        .skill-card,
        .skill-details,
        .cta-slide-in {
          animation: none !important;
          transition: none !important;
        }
        
        .skill-pre-fall {
          opacity: 1;
          transform: none;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Enhanced skills array with experience years and proficiency
  const allSkills = [
    // Leadership
    { name: 'Strategic Planning', category: 'Leadership', priority: 1, gradient: designSystem.gradients.leadership, size: 'large', years: '5+', proficiency: 95 },
    { name: 'Team Leadership', category: 'Leadership', priority: 1, gradient: designSystem.gradients.leadership, size: 'large', years: '4+', proficiency: 90 },
    { name: 'Stakeholder Management', category: 'Leadership', priority: 1, gradient: designSystem.gradients.leadership, size: 'large', years: '5+', proficiency: 88 },
    { name: 'Communication', category: 'Leadership', priority: 1, gradient: designSystem.gradients.leadership, size: 'large', years: '6+', proficiency: 92 },
    { name: 'Problem Solving', category: 'Leadership', priority: 1, gradient: designSystem.gradients.leadership, size: 'large', years: '5+', proficiency: 94 },
    
    // Product
    { name: 'Product Strategy', category: 'Product', priority: 2, gradient: designSystem.gradients.product, size: 'medium', years: '4+', proficiency: 90 },
    { name: 'Roadmap Planning', category: 'Product', priority: 2, gradient: designSystem.gradients.product, size: 'medium', years: '4+', proficiency: 85 },
    { name: 'User Research', category: 'Product', priority: 2, gradient: designSystem.gradients.product, size: 'medium', years: '3+', proficiency: 80 },
    { name: 'Agile/Scrum', category: 'Product', priority: 2, gradient: designSystem.gradients.product, size: 'medium', years: '4+', proficiency: 88 },
    { name: 'Feature Prioritization', category: 'Product', priority: 2, gradient: designSystem.gradients.product, size: 'medium', years: '4+', proficiency: 87 },
    { name: 'Market Research', category: 'Product', priority: 2, gradient: designSystem.gradients.product, size: 'medium', years: '3+', proficiency: 75 },
    
    // Analytics
    { name: 'Data Analysis', category: 'Analytics', priority: 3, gradient: designSystem.gradients.analytics, size: 'small', years: '3+', proficiency: 85 },
    { name: 'SQL', category: 'Analytics', priority: 3, gradient: designSystem.gradients.analytics, size: 'small', years: '3+', proficiency: 80 },
    { name: 'Python', category: 'Analytics', priority: 3, gradient: designSystem.gradients.analytics, size: 'small', years: '2+', proficiency: 70 },
    { name: 'KPI Definition', category: 'Analytics', priority: 3, gradient: designSystem.gradients.analytics, size: 'small', years: '4+', proficiency: 90 },
    { name: 'Data Visualization', category: 'Analytics', priority: 3, gradient: designSystem.gradients.analytics, size: 'small', years: '3+', proficiency: 78 },
    
    // Tools
    { name: 'Figma', category: 'Tools', priority: 4, gradient: designSystem.gradients.tools, size: 'tiny', years: '3+', proficiency: 85 },
    { name: 'Tableau', category: 'Tools', priority: 4, gradient: designSystem.gradients.tools, size: 'tiny', years: '2+', proficiency: 75 },
    { name: 'Jira', category: 'Tools', priority: 4, gradient: designSystem.gradients.tools, size: 'tiny', years: '4+', proficiency: 90 },
    { name: 'Excel', category: 'Tools', priority: 4, gradient: designSystem.gradients.tools, size: 'tiny', years: '6+', proficiency: 95 },
    { name: 'PowerPoint', category: 'Tools', priority: 4, gradient: designSystem.gradients.tools, size: 'tiny', years: '6+', proficiency: 92 },
    { name: 'A/B Testing', category: 'Tools', priority: 4, gradient: designSystem.gradients.tools, size: 'tiny', years: '3+', proficiency: 80 }
  ];

  // Simple tree map positioning with improved alignment
  const getTreeMapPosition = (index: number, priority: number, size: string) => {
    const layout = [
      // Leadership - Top Left (better spacing)
      { left: '2%', top: '8%', width: '20%', height: '18%' },
      { left: '24%', top: '8%', width: '18%', height: '15%' },
      { left: '2%', top: '28%', width: '20%', height: '15%' },
      { left: '24%', top: '25%', width: '18%', height: '12%' },
      { left: '2%', top: '45%', width: '18%', height: '12%' },
      
      // Product - Top Right (better spacing)
      { left: '55%', top: '8%', width: '18%', height: '18%' },
      { left: '75%', top: '8%', width: '22%', height: '15%' },
      { left: '55%', top: '28%', width: '20%', height: '15%' },
      { left: '77%', top: '25%', width: '20%', height: '12%' },
      { left: '55%', top: '45%', width: '18%', height: '12%' },
      { left: '75%', top: '40%', width: '22%', height: '12%' },
      
      // Analytics - Bottom Left (better spacing)
      { left: '2%', top: '62%', width: '16%', height: '12%' },
      { left: '20%', top: '62%', width: '14%', height: '12%' },
      { left: '36%', top: '62%', width: '12%', height: '12%' },
      { left: '2%', top: '76%', width: '18%', height: '12%' },
      { left: '22%', top: '76%', width: '16%', height: '12%' },
      
      // Tools - Bottom Right (better spacing)
      { left: '55%', top: '62%', width: '12%', height: '12%' },
      { left: '69%', top: '62%', width: '12%', height: '12%' },
      { left: '83%', top: '62%', width: '14%', height: '12%' },
      { left: '55%', top: '76%', width: '14%', height: '12%' },
      { left: '71%', top: '76%', width: '12%', height: '12%' },
      { left: '85%', top: '76%', width: '12%', height: '12%' }
    ];
    
    return layout[index] || { left: '40%', top: '85%', width: '20%', height: '10%' };
  };

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
            // Animate skills one by one with staggered timing for falling effect
            allSkills.forEach((skill, index) => {
              setTimeout(() => {
                setAnimatedSkills(prev => new Set([...prev, skill.name]));
              }, index * 120); // Slightly faster stagger for better effect
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [allSkills]);

  // Show CTA after animation completes
  useEffect(() => {
    if (animatedSkills.size === allSkills.length) {
      setTimeout(() => {
        setShowCTA(true);
      }, 1000);
    }
  }, [animatedSkills.size, allSkills.length]);

  // Handle skill click for expansion
  const handleSkillClick = (skillName: string) => {
    setExpandedSkill(expandedSkill === skillName ? null : skillName);
  };

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-gray-50 dark:bg-gray-900/50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 
            className="text-gray-900 dark:text-white mb-4"
            style={{
              fontSize: designSystem.components.heading.h2.fontSize,
              fontWeight: designSystem.components.heading.h2.fontWeight,
              lineHeight: designSystem.components.heading.h2.lineHeight,
              letterSpacing: designSystem.components.heading.h2.letterSpacing,
            }}
          >
            Skills & Expertise
          </h2>
          <p 
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8"
            style={{
              fontSize: designSystem.components.text.bodyLarge.fontSize,
              fontWeight: designSystem.components.text.bodyLarge.fontWeight,
              lineHeight: designSystem.components.text.bodyLarge.lineHeight,
            }}
          >
            Proven expertise across product management, leadership, and analytics. Click on any skill to see experience level.
          </p>
        </div>

        {/* Simple Tree Map Container */}
        <div 
          className="relative bg-white dark:bg-gray-800 overflow-hidden"
          style={{
            minHeight: '520px',
            borderRadius: designSystem.borderRadius['3xl'],
            boxShadow: designSystem.shadows['2xl'],
            padding: '8px',
          }}
        >
          {/* Category Dividers */}
          <div className="absolute inset-2 pointer-events-none">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-600 opacity-30"></div>
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-200 dark:bg-gray-600 opacity-30"></div>
          </div>

          {/* Category Labels */}
          <div 
            className="absolute top-4 left-4 bg-white/80 dark:bg-gray-800/80 px-3 py-1 z-20"
            style={{
              fontSize: designSystem.components.text.caption.fontSize,
              fontWeight: designSystem.typography.weights.semibold,
              color: designSystem.colors.secondary[600],
              borderRadius: designSystem.borderRadius.base,
            }}
          >
            Leadership
          </div>
          <div 
            className="absolute top-4 right-4 bg-white/80 dark:bg-gray-800/80 px-3 py-1 z-20"
            style={{
              fontSize: designSystem.components.text.caption.fontSize,
              fontWeight: designSystem.typography.weights.semibold,
              color: designSystem.colors.primary[600],
              borderRadius: designSystem.borderRadius.base,
            }}
          >
            Product
          </div>
          <div 
            className="absolute bottom-4 left-4 bg-white/80 dark:bg-gray-800/80 px-3 py-1 z-20"
            style={{
              fontSize: designSystem.components.text.caption.fontSize,
              fontWeight: designSystem.typography.weights.semibold,
              color: designSystem.colors.accent.emerald[600],
              borderRadius: designSystem.borderRadius.base,
            }}
          >
            Analytics
          </div>
          <div 
            className="absolute bottom-4 right-4 bg-white/80 dark:bg-gray-800/80 px-3 py-1 z-20"
            style={{
              fontSize: designSystem.components.text.caption.fontSize,
              fontWeight: designSystem.typography.weights.semibold,
              color: designSystem.colors.accent.orange[600],
              borderRadius: designSystem.borderRadius.base,
            }}
          >
            Tools
          </div>

          {/* Skills with Falling Animation */}
          {allSkills.map((skill, index) => {
            const position = getTreeMapPosition(index, skill.priority, skill.size);
            const isAnimated = animatedSkills.has(skill.name);
            const isExpanded = expandedSkill === skill.name;
            
            return (
              <div
                key={skill.name}
                className={`absolute transition-all duration-300 ease-out ${
                  isAnimated ? 'skill-fall-in' : 'skill-pre-fall'
                } ${isExpanded ? 'skill-expanded' : ''}`}
                style={{
                  left: position.left,
                  top: position.top,
                  width: position.width,
                  height: position.height,
                  animationDelay: `${index * 120}ms`,
                  zIndex: isExpanded ? 100 : skill.priority === 1 ? 20 : skill.priority === 2 ? 15 : skill.priority === 3 ? 10 : 5
                }}
              >
                <div 
                  className="skill-card relative w-full h-full text-white transition-all duration-300 cursor-pointer flex flex-col justify-center items-center overflow-hidden"
                  style={{
                    background: skill.gradient,
                    borderRadius: designSystem.borderRadius.lg,
                    boxShadow: designSystem.shadows.lg,
                    padding: designSystem.components.skill[skill.size as keyof typeof designSystem.components.skill]?.padding || designSystem.spacing[2],
                    minHeight: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onClick={() => handleSkillClick(skill.name)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSkillClick(skill.name);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`${skill.name} skill - ${skill.years} years experience, ${skill.proficiency}% proficiency. Click to expand details.`}
                  aria-expanded={isExpanded}
                >
                  <div 
                    className="text-center leading-tight select-none break-words z-10 relative"
                    style={{
                      fontSize: designSystem.components.skill[skill.size as keyof typeof designSystem.components.skill]?.fontSize || designSystem.typography.sizes.sm,
                      fontWeight: designSystem.components.skill[skill.size as keyof typeof designSystem.components.skill]?.fontWeight || designSystem.typography.weights.medium,
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                      maxWidth: '90%',
                    }}
                  >
                    {skill.name}
                  </div>
                  
                  {/* Experience indicator */}
                  <div 
                    className="absolute top-1 right-1 bg-white/20 text-white px-1 py-0.5 rounded text-xs font-medium"
                    style={{ fontSize: '0.6rem' }}
                  >
                    {skill.years}
                  </div>
                  
                  {/* Proficiency bar */}
                  <div className="absolute bottom-1 left-1 right-1 h-1 bg-white/20 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-white/60 rounded-full transition-all duration-1000"
                      style={{ 
                        width: isAnimated ? `${skill.proficiency}%` : '0%',
                        transitionDelay: `${index * 120 + 400}ms`
                      }}
                    />
                  </div>
                  
                  {/* Expanded details */}
                  {isExpanded && (
                    <div className="skill-details">
                      <div className="text-center">
                        <div className="font-semibold">{skill.proficiency}% Proficiency</div>
                        <div className="text-xs opacity-80">{skill.years} years experience</div>
                      </div>
                    </div>
                  )}
                  
                  <div 
                    className="absolute inset-0"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: designSystem.borderRadius.lg,
                    }}
                  ></div>
                  <div 
                    className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-200"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: designSystem.borderRadius.lg,
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call-to-Action Section */}
        {showCTA && (
          <div className="mt-12 text-center cta-slide-in">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 
                className="text-gray-900 dark:text-white mb-4"
                style={{
                  fontSize: designSystem.components.heading.h4.fontSize,
                  fontWeight: designSystem.components.heading.h4.fontWeight,
                  lineHeight: designSystem.components.heading.h4.lineHeight,
                }}
              >
                Ready to put these skills to work?
              </h3>
              <p 
                className="text-gray-600 dark:text-gray-400 mb-6"
                style={{
                  fontSize: designSystem.components.text.body.fontSize,
                  fontWeight: designSystem.components.text.body.fontWeight,
                  lineHeight: designSystem.components.text.body.lineHeight,
                }}
              >
                Let's discuss how my expertise can drive your product forward. I'm available for product management roles, consulting, or strategic advisory.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                  style={{
                    fontSize: designSystem.components.text.body.fontSize,
                    fontWeight: designSystem.typography.weights.semibold,
                  }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Let's Talk
                </button>
                <button
                  onClick={() => {
                    // Download resume
                    const link = document.createElement('a');
                    link.href = '/resume-likhith-lanka.pdf';
                    link.download = 'Likhith_Lanka_Resume.pdf';
                    link.click();
                  }}
                  className="px-6 py-3 bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 hover:border-gray-300 rounded-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                  style={{
                    fontSize: designSystem.components.text.body.fontSize,
                    fontWeight: designSystem.typography.weights.semibold,
                  }}
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;

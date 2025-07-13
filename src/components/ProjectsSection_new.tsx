import { ExternalLink, Github } from 'lucide-react';
import { useEffect } from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI Cover Letter Tool",
      description: "Led development of an AI-driven cover letter tool from ideation to deployment, writing PRDs and designing the system architecture, reducing cover letter creation time by 50%.",
      impact: "50% time reduction",
      technologies: ["AI/ML", "System Architecture", "Product Strategy"],
      metrics: "PRDs written, system designed",
      link: "#",
      icon: "🤖"
    },
    {
      title: "AI CV Optimization Platform",
      description: "Led development of a microservices-based platform with systemized skill clustering and LLM-driven analysis of 2K+ job descriptions, achieving 200+ new user sign-ups within the first week.",
      impact: "200+ signups in week 1",
      technologies: ["Microservices", "LLM", "Data Analysis"],
      metrics: "2K+ job descriptions analyzed",
      link: "#",
      icon: "📄"
    },
    {
      title: "Data Pipeline Automation",
      description: "Developed automated ETL pipelines with ML-driven validation checks for CV optimization tool, boosting data accuracy by 40% and cutting manual processing time by 60%.",
      impact: "40% accuracy boost",
      technologies: ["ETL", "Machine Learning", "Data Validation"],
      metrics: "60% time reduction",
      link: "#",
      icon: "⚡"
    },
    {
      title: "Notion Knowledge Management",
      description: "Launched a one-click knowledge management system in Notion with AI-powered summarization and Looker analytics dashboard, driving data-informed learning patterns.",
      impact: "One-click solution",
      technologies: ["Notion API", "AI Summarization", "Looker"],
      metrics: "Data-informed insights",
      link: "#",
      icon: "📚"
    },
    {
      title: "Product Development Acceleration",
      description: "Leveraged expertise in AI product management, system design, data mining, and SQL to accelerate CVcraft development cycles by 30%.",
      impact: "30% faster development",
      technologies: ["AI Product Management", "System Design", "SQL"],
      metrics: "Development cycle optimization",
      link: "#",
      icon: "🚀"
    }
  ];

  useEffect(() => {
    // Track project card interactions
    const projectCards = document.querySelectorAll('.project-card');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Dispatch custom event for SmartCTA tracking
          window.dispatchEvent(new CustomEvent('projectViewed', {
            detail: { projectIndex: Array.from(projectCards).indexOf(entry.target) }
          }));
        }
      });
    }, { threshold: 0.7 });

    projectCards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800/50 parallax-bg">
      <div className="container-width">
        <div className="observe-on-scroll opacity-0 staggered-animation">
          <div className="section-header-enhanced">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white magnetic-hover">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
              Innovative solutions that blend AI, data analytics, and user-centric design
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="project-card project-card-enhanced group magnetic-hover">
                <div className="text-4xl mb-4 floating-element">{project.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {project.technologies && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-primary bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full mb-1">
                      {project.impact}
                    </span>
                    {project.metrics && (
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {project.metrics}
                      </span>
                    )}
                  </div>
                  <button className="p-2 text-gray-400 dark:text-gray-500 hover:text-primary transition-colors magnetic-hover">
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

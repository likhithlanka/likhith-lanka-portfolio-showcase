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
      title: "Product Development Accelerator",
      description: "Created AI-assisted product management tools and automated workflows that streamlined development processes and improved team productivity.",
      impact: "30% faster development",
      technologies: ["Automation", "AI/ML", "Agile Tools"],
      metrics: "15+ teams using framework",
      link: "#",
      icon: "🚀"
    },
    {
      title: "Predictive Analytics Dashboard",
      description: "Built comprehensive business intelligence dashboard with predictive modeling capabilities, enabling data-driven decision making for executives.",
      impact: "35% forecast accuracy",
      technologies: ["Tableau", "Python", "SQL", "Machine Learning"],
      metrics: "500+ stakeholders impacted",
      link: "#",
      icon: "📊"
    }
  ];

  useEffect(() => {
    // Track project card interactions
    const projectCards = document.querySelectorAll('.project-card');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.3 });

    projectCards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900/50 parallax-bg">
      <div className="container-width">
        <div className="observe-on-scroll opacity-0 staggered-animation">
          <div className="section-header-enhanced">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white magnetic-hover">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
              Real-world applications of AI and data science in product development
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="project-card card-enhanced hover-lift magnetic-hover group">
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="text-3xl mb-3">{project.icon}</div>
                    <div className="flex space-x-2">
                      <a 
                        href={project.link} 
                        className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-primary hover:text-white transition-colors group-hover:scale-110"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} />
                      </a>
                      <a 
                        href={project.link} 
                        className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-primary hover:text-white transition-colors group-hover:scale-110"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} />
                      </a>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-primary">Impact:</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{project.impact}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-primary">Metrics:</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{project.metrics}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="skill-tag-enhanced text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
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

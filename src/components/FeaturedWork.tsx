import { ExternalLink, Github } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';

const FeaturedWork = () => {
  const { content } = useContent();
  const { featuredWork } = content;

  const projectIcons = {
    aiCoverLetter: "🤖",
    aiCvPlatform: "📄", 
    dataPipeline: "⚡"
  };

  return (
    <section id="featured-work" className="section-padding bg-gray-50 dark:bg-gray-900/50 parallax-bg">
      <div className="container-width">
        <div className="observe-on-scroll opacity-0 staggered-animation">
          <div className="section-header-enhanced">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white magnetic-hover">
              {featuredWork.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
              {featuredWork.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(featuredWork.projects).map(([key, project], index) => (
              <div key={index} className="project-card card-enhanced hover-lift magnetic-hover group">
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="text-3xl mb-3">{projectIcons[key as keyof typeof projectIcons]}</div>
                    <div className="flex space-x-2">
                      <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-primary hover:text-white transition-colors group-hover:scale-110">
                        <ExternalLink size={16} />
                      </button>
                      <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-primary hover:text-white transition-colors group-hover:scale-110">
                        <Github size={16} />
                      </button>
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

export default FeaturedWork;

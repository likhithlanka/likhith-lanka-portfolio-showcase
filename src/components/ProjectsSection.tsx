
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI Cover Letter Tool",
      description: "Led development of an AI-driven cover letter tool from ideation to deployment, reducing cover letter creation time by 50%.",
      impact: "50% time reduction",
      link: "#",
      icon: "🤖"
    },
    {
      title: "AI CV Optimization Platform",
      description: "Developed a microservices platform with automated skill-clustering and LLM analysis of 2K+ job descriptions, achieving 200+ sign-ups in week one.",
      impact: "200+ sign-ups",
      link: "#",
      icon: "📄"
    },
    {
      title: "Data Pipeline Automation",
      description: "Built automated ETL pipelines with ML-driven validation, boosting data accuracy by 40%.",
      impact: "40% accuracy boost",
      link: "#",
      icon: "⚡"
    },
    {
      title: "Notion Library System",
      description: "Launched a one-click knowledge management system in Notion with AI-powered summarization and an embedded Looker analytics dashboard.",
      impact: "One-click solution",
      link: "#",
      icon: "📚"
    },
    {
      title: "Product Development Acceleration",
      description: "Leveraged AI product management and data mining expertise to speed up development cycles by 30%.",
      impact: "30% faster cycles",
      link: "#",
      icon: "🚀"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-width">
        <div className="observe-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover-lift group">
                <div className="text-4xl mb-4">{project.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary bg-blue-50 px-3 py-1 rounded-full">
                    {project.impact}
                  </span>
                  <button className="p-2 text-gray-400 hover:text-primary transition-colors">
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

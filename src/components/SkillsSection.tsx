
import { useContent } from '../contexts/ContentContext';

const SkillsSection = () => {
  const { content } = useContent();
  const { skills } = content;

  return (
    <section id="skills" className="section-padding parallax-bg">
      <div className="container-width">
        <div className="observe-on-scroll opacity-0 staggered-animation">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {skills.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {skills.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.values(skills.categories).map((category, index) => (
              <div key={index} className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover-lift transition-all duration-300 hover:shadow-lg hover:border-primary/20">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-xl font-bold">
                      {category.title.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-tag-enhanced">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

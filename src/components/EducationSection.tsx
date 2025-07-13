
import { GraduationCap } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';

const EducationSection = () => {
  const { content } = useContent();
  const { education } = content;

  return (
    <section id="education" className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-width">
        <div className="observe-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            <GraduationCap className="inline-block mr-3 mb-1" size={36} />
            {education.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.values(education.items).map((edu, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 hover-lift">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{edu.degree}</h3>
                <h4 className="text-lg font-medium text-primary mb-2">{edu.institution}</h4>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</p>
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs font-medium">
                    {edu.gpa}
                  </span>
                </div>
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-300 flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      <span className="text-sm leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;


import { GraduationCap } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "MBA",
      institution: "IIM Calcutta",
      period: "2021 – 2023",
      achievements: [
        "Vice President of Data Analytics Club",
        "Campus winner of the Microsoft PM Engage competition",
        "National finalist in WinZO BOSS and Global Management Challenge"
      ]
    },
    {
      degree: "B.Tech, Computer Science",
      institution: "IIIT Sri City",
      period: "2015 – 2019",
      achievements: [
        "Founder of CodeChef Campus Chapter (5-star rated)",
        "Teaching Assistant for C Programming and Algorithms"
      ]
    }
  ];

  return (
    <section id="education" className="section-padding bg-gray-50">
      <div className="container-width">
        <div className="observe-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            <GraduationCap className="inline-block mr-3 mb-1" size={36} />
            Education
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover-lift">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{edu.degree}</h3>
                <h4 className="text-lg font-medium text-primary mb-2">{edu.institution}</h4>
                <p className="text-sm text-gray-500 mb-4">{edu.period}</p>
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-600 flex items-start">
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

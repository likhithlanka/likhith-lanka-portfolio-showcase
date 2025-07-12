
const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Product Management",
      skills: [
        "Product Strategy",
        "Road-mapping",
        "Feature Prioritization",
        "PRD Writing",
        "Agile",
        "A/B Testing",
        "OKRs"
      ]
    },
    {
      title: "Data & Analytics",
      skills: [
        "Python",
        "Data Analysis & Visualization",
        "Product Analytics",
        "Capacity Planning",
        "Machine Learning Integration"
      ]
    },
    {
      title: "Technical & Tools",
      skills: [
        "API Architecture",
        "System Design",
        "SQL",
        "Figma",
        "Tableau",
        "QuickSight",
        "Excel",
        "Git",
        "Asana",
        "Miro"
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-width">
        <div className="observe-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover-lift">
                <h3 className="text-xl font-semibold mb-6 text-gray-900 text-center">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
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

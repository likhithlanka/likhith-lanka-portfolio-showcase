
const ExperienceSection = () => {
  const experiences = [
    {
      title: "AFBP Program, Customer Service",
      company: "Amazon",
      period: "June 2023 – Present",
      highlights: [
        "Lead enterprise-wide BI transformation across 5 verticals, building user-centric dashboards (increasing Weekly Active Users by 35%)",
        "Owned forecasting automation features in the VIBE platform (delivering 5+ new features and reducing turnaround time by 20%)",
        "Developed bulk planning tools to standardize inputs and eliminate 100+ analyst hours of manual work"
      ]
    },
    {
      title: "Product Consultant",
      company: "Supply Compass",
      period: "June 2021 – Mar 2022",
      highlights: [
        "Conducted extensive user research (A/B tests, usability studies), driving UX improvements that increased satisfaction by 15%",
        "Led feature prioritization workshops with C-level stakeholders, accelerating development cycles by 20%",
        "Designed end-to-end supply chain visibility platform (PRDs and Figma prototypes), improving transparency by 30%"
      ]
    },
    {
      title: "Back-End Lead Developer",
      company: "Supply Compass",
      period: "Oct 2019 – June 2021",
      highlights: [
        "Architected HubSpot CRM integrations and automated admin dashboards (boosting qualified leads by 10%)",
        "Acted as Product Owner for backend services, optimizing sprint planning and delivering multiple API-driven features 20% faster",
        "Led a 4-person dev team building Python REST APIs, resulting in 30% faster deployment cycles"
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-width">
        <div className="observe-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover-lift">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                    <h4 className="text-lg font-medium text-primary">{exp.company}</h4>
                  </div>
                  <span className="text-sm text-gray-500 mt-2 md:mt-0">{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-gray-600 flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      <span className="text-sm leading-relaxed">{highlight}</span>
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

export default ExperienceSection;

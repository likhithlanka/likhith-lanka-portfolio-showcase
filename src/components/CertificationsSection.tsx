import { Award, CheckCircle, Star } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      status: "Active",
      level: "Associate",
      icon: "☁️"
    },
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google",
      date: "2023",
      status: "Completed",
      level: "Professional",
      icon: "📊"
    },
    {
      title: "Product Management Fundamentals",
      issuer: "Duke University",
      date: "2022",
      status: "Completed",
      level: "Certificate",
      icon: "🎓"
    },
    {
      title: "Machine Learning with Python",
      issuer: "IBM",
      date: "2022",
      status: "Completed",
      level: "Professional",
      icon: "🤖"
    }
  ];

  const achievements = [
    {
      title: "Microsoft PM Engage Competition",
      description: "Campus Champion - Led winning team in Microsoft's product management competition",
      year: "2023",
      icon: <Award className="w-5 h-5" />
    },
    {
      title: "Global Management Challenge",
      description: "National Finalist - Top 10 team in India's premier business strategy competition",
      year: "2022",
      icon: <Star className="w-5 h-5" />
    },
    {
      title: "WinZO BOSS Competition",
      description: "National Finalist - Strategic business case competition winner",
      year: "2022",
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      title: "CodeChef 5-Star Rating",
      description: "Achieved and maintained 5-star rating on competitive programming platform",
      year: "2019",
      icon: <Star className="w-5 h-5" />
    }
  ];

  return (
    <section id="certifications" className="section-padding bg-white dark:bg-gray-900/50 parallax-bg">
      <div className="container-width">
        <div className="observe-on-scroll opacity-0 staggered-animation">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white magnetic-hover">
            Certifications & Achievements
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white flex items-center">
                <Award className="mr-3 text-primary" size={28} />
                Professional Certifications
              </h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover-lift">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{cert.icon}</span>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">{cert.title}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        cert.status === 'Active' 
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'
                          : 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200'
                      }`}>
                        {cert.status}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</span>
                      <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">
                        {cert.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white flex items-center">
                <Star className="mr-3 text-primary" size={28} />
                Notable Achievements
              </h3>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover-lift">
                    <div className="flex items-start mb-3">
                      <div className="text-primary mr-3 mt-1">
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{achievement.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 ml-3">
                        {achievement.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;

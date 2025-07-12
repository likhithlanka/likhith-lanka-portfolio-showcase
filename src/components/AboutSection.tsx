
const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-width">
        <div className="observe-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Likhith is a Product Manager with 4+ years of cross-functional experience in product strategy, 
                  forecasting automation, capacity planning and engineering. He transitioned from backend development 
                  to product leadership, bridging business and technology.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Likhith holds an MBA from IIM Calcutta and has a strong technical foundation in system design, 
                  analytics, and AI-driven product development. His experience spans from leading enterprise-wide 
                  BI transformations at Amazon to architecting full-stack solutions at Supply Compass.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-6">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-primary">4+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-primary">35%</div>
                    <div className="text-sm text-gray-600">User Growth Achieved</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-primary">5+</div>
                    <div className="text-sm text-gray-600">Products Launched</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-primary">100+</div>
                    <div className="text-sm text-gray-600">Hours Automated</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                  LS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

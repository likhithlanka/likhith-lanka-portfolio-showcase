
import { Download, Linkedin, ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center section-padding pt-24">
      <div className="container-width text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm Likhith <span className="wave">👋</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light">
            Product Manager | Digital Strategy | IIM Calcutta
          </h2>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            4+ years of cross-functional experience in product strategy, forecasting automation, 
            capacity planning and engineering. Bridging business and technology to drive AI-driven product development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="/resume-likhith-lanka.pdf"
              download
              className="button-primary inline-flex items-center gap-2"
            >
              <Download size={20} />
              Resume
            </a>
            <a
              href="https://linkedin.com/in/likhith-lanka"
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary inline-flex items-center gap-2"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <button
              onClick={scrollToProjects}
              className="button-secondary inline-flex items-center gap-2"
            >
              Portfolio
            </button>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce inline-flex items-center text-gray-400 hover:text-gray-600 transition-colors"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

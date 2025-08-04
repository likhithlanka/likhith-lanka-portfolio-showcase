
import { Download, Linkedin, ArrowDown } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';

const HeroSection = () => {
  const { content } = useContent();
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
    <section id="hero" className="min-h-screen flex items-center justify-center section-padding pt-24 hero-enhanced">
      <div className="container-width text-center">
        <div className="animate-fade-in staggered-animation">
          <div className="floating-element mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8 magnetic-hover leading-tight">
              Hi, I'm <span className="handwritten">Likhith</span> <span className="wave">👋</span>
            </h1>
          </div>
          <div className="section-header-enhanced mb-10">
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              {content.hero.subtitle}
            </h2>
          </div>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-14 max-w-2xl mx-auto leading-relaxed">
            {content.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 staggered-animation">
            <a
              href={content.links.resume}
              download
              className="button-enhanced magnetic-hover"
            >
              <Download size={20} />
              Download Resume
            </a>
            <a
              href={content.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary inline-flex items-center gap-2 magnetic-hover"
            >
              <Linkedin size={20} />
              LinkedIn Profile
            </a>
            <a
              href={content.links.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary inline-flex items-center gap-2 magnetic-hover"
            >
              Portfolio
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce inline-flex items-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors magnetic-hover"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


import { useContent } from '../contexts/ContentContext';

const AboutSection = () => {
  const { content } = useContent();
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-800/50 parallax-bg">
      <div className="container-width">
        <div className="observe-on-scroll opacity-0 staggered-animation">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white magnetic-hover">
              {content.about.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-3">
              {content.about.subtitle}
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                {content.about.paragraph1}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                {content.about.paragraph2}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 max-w-2xl mx-auto">
                <div className="card-enhanced text-center p-3 magnetic-hover">
                  <div className="text-xl font-bold text-primary mb-1">{content.about.metrics.wauGrowth.value}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">{content.about.metrics.wauGrowth.label}</div>
                </div>
                <div className="card-enhanced text-center p-3 magnetic-hover">
                  <div className="text-xl font-bold text-primary mb-1">{content.about.metrics.hoursSaved.value}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">{content.about.metrics.hoursSaved.label}</div>
                </div>
                <div className="card-enhanced text-center p-3 magnetic-hover">
                  <div className="text-xl font-bold text-primary mb-1">{content.about.metrics.reportsReduction.value}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">{content.about.metrics.reportsReduction.label}</div>
                </div>
                <div className="card-enhanced text-center p-3 magnetic-hover">
                  <div className="text-xl font-bold text-primary mb-1">{content.about.metrics.fasterDecisions.value}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">{content.about.metrics.fasterDecisions.label}</div>
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


import { InteractiveTimeline } from './InteractiveTimeline';
import { useContent } from '../contexts/ContentContext';

const ExperienceSection = () => {
  const { content } = useContent();
  const { experience } = content;

  return (
    <section id="experience" className="section-padding bg-white dark:bg-gray-900/50 parallax-bg">
      <div className="container-width">
        <div className="observe-on-scroll opacity-0 staggered-animation">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white magnetic-hover">
            {experience.title}
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
            {experience.subtitle}
          </p>
          <InteractiveTimeline />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

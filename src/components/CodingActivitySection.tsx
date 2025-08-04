import { GitHubContributions } from './GitHubContributions';

const CodingActivitySection = () => {
  return (
    <section id="coding-activity" className="section-padding bg-white dark:bg-gray-900/50 parallax-bg">
      <div className="container-width">
        <div className="observe-on-scroll opacity-0 staggered-animation">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 magnetic-hover">
              Coding Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My daily commitment to continuous learning and building through consistent code contributions
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <GitHubContributions />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingActivitySection;

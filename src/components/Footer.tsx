
import { useContent } from '../contexts/ContentContext';

const Footer = () => {
  const { content } = useContent();
  const { footer } = content;

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 dark:text-gray-400 py-8">
      <div className="container-width">
        <div className="text-center">
          <p className="text-sm italic">
            {footer.tagline}
          </p>
          <p className="text-xs mt-2 text-gray-500 dark:text-gray-500">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

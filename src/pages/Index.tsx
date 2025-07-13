
import { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import FeaturedWork from '../components/FeaturedWork';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';
import CodingActivitySection from '../components/CodingActivitySection';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { ScrollProgress } from '../components/ScrollProgress';
import { CursorSpotlight } from '../components/CursorSpotlight';
import { CursorEffects } from '../components/CursorEffects';
import { SmartCTA } from '../components/SmartCTA';
import { SocialProof } from '../components/SocialProof';

const Index = () => {
  useEffect(() => {
    // Scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          entry.target.classList.remove('opacity-0');
        }
      });
    }, observerOptions);

    // Use setTimeout to ensure DOM is ready
    setTimeout(() => {
      const sections = document.querySelectorAll('.observe-on-scroll');
      sections.forEach((section) => observer.observe(section));
    }, 100);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Interactive Effects */}
      <CursorSpotlight />
      <CursorEffects />
      <SocialProof />
      <SmartCTA />
      
      {/* Main Layout */}
      <ScrollProgress />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <FeaturedWork />
        <CodingActivitySection />
        <ExperienceSection />
        <EducationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

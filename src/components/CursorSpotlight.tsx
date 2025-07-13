import { useEffect, useState } from 'react';

export function CursorSpotlight() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if dark mode is active
    const checkDarkMode = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    };

    // Initial check
    checkDarkMode();

    // Listen for theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    // Mouse move listener
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.disconnect();
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Don't render if not in dark mode
  if (!isDark) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: 999,
        background: `radial-gradient(circle 1000px at ${mousePosition.x}px ${mousePosition.y}px, 
          rgba(255, 165, 0, 0.12) 0%, 
          rgba(255, 140, 0, 0.08) 20%, 
          rgba(255, 165, 0, 0.04) 40%, 
          rgba(255, 140, 0, 0.015) 60%, 
          transparent 80%)`,
      }}
    />
  );
}

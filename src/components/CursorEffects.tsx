import { useState, useEffect } from 'react';
import { useTheme } from '../hooks/use-theme';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
}

export const CursorEffects = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const { theme } = useTheme();

  const createParticle = (x: number, y: number) => {
    const particle: Particle = {
      id: Date.now() + Math.random(),
      x,
      y,
      vx: (Math.random() - 0.5) * 8,
      vy: (Math.random() - 0.5) * 8,
      life: 60
    };
    setParticles(prev => [...prev, particle]);
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (theme === 'dark') {
        for (let i = 0; i < 6; i++) {
          setTimeout(() => {
            createParticle(
              e.clientX + (Math.random() - 0.5) * 20,
              e.clientY + (Math.random() - 0.5) * 20
            );
          }, i * 50);
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [theme]);

  useEffect(() => {
    const animateParticles = () => {
      setParticles(prev => 
        prev
          .map(particle => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            vx: particle.vx * 0.98,
            vy: particle.vy * 0.98,
            life: particle.life - 1
          }))
          .filter(particle => particle.life > 0)
      );
    };

    const interval = setInterval(animateParticles, 16);
    return () => clearInterval(interval);
  }, []);

  if (theme !== 'dark') return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: particle.x - 2,
            top: particle.y - 2,
            opacity: particle.life / 60,
            '--particle-x': `${particle.vx}px`,
            '--particle-y': `${particle.vy}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

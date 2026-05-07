import React, { useEffect, useState } from 'react';
import '../styles/governed-progress.css';

interface GovernedProgressMotionProps {
  targetValue: number;
  label: string;
  duration?: number;
  className?: string;
}

export const GovernedProgressMotion: React.FC<GovernedProgressMotionProps> = ({ 
  targetValue, 
  label, 
  duration = 1000,
  className = '' 
}) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    // Reduced motion check - if user prefers reduced motion, jump to end
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (mediaQuery.matches) {
      setCurrentValue(targetValue);
      return;
    }

    let start = 0;
    const increment = targetValue / (duration / 16); // roughly 60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        setCurrentValue(targetValue);
        clearInterval(timer);
      } else {
        setCurrentValue(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [targetValue, duration]);

  return (
    <div className={`ug-uix-governed-progress ${className}`}>
      <div className="ug-uix-progress-header">
        <span>{label}</span>
        <span className="ug-uix-progress-value">{currentValue}%</span>
      </div>
      <div className="ug-uix-progress-track">
        <div 
          className="ug-uix-progress-bar"
          style={{ width: `${currentValue}%` }}
        />
      </div>
    </div>
  );
};

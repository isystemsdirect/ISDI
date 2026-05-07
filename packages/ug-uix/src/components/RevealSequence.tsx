import React, { useEffect, useState } from 'react';
import '../styles/reveal-sequences.css';

interface RevealSequenceProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const RevealSequence: React.FC<RevealSequenceProps> = ({ children, delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`ug-uix-reveal-sequence ${isVisible ? 'is-visible' : ''} ${className}`}>
      {children}
    </div>
  );
};

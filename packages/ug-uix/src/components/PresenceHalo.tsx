import React, { useEffect, useRef, useState } from 'react';
import '../styles/pointer-presence.css';

interface PresenceHaloProps {
  children: React.ReactNode;
  className?: string;
}

export const PresenceHalo: React.FC<PresenceHaloProps> = ({ children, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: '50%', y: '50%' });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({ x: `${x}px`, y: `${y}px` });
    };

    const element = containerRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`ug-uix-presence-halo ${className}`}
      style={{ '--mouse-x': mousePos.x, '--mouse-y': mousePos.y } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

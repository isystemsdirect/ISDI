import React from 'react';
import '../styles/glass-containment.css';

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const GlassPanel: React.FC<GlassPanelProps> = ({ children, className = '', style }) => {
  return (
    <div className={`ug-uix-glass-panel ${className}`} style={style}>
      {children}
    </div>
  );
};

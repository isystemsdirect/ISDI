import React from 'react';
import '../styles/ambient-mesh.css';

export const AmbientMesh: React.FC = () => {
  return (
    <div className="ug-uix-ambient-mesh" aria-hidden="true">
      {/* Subtle background blob simulation without excessive motion */}
      <div 
        className="ug-uix-ambient-blob" 
        style={{
          width: '40vw', 
          height: '40vw', 
          top: '-10%', 
          left: '-10%', 
          background: 'radial-gradient(circle, rgba(118, 185, 0, 0.05), transparent 70%)'
        }} 
      />
      <div 
        className="ug-uix-ambient-blob" 
        style={{
          width: '50vw', 
          height: '50vw', 
          bottom: '-20%', 
          right: '-10%', 
          background: 'radial-gradient(circle, rgba(184, 255, 90, 0.03), transparent 70%)'
        }} 
      />
    </div>
  );
};

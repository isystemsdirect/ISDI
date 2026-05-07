import React from 'react';

interface SoftStateFrameProps {
  children: React.ReactNode;
  stateKey: string | number;
  className?: string;
}

export const SoftStateFrame: React.FC<SoftStateFrameProps> = ({ children, stateKey, className = '' }) => {
  return (
    <div 
      key={stateKey}
      className={`ug-uix-soft-state-frame ${className}`}
      style={{
        animation: 'ugUixSoftFadeIn var(--ug-uix-transition-base) forwards'
      }}
    >
      <style>{`
        @keyframes ugUixSoftFadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
      {children}
    </div>
  );
};

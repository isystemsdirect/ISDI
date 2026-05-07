import React, { useEffect, useState } from 'react';
import '../styles/reduced-motion.css';

interface MotionPreferenceGuardProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const MotionPreferenceGuard: React.FC<MotionPreferenceGuardProps> = ({ children, fallback }) => {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  if (reducedMotion && fallback) {
    return <>{fallback}</>;
  }

  // The CSS in reduced-motion.css handles the rest automatically by disabling animations
  return <>{children}</>;
};

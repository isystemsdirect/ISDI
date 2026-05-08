import React, { useState, useEffect, useCallback } from 'react';
import { PlayCircle, PauseCircle, FastForward, RotateCcw } from 'lucide-react';
import { GlassPanel, SoftStateFrame } from '@isdi/ug-uix';
import { SCING_VOICE_CATALOG, NarrationContext } from './ScingVoiceData';

interface ScingNarrationShellProps {
  initialMode?: 'automated' | 'manual';
  context?: NarrationContext;
}

export const ScingNarrationShell: React.FC<ScingNarrationShellProps> = ({ 
  initialMode = 'automated',
  context = 'home'
}) => {
  const steps = SCING_VOICE_CATALOG[context] || SCING_VOICE_CATALOG.home;
  const [currentStep, setCurrentStep] = useState(0);
  const [mode, setMode] = useState<'automated' | 'manual'>(initialMode);
  const [isPlaying, setIsPlaying] = useState(mode === 'automated');

  const advanceStep = useCallback(() => {
    setCurrentStep(prev => (prev + 1) % steps.length);
  }, [steps.length]);

  const resetNarration = () => {
    setCurrentStep(0);
    setIsPlaying(true);
  };

  const toggleMode = () => {
    const newMode = mode === 'automated' ? 'manual' : 'automated';
    setMode(newMode);
    setIsPlaying(newMode === 'automated');
  };

  // Auto-advance logic
  useEffect(() => {
    let timer: any;
    if (mode === 'automated' && isPlaying) {
      const duration = steps[currentStep].duration || 6000;
      timer = setTimeout(() => {
        advanceStep();
      }, duration);
    }
    return () => clearTimeout(timer);
  }, [mode, isPlaying, currentStep, steps, advanceStep]);

  return (
    <GlassPanel className="p-6 mt-8" style={{ background: 'rgba(14, 59, 46, 0.4)', borderLeft: '4px solid var(--color-primary)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ 
            width: '8px', 
            height: '8px', 
            background: 'var(--color-primary)', 
            borderRadius: '50%', 
            boxShadow: '0 0 10px var(--color-primary)',
            animation: isPlaying ? 'pulse 2s infinite' : 'none'
          }} />
          <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-primary)' }}>
            Scing Intelligence Guide
          </span>
          <span style={{ 
            fontSize: '0.6rem', 
            padding: '0.1rem 0.4rem', 
            background: 'rgba(212,160,23,0.1)', 
            border: '1px solid rgba(212,160,23,0.3)', 
            borderRadius: '3px', 
            color: 'var(--color-primary)', 
            fontWeight: 800, 
            letterSpacing: '0.05em' 
          }}>
            BOUNDARY
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontSize: '0.65rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            {mode} • Step {currentStep + 1}/{steps.length}
          </span>
          <button 
            onClick={toggleMode}
            className="btn btn-ghost" 
            style={{ padding: '0.3rem 0.6rem', fontSize: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.3rem', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            {mode === 'automated' ? 'Switch to Manual' : 'Switch to Automated'}
          </button>
        </div>
      </div>
      
      <SoftStateFrame stateKey={`${context}-step-${currentStep}`}>
        <div style={{ 
          fontSize: '1.05rem', 
          lineHeight: '1.6', 
          color: 'var(--color-text)', 
          fontStyle: 'italic', 
          marginBottom: '1.5rem',
          minHeight: '80px',
          display: 'flex',
          alignItems: 'center'
        }}>
          "{steps[currentStep].text}"
        </div>
      </SoftStateFrame>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="btn btn-primary" 
          style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem' }}
        >
          {isPlaying ? <PauseCircle size={16} /> : <PlayCircle size={16} />}
          {isPlaying ? 'Pause' : 'Resume'}
        </button>
        
        <button 
          onClick={advanceStep}
          className="btn btn-outline" 
          style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem' }}
        >
          <FastForward size={16} /> Skip
        </button>

        <button 
          onClick={resetNarration}
          className="btn btn-ghost" 
          style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}
        >
          <RotateCcw size={16} /> Restart
        </button>
      </div>

      <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)', fontSize: '0.6rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.02em', fontStyle: 'italic' }}>
        Execution bounded to public-site context. BANE-governed audit active.
      </div>

      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </GlassPanel>
  );
};

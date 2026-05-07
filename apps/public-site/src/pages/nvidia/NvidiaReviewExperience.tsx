import React, { useState, useEffect } from 'react';
import { ScingNarrationShell } from '../../components/scing/ScingNarrationShell';
import { 
  MotionPreferenceGuard, 
  PresenceHalo, 
  AmbientMesh, 
  RevealSequence, 
  GlassPanel,
  GovernedProgressMotion
} from '@isdi/ug-uix';
import { CheckCircle, ShieldAlert, Zap, Layers, Lock, ArrowRight } from 'lucide-react';

const PASSCODE = 'ISDI-NV-2026';

export const NvidiaReviewExperience = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    // Inject noindex/nofollow to prevent crawler discovery
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);
    
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  const handleAuthorize = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.toUpperCase() === PASSCODE) {
      setIsAuthorized(true);
      setError(false);
    } else {
      setError(true);
      setInput('');
    }
  };

  if (!isAuthorized) {
    return (
      <div style={{ minHeight: '100vh', background: '#02070B', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <AmbientMesh />
        <RevealSequence>
          <GlassPanel className="p-12 text-center" style={{ maxWidth: '450px', position: 'relative', zIndex: 10 }}>
            <Lock className="mx-auto mb-6" size={48} color="var(--color-primary)" />
            <h2 className="mb-2" style={{ fontSize: '1.5rem', fontWeight: 800 }}>Review Access Required</h2>
            <p className="text-muted mb-8" style={{ fontSize: '0.9rem' }}>
              This surface is restricted to authorized stakeholders. Please enter your review access code.
            </p>
            
            <form onSubmit={handleAuthorize} style={{ display: 'grid', gap: '1rem' }}>
              <input 
                type="password" 
                placeholder="Enter Access Code"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoFocus
                style={{
                  width: '100%',
                  background: 'rgba(255,255,255,0.03)',
                  border: `1px solid ${error ? '#EF4444' : 'rgba(255,255,255,0.1)'}`,
                  borderRadius: '4px',
                  padding: '0.85rem',
                  color: 'white',
                  textAlign: 'center',
                  fontSize: '1rem',
                  letterSpacing: '0.2em'
                }}
              />
              {error && <p style={{ color: '#EF4444', fontSize: '0.75rem', fontWeight: 600 }}>Invalid access code.</p>}
              <button 
                type="submit" 
                className="btn btn-primary w-full"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
              >
                Unlock Experience <ArrowRight size={16} />
              </button>
            </form>
          </GlassPanel>
        </RevealSequence>
      </div>
    );
  }

  return (
    <MotionPreferenceGuard>
      <PresenceHalo>
        <div style={{ minHeight: '100vh', background: '#02070B', color: 'var(--color-text)', paddingTop: '100px', paddingBottom: '100px', position: 'relative' }}>
          <AmbientMesh />
          
          <div className="container" style={{ maxWidth: '900px', position: 'relative', zIndex: 1 }}>
            
            {/* Header Section */}
            <RevealSequence delay={100}>
              <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <div style={{ height: '1px', width: '40px', background: 'var(--color-nvidia, #76b900)' }}></div>
                  <span style={{ 
                    color: 'var(--color-nvidia, #76b900)', 
                    fontSize: '0.7rem', 
                    fontWeight: 800, 
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase'
                  }}>
                    Strategic Exploratory Review
                  </span>
                  <div style={{ height: '1px', width: '40px', background: 'var(--color-nvidia, #76b900)' }}></div>
                </div>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem', lineHeight: '1.2' }}>
                  SCINGULAR × NVIDIA Compute Alignment
                </h1>
                
                <GlassPanel className="text-left p-6">
                  <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-muted)', margin: 0 }}>
                    This focused review experience details how SCINGULAR™ and OVERSCITE™ Global align with accelerated compute, edge AI, multimodal inference, and professional infrastructure intelligence workflows. 
                    <strong style={{ color: 'var(--color-primary)' }}> This alignment is currently in prototype evaluation.</strong>
                  </p>
                </GlassPanel>
              </div>
            </RevealSequence>

            {/* Scing Narration Shell */}
            <RevealSequence delay={300}>
              <div style={{ marginBottom: '4rem' }}>
                <ScingNarrationShell initialMode="automated" context="nvidia" />
              </div>
            </RevealSequence>

            {/* 4-Layer Architecture Visualization */}
            <RevealSequence delay={500}>
              <div style={{ marginBottom: '5rem' }}>
                <h2 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Governed Architecture Stack
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem' }}>
                  
                  <GlassPanel>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                      <Layers color="var(--color-primary)" />
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>1. BFI Core</h3>
                    </div>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                      Model routing, explainability, and traceable decision paths for every AI interaction.
                    </p>
                  </GlassPanel>
                  
                  <GlassPanel>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                      <Zap color="var(--color-primary)" />
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>2. Field Intelligence</h3>
                    </div>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                      Sensor fusion, edge inference, and context capture inside real inspection workflows.
                    </p>
                  </GlassPanel>
                  
                  <GlassPanel>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                      <CheckCircle color="var(--color-primary)" />
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>3. Workflow Engine</h3>
                    </div>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                      Transforms AI outputs into structured artifacts, findings, and compliance-ready deliverables.
                    </p>
                  </GlassPanel>
                  
                  <GlassPanel>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                      <ShieldAlert color="var(--color-primary)" />
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>4. BANE Governance</h3>
                    </div>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                      Enforces approvals, human authority, and complete audit trails around decisions and actions.
                    </p>
                  </GlassPanel>

                </div>
              </div>
            </RevealSequence>

            {/* OVERSCITE Global Placeholder */}
            <RevealSequence delay={700}>
              <div style={{ marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  OVERSCITE Global Inference Metrics
                </h2>
                <GlassPanel>
                  <div style={{ 
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem'
                  }}>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                      SCINGULAR architecture is designed to offload heavy inference tasks to optimized accelerated hardware, ensuring field operators receive near real-time intelligence bounding without compromising governance.
                    </p>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '8px' }}>
                      <GovernedProgressMotion targetValue={100} label="Data Ingestion & Routing (Edge)" duration={1000} />
                      <GovernedProgressMotion targetValue={87} label="Model Inference Alignment (Cloud)" duration={2500} />
                      <GovernedProgressMotion targetValue={100} label="BANE Governance Checks (Fail-Closed)" duration={1500} />
                    </div>
                  </div>
                </GlassPanel>
              </div>
            </RevealSequence>

            {/* Disclaimer Footer */}
            <RevealSequence delay={1000}>
              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '2rem', textAlign: 'center' }}>
                <p style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.4)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
                  <strong>Strategic Disclosure:</strong> This material is exploratory and does not imply an active partnership, endorsement, sponsorship, or commercial agreement between Inspection Systems Direct Inc. and NVIDIA Corporation. All SCINGULAR mechanics, boundaries, and BFI Trinity architectures are protected under strict governance policies.
                </p>
              </div>
            </RevealSequence>

          </div>
        </div>
      </PresenceHalo>
    </MotionPreferenceGuard>
  );
};

import { Lock, FileText, Search, ShieldAlert } from 'lucide-react';
import { RevealSequence, GlassPanel } from '@isdi/ug-uix';

export const GovernanceSection = () => {
  return (
    <section id="governance" className="cinematic-bg" style={{ 
      backgroundImage: 'url(/media/governance.jpeg)',
      padding: '140px 0'
    }}>
      <div className="cinematic-overlay" style={{ background: 'linear-gradient(to right, var(--color-background) 30%, rgba(2, 7, 11, 0.6) 100%)' }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '5rem', alignItems: 'center' }}>
          <RevealSequence>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <ShieldAlert color="var(--color-primary)" size={20} />
              <span style={{ color: 'var(--color-primary)', fontWeight: 800, letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.8rem' }}>Sovereign Governance</span>
            </div>
            <h2 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '2.5rem', lineHeight: '1.1' }}>BANE Enforcement Layer</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text)', marginBottom: '3rem', lineHeight: '1.6', opacity: 0.9 }}>
              Our architecture implements a fail-closed, attributable, and non-bypassable governance layer. 
              Intelligence remains subordinate to human authority—always.
            </p>
            
            <div style={{ display: 'grid', gap: '2rem' }}>
              <GovernanceItem 
                icon={<Lock />} 
                title="Zero-Trust Intelligence (ZTI)" 
                description="Strict enforcement of policy boundaries across all intelligence nodes and data flows." 
              />
              <GovernanceItem 
                icon={<FileText />} 
                title="Auditability Spine" 
                description="Full evidentiary traceability for every automated assistance event and system decision." 
              />
              <GovernanceItem 
                icon={<Search />} 
                title="Truth-State Integrity" 
                description="Explicit distinction between implementation, experimental, and locked canonical states." 
              />
            </div>
          </RevealSequence>
          
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <RevealSequence delay={200}>
              <GlassPanel style={{ 
                width: '100%', 
                maxWidth: '450px',
                textAlign: 'center',
                border: '2px solid var(--color-primary)',
                padding: '4rem'
              }}>
                <div style={{ fontSize: '0.8rem', letterSpacing: '0.5em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '1.5rem', fontWeight: 800 }}>Authority Chain</div>
                <div style={{ fontSize: '4rem', fontWeight: 900, color: 'var(--color-text)', letterSpacing: '0.1em' }}>BANE</div>
                <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-primary)' }}></div>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-primary)', opacity: 0.4 }}></div>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-primary)', opacity: 0.1 }}></div>
                </div>
                <p style={{ marginTop: '2.5rem', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                  Active enforcement posture: <span style={{ color: 'var(--color-primary)', fontWeight: 700 }}>STRICT</span>
                </p>
              </GlassPanel>
            </RevealSequence>
          </div>
        </div>
      </div>
    </section>
  );
};

const GovernanceItem = ({ icon, title, description }: { icon: any, title: string, description: string }) => (
  <div style={{ display: 'flex', gap: '1.5rem' }}>
    <div style={{ color: 'var(--color-primary)', marginTop: '0.25rem' }}>{icon}</div>
    <div>
      <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.25rem' }}>{title}</h4>
      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.5' }}>{description}</p>
    </div>
  </div>
);

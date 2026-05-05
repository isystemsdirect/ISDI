import { Link } from 'react-router-dom';
import { Shield, Cpu, Lock, Eye, Layers, Zap } from 'lucide-react';

const LAYERS = [
  { icon: <Shield size={22} color="var(--color-primary)" />, name: 'ScingBFI', full: 'Scing Brain-Function Interface', desc: 'The unified intelligence stack combining Scing, LARI, and BANE. ScingBFI is the governed intelligence core.' },
  { icon: <Eye size={22} color="var(--color-primary)" />, name: 'LARI', full: 'Layered Analytical Reasoning Intelligence', desc: 'The reasoning engine within ScingBFI. Processes field data and property context under BANE constraint boundaries.' },
  { icon: <Lock size={22} color="var(--color-primary)" />, name: 'BANE', full: 'Boundary and Normative Enforcement Layer', desc: 'Constraint and integrity enforcement. Ensures the system never exceeds authorized boundaries and maintains audit trails.' },
  { icon: <Zap size={22} color="var(--color-primary)" />, name: 'ZTI', full: 'Zero-Trust Intelligence', desc: 'Enforcement posture across all SCINGULAR interfaces. Every action is validated, every boundary is explicit.' },
  { icon: <Layers size={22} color="var(--color-primary)" />, name: 'WIRM™', full: 'Governed Actuation Layer', desc: 'Downstream governed actuation through which authorized outputs reach execution surfaces, strictly within BANE constraints.' },
  { icon: <Cpu size={22} color="var(--color-primary)" />, name: 'SRT', full: 'Sensor and Capture Discipline', desc: 'Sensor, capture, and input discipline boundary. All data ingestion in the ISDI ecosystem is governed by SRT boundaries.' },
];

export const Scingular: React.FC = () => (
  <>
    <section className="page-hero">
      <div className="container cinematic-content">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link><span className="breadcrumb-sep">/</span><span>SCINGULAR</span>
        </nav>
        <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Architecture</span></div>
        <h1 style={{ marginBottom: '1.25rem', maxWidth: '700px' }}>SCINGULAR<sup style={{ fontSize: '0.4em', color: 'var(--color-primary)', verticalAlign: 'super' }}>™</sup></h1>
        <p className="text-muted max-prose" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
          A sovereign governed orchestration architecture for professional inspection, field operations, and infrastructure management.
          Built on the principle that intelligence must remain subordinate to licensed, accountable human authority.
        </p>
        <div className="flex gap-md flex-wrap mt-md">
          <span className="badge badge-dev">In Development</span>
          <span className="badge badge-active">Prototype Stage</span>
        </div>
      </div>
    </section>

    <section className="section" style={{ background: 'var(--color-background)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,380px),1fr))', gap: 'clamp(2rem,6vw,5rem)', alignItems: 'center' }}>
          <div>
            <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Overview</span></div>
            <h2 style={{ marginBottom: '1.25rem' }}>Not Just an AI — A Governed System</h2>
            <p className="text-muted" style={{ lineHeight: '1.8', marginBottom: '1.25rem' }}>
              SCINGULAR is a purpose-built orchestration architecture for professional inspection and infrastructure domains,
              where accountability, evidentiary integrity, and human authority are non-negotiable.
            </p>
            <p className="text-muted" style={{ lineHeight: '1.8' }}>
              Every layer is designed to be bounded, auditable, and inspectable. The architecture enforces constraint
              at the system level — not as a policy choice, but as a structural guarantee.
            </p>
          </div>
          <div className="glass-panel text-center">
            <div className="text-xs text-primary" style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '2.5rem' }}>Architecture Core</div>
            <ScingularRing />
            <div style={{ marginTop: '2.5rem', fontWeight: 800, fontSize: '1.1rem', letterSpacing: '0.05em' }}>SCINGULAR Prime</div>
            <div className="text-xs text-muted mt-sm">Prototype Stage — In Development</div>
          </div>
        </div>
      </div>
    </section>

    <section className="section" style={{ background: 'var(--color-accent)' }}>
      <div className="container">
        <div className="eyebrow" style={{ justifyContent: 'center' }}><div className="eyebrow-line" /><span className="eyebrow-text">Stack Layers</span><div className="eyebrow-line" /></div>
        <h2 className="text-center" style={{ marginBottom: '0.5rem' }}>The SCINGULAR Stack</h2>
        <p className="text-muted text-center max-prose mb-lg" style={{ margin: '0.75rem auto 3rem' }}>
          Each layer carries a distinct boundary, role, and governance posture. These distinctions enforce structural separation of concerns.
        </p>
        <div className="card-grid">
          {LAYERS.map(({ icon, name, full, desc }) => (
            <div key={name} className="feature-card">
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1rem' }}>
                {icon}
                <div>
                  <div style={{ fontWeight: 900, fontSize: '1rem' }}>{name}</div>
                  <div className="text-xs text-muted">{full}</div>
                </div>
              </div>
              <p className="text-muted text-sm" style={{ lineHeight: '1.65' }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="cinematic-bg section" style={{ backgroundImage: 'url(/media/governance.jpeg)' }}>
      <div className="cinematic-overlay" />
      <div className="container cinematic-content">
        <div className="glass-panel" style={{ maxWidth: '700px' }}>
          <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Principles</span></div>
          <h2 style={{ marginBottom: '1.5rem' }}>Design Principles</h2>
          {[
            'Human authority is the non-negotiable constraint.',
            'Automation is subordinate to accountable human decision-making.',
            'All high-impact conclusions are human-reviewable.',
            'No feature obscures accountability or increases autonomy silently.',
            'Safety, compliance, and evidentiary chains are fully inspectable.',
            'SCINGULAR augments professionals — it does not replace them.',
          ].map((p, i) => (
            <div key={i} style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div className="text-primary" style={{ fontWeight: 800, fontSize: '0.75rem', flexShrink: 0, marginTop: '0.2rem' }}>{String(i + 1).padStart(2, '0')}</div>
              <p className="text-muted text-sm" style={{ lineHeight: '1.6' }}>{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section text-center" style={{ background: 'linear-gradient(to bottom, var(--color-background), var(--color-accent))' }}>
      <div className="container">
        <h2 style={{ marginBottom: '1.25rem' }}>Ready to Explore?</h2>
        <p className="text-muted mb-lg max-prose" style={{ margin: '0 auto 2.5rem' }}>
          The OVERSCITE Preview provides a demo-safe view of the governed intelligence workspace.
        </p>
        <div className="flex-center gap-md flex-wrap">
          <a href="https://isdi-overscite.web.app" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }} target="_blank" rel="noopener noreferrer">Enter OVERSCITE Preview</a>
          <Link to="/preview-request" className="btn btn-ghost" style={{ padding: '1rem 2.5rem' }}>Request Access</Link>
        </div>
      </div>
    </section>
  </>
);

const ScingularRing = () => (
  <div style={{ position: 'relative', width: '160px', height: '160px', margin: '0 auto' }}>
    <div style={{ position: 'absolute', inset: 0, border: '3px solid var(--color-primary)', borderRadius: '50%', boxShadow: '0 0 40px rgba(212,160,23,0.25)' }} />
    <div style={{ position: 'absolute', inset: '-18px', border: '1px solid rgba(14,59,46,0.7)', borderRadius: '50%' }} />
    <div style={{ position: 'absolute', inset: '-36px', border: '1px solid rgba(212,160,23,0.12)', borderRadius: '50%', animation: 'rotate 15s linear infinite' }} />
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Shield color="var(--color-primary)" size={36} />
    </div>
  </div>
);

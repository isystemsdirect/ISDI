import { Link } from 'react-router-dom';
import { Shield, Users, Target, CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container cinematic-content">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>About ISDI</span>
          </nav>
          <div className="eyebrow">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">Company</span>
          </div>
          <h1 style={{ marginBottom: '1.25rem', maxWidth: '700px' }}>About Inspection Systems Direct</h1>
          <p className="text-muted max-prose" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
            Inspection Systems Direct (ISDI) is an infrastructure intelligence company focused on
            building governed, human-authority-first technology for professional field operations 
            and infrastructure intelligence domains.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section" style={{ background: 'var(--color-background)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,400px),1fr))', gap: 'clamp(2.5rem,6vw,5rem)', alignItems: 'center' }}>
            <div>
              <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Our Mission</span></div>
              <h2 style={{ marginBottom: '1.5rem' }}>Governed Intelligence for Professionals</h2>
              <p className="text-muted" style={{ lineHeight: '1.8', marginBottom: '1.25rem' }}>
                We believe that artificial intelligence must remain subordinate to the licensed, certified,
                and accountable humans who carry professional responsibility in high-stakes domains.
              </p>
              <p className="text-muted" style={{ lineHeight: '1.8' }}>
                ISDI builds intelligence systems that amplify professional judgment — not replace it.
                Every feature, every workflow, and every data boundary is designed with human authority
                as the non-negotiable constraint.
              </p>
            </div>
            <div style={{ display: 'grid', gap: '1.25rem' }}>
              {[
                { icon: <Shield size={22} color="var(--color-primary)" />, title: 'Human-Final Authority', desc: 'No automated decision overrides human accountability.' },
                { icon: <Target size={22} color="var(--color-primary)" />, title: 'Domain-Specific Intelligence', desc: 'Built for professional field intelligence, not generic enterprise.' },
                { icon: <Users size={22} color="var(--color-primary)" />, title: 'Governed by Design', desc: 'BANE constraint enforcement at every system boundary.' },
                { icon: <CheckCircle size={22} color="var(--color-primary)" />, title: 'Audit-Ready', desc: 'Evidentiary chains inspectable at every layer.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="feature-card" style={{ display: 'flex', gap: '1rem', padding: '1.25rem' }}>
                  <div style={{ flexShrink: 0, marginTop: '2px' }}>{icon}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.35rem' }}>{title}</div>
                    <div className="text-muted text-sm">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Posture */}
      <section className="section" style={{ background: 'var(--color-accent)' }}>
        <div className="container">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <div className="eyebrow-line" /><span className="eyebrow-text">Development Stage</span><div className="eyebrow-line" />
          </div>
          <h2 className="text-center" style={{ marginBottom: '1.5rem' }}>Where We Are</h2>
          <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
            <p className="text-muted" style={{ lineHeight: '1.8', marginBottom: '2rem', fontSize: '1rem' }}>
              ISDI is a prototype-stage technology company. SCINGULAR and OVERSCITE are in active
              development. The OVERSCITE Preview environment is a demo-safe demonstration — it does
              not represent a production deployment or contain live customer data.
            </p>
            <div className="flex-center gap-md flex-wrap">
              <span className="badge badge-dev">Prototype Stage</span>
              <span className="badge badge-active">Active Development</span>
              <span className="badge badge-preview">Preview Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Posture */}
      <section className="section" style={{ background: 'var(--color-background)' }}>
        <div className="container">
          <div className="glass-panel" style={{ maxWidth: '820px', margin: '0 auto' }}>
            <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Governance</span></div>
            <h2 style={{ marginBottom: '1.25rem' }}>Our Governance Posture</h2>
            <p className="text-muted" style={{ lineHeight: '1.8', marginBottom: '1.25rem' }}>
              All ISDI systems operate under a strict governance posture. Automation remains subordinate
              to human decision-making. Recommendations are auditable. High-impact conclusions are
              human-reviewable. Safety and compliance chains are fully inspectable.
            </p>
            <p className="text-muted" style={{ lineHeight: '1.8' }}>
              We do not design systems that obscure accountability, increase autonomy silently, or
              create deceptive representations of certainty or regulatory approval.
            </p>
            <div className="mt-md">
              <Link to="/scingular" className="btn btn-outline">Explore the Architecture</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section text-center" style={{ background: 'linear-gradient(to bottom, var(--color-accent), var(--color-background))' }}>
        <div className="container">
          <h2 style={{ marginBottom: '1.25rem' }}>Interested in Working with Us?</h2>
          <p className="text-muted mb-lg max-prose" style={{ margin: '0 auto 2.5rem' }}>
            We are seeking strategic partners, infrastructure professionals, and aligned compute
            partners to join the SCINGULAR development track.
          </p>
          <div className="flex-center gap-md flex-wrap">
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>Partnership Inquiry</Link>
            <Link to="/preview-request" className="btn btn-ghost" style={{ padding: '1rem 2.5rem' }}>Request Preview</Link>
          </div>
        </div>
      </section>
    </>
  );
};

import { Link } from 'react-router-dom';
import { Eye, FileText, MapPin, Users, CheckCircle } from 'lucide-react';

export const Overscite: React.FC = () => (
  <>
    <section className="page-hero">
      <div className="container cinematic-content">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link><span className="breadcrumb-sep">/</span><span>OVERSCITE</span>
        </nav>

        {/* Hero row: text left, logo right */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: 'clamp(1.5rem, 4vw, 3rem)',
          flexWrap: 'wrap',
        }}>
          {/* Left: text content */}
          <div style={{ flex: '1 1 320px', minWidth: 0 }}>
            <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Workspace Platform</span></div>
            <h1 style={{ marginBottom: '1.25rem' }}>
              OVERSCITE<sup style={{ fontSize: '0.4em', color: 'var(--color-primary)', verticalAlign: 'super' }}>™</sup>
            </h1>
            <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.7', maxWidth: '560px' }}>
              The governed intelligence workspace for inspection and field operations.
              Property-aware, client-focused, and reporting-ready — designed for licensed inspection professionals.
            </p>
            <div className="flex gap-md flex-wrap mt-md">
              <span className="badge badge-preview">Preview Available</span>
              <span className="badge badge-dev">In Development</span>
            </div>
          </div>

          {/* Right: OVERSCITE logo, page-right aligned */}
          <div style={{
            flex: '0 0 auto',
            display: 'flex',
            justifyContent: 'flex-end',
            alignSelf: 'center',
          }}>
            <img
              src="/media/overscite_logo.png"
              alt="OVERSCITE logo"
              style={{
                width: 'clamp(288px, 38.4vw, 480px)',
                height: 'auto',
                mixBlendMode: 'multiply',
                filter: 'drop-shadow(0 4px 24px rgba(212,160,23,0.25))',
                userSelect: 'none',
              }}
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>

    {/* What is OVERSCITE */}
    <section className="section" style={{ background: 'var(--color-background)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,380px),1fr))', gap: 'clamp(2rem,6vw,5rem)', alignItems: 'center' }}>
          <div>
            <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Platform Overview</span></div>
            <h2 style={{ marginBottom: '1.25rem' }}>The Inspection Intelligence Workspace</h2>
            <p className="text-muted" style={{ lineHeight: '1.8', marginBottom: '1.25rem' }}>
              OVERSCITE is the primary workspace layer of the SCINGULAR architecture. It provides inspection
              professionals with a governed interface for managing properties, field data, clients, and
              compliance workflows under BANE-enforced boundaries.
            </p>
            <p className="text-muted" style={{ lineHeight: '1.8' }}>
              Every action in OVERSCITE is governed, auditable, and human-reviewed. No automated decision
              overrides the licensed professional's judgment.
            </p>
          </div>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {[
              { icon: <MapPin size={20} color="var(--color-primary)" />, title: 'Property-Aware', desc: 'Location and property context flows through every workflow.' },
              { icon: <Users size={20} color="var(--color-primary)" />, title: 'Client-Focused', desc: 'Client records, communications, and report delivery governed together.' },
              { icon: <FileText size={20} color="var(--color-primary)" />, title: 'Reporting-Ready', desc: 'Documentation, evidence, and findings structured for professional delivery.' },
              { icon: <CheckCircle size={20} color="var(--color-primary)" />, title: 'Compliance-Bounded', desc: 'All outputs operate within BANE-enforced compliance constraints.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="feature-card" style={{ display: 'flex', gap: '1rem', padding: '1.1rem' }}>
                <div style={{ flexShrink: 0, marginTop: '2px' }}>{icon}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.3rem' }}>{title}</div>
                  <div className="text-muted text-sm">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Cinematic preview band */}
    <section className="cinematic-bg section" style={{ backgroundImage: 'url(/media/overscite.jpeg)' }}>
      <div className="cinematic-overlay" />
      <div className="container cinematic-content">
        <div className="glass-panel" style={{ maxWidth: '680px' }}>
          <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Preview Environment</span></div>
          <h2 style={{ marginBottom: '1.25rem' }}>Demo-Safe Preview Access</h2>
          <p className="text-muted" style={{ lineHeight: '1.8', marginBottom: '1.5rem' }}>
            The OVERSCITE Preview environment is an isolated, demo-safe demonstration environment.
            It does not contain live customer data, property records, inspection findings, or
            operational information of any kind. It is designed to demonstrate the interface and
            workflow posture only.
          </p>
          <div className="flex gap-md flex-wrap">
            <a href="https://isdi-overscite.web.app" className="btn btn-primary" target="_blank" rel="noopener noreferrer" id="overscite-page-preview-cta">
              Enter Preview <Eye size={16} />
            </a>
            <Link to="/preview-request" className="btn btn-outline">Request Formal Access</Link>
          </div>
        </div>
      </div>
    </section>

    {/* Workflow Features */}
    <section className="section" style={{ background: 'var(--color-accent)' }}>
      <div className="container">
        <div className="eyebrow" style={{ justifyContent: 'center' }}><div className="eyebrow-line" /><span className="eyebrow-text">Capabilities</span><div className="eyebrow-line" /></div>
        <h2 className="text-center" style={{ marginBottom: '0.5rem' }}>Designed for Field Professionals</h2>
        <p className="text-muted text-center max-prose mb-lg" style={{ margin: '0.75rem auto 3rem' }}>
          OVERSCITE is designed to be the operational intelligence layer for inspection professionals — not a generic productivity tool.
        </p>
        <div className="card-grid">
          {[
            { title: 'Inspection Workflow Management', desc: 'Schedule, execute, and deliver inspection workflows through a governed interface.' },
            { title: 'Property Intelligence', desc: 'Structured property data, location context, and historical records in one governed workspace.' },
            { title: 'Evidence & Documentation', desc: 'Field evidence captured, organized, and traceable to human-reviewed findings.' },
            { title: 'Client Delivery', desc: 'Governed report generation and client communication within audit-ready boundaries.' },
            { title: 'Compliance Awareness', desc: 'Jurisdiction and compliance context surfaced through BANE-bounded intelligence.' },
            { title: 'Field Operations Support', desc: 'Designed for use in the field — mobile-aware, offline-capable posture in development.' },
          ].map(({ title, desc }) => (
            <div key={title} className="feature-card">
              <div style={{ width: '8px', height: '2px', background: 'var(--color-primary)', marginBottom: '1rem', borderRadius: '2px' }} />
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.6rem' }}>{title}</h3>
              <p className="text-muted text-sm" style={{ lineHeight: '1.6' }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section text-center" style={{ background: 'linear-gradient(to bottom, var(--color-background), var(--color-accent))' }}>
      <div className="container">
        <h2 style={{ marginBottom: '1.25rem' }}>Access the Preview</h2>
        <p className="text-muted mb-lg max-prose" style={{ margin: '0 auto 2.5rem' }}>
          Request formal preview access or enter the demo environment directly. No live data is present.
        </p>
        <div className="flex-center gap-md flex-wrap">
          <a href="https://isdi-overscite.web.app" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }} target="_blank" rel="noopener noreferrer">Enter Preview</a>
          <Link to="/preview-request" className="btn btn-ghost" style={{ padding: '1rem 2.5rem' }}>Request Formal Access</Link>
        </div>
      </div>
    </section>
  </>
);

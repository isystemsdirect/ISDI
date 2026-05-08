import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Search, Map, Calendar, ShieldCheck, Database } from 'lucide-react';
import { RevealSequence, GlassPanel, AmbientMesh, PresenceHalo } from '@isdi/ug-uix';

const FEATURES = [
  { icon: <Map size={24} color="var(--color-primary)" />, title: 'Geospatial Command', desc: 'Centralized location intelligence with layered data visualization and conflict reason-code analysis.' },
  { icon: <Calendar size={24} color="var(--color-primary)" />, title: 'Smart Scheduling', desc: 'Proprietary SmartSCHEDULER™ for optimizing field resource allocation while maintaining governance guardrails.' },
  { icon: <Search size={24} color="var(--color-primary)" />, title: 'Advanced Inspection', desc: 'Governed inspection workflows with full evidentiary traceability and multi-step validation.' },
  { icon: <ShieldCheck size={24} color="var(--color-primary)" />, title: 'BANE Enforcement', desc: 'Real-time boundary and normative enforcement ensures all platform acts remain within authorized parameters.' },
  { icon: <Database size={24} color="var(--color-primary)" />, title: 'ArcHive™ Lineage', desc: 'Permanent, audit-ready record keeping for all operational intelligence and human-in-the-loop decisions.' },
  { icon: <Layout size={24} color="var(--color-primary)" />, title: 'OverHUD Interface', desc: 'Ultra-Grade visual command surface designed for rapid situation assessment and strategic response.' },
];

export const Overscite: React.FC = () => {
  useEffect(() => {
    const link: HTMLLinkElement = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = '/media/overscite_logo.png';
    document.getElementsByTagName('head')[0].appendChild(link);
    return () => {
      link.type = 'image/x-icon';
      link.href = '/favicon.ico';
    };
  }, []);

  return (
  <>
    <section className="page-hero" style={{ position: 'relative', overflow: 'hidden' }}>
      <AmbientMesh />
      
      <PresenceHalo>
        <div className="container cinematic-content" style={{ position: 'relative', zIndex: 1 }}>
          <RevealSequence delay={100}>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link><span className="breadcrumb-sep">/</span><span>OVERSCITE</span>
            </nav>
            
            <div style={{ marginBottom: '2rem' }}>
              <img 
                src="/media/overscite_logo.png" 
                alt="OVERSCITE™" 
                style={{ height: 'clamp(40px, 8vw, 64px)', width: 'auto', display: 'block' }} 
              />
            </div>

            <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Platform</span></div>
            <h1 style={{ marginBottom: '1.25rem' }}>Professional Operational Control</h1>
            <p className="text-muted max-prose" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
              The professional command and control surface for the SCINGULAR™ architecture. 
              OVERSCITE transforms complex field data into actionable geospatial intelligence.
            </p>
          </RevealSequence>
        </div>
      </PresenceHalo>
    </section>

    <section className="section" style={{ background: 'var(--color-background)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,380px),1fr))', gap: 'clamp(2rem,6vw,5rem)', alignItems: 'center' }}>
          <RevealSequence delay={200}>
            <div className="glass-panel-wrapper" style={{ position: 'relative' }}>
              <img 
                src="/media/overscite_preview.png" 
                alt="OVERSCITE Interface Preview" 
                style={{ width: '100%', borderRadius: '12px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }} 
              />
              <div style={{ position: 'absolute', inset: 0, borderRadius: '12px', border: '1px solid rgba(212,160,23,0.1)' }} />
            </div>
          </RevealSequence>

          <RevealSequence delay={400}>
            <div>
              <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Intelligence</span></div>
              <h2 style={{ marginBottom: '1.5rem' }}>Professional Operational Control</h2>
              <p className="text-muted" style={{ lineHeight: '1.8', marginBottom: '1.5rem' }}>
                OVERSCITE is not a dashboard; it is a governed execution environment. It provides the visibility 
                required to manage vast infrastructure assets and distributed field teams with surgical precision.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'Unified geospatial visibility',
                  'Governed task orchestration',
                  'Real-time compliance monitoring',
                  'Evidence-based reporting',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
                    <div style={{ width: '6px', height: '6px', background: 'var(--color-primary)', borderRadius: '50%' }} />
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealSequence>
        </div>
      </div>
    </section>

    <section className="section" style={{ background: 'var(--color-accent)' }}>
      <div className="container">
        <RevealSequence delay={100}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}><div className="eyebrow-line" /><span className="eyebrow-text">Capabilities</span><div className="eyebrow-line" /></div>
          <h2 className="text-center" style={{ marginBottom: '3.5rem' }}>Platform Features</h2>
        </RevealSequence>

        <div className="card-grid">
          {FEATURES.map((f, i) => (
            <RevealSequence key={i} delay={100 + (i * 50)}>
              <GlassPanel className="p-8 h-full">
                <div style={{ marginBottom: '1.25rem' }}>{f.icon}</div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>{f.title}</h3>
                <p className="text-muted text-sm" style={{ lineHeight: '1.6' }}>{f.desc}</p>
              </GlassPanel>
            </RevealSequence>
          ))}
        </div>
      </div>
    </section>

    <section className="section text-center">
      <div className="container">
        <RevealSequence delay={200}>
          <GlassPanel className="p-12" style={{ borderTop: '4px solid var(--color-primary)' }}>
            <h2 style={{ marginBottom: '1.25rem' }}>Experience OVERSCITE</h2>
            <p className="text-muted mb-lg max-prose" style={{ margin: '0 auto 2.5rem' }}>
              The public preview environment allows authorized users to explore the interface and interaction 
              model of the OVERSCITE command surface.
            </p>
            <div className="flex-center gap-md flex-wrap">
              <a href="https://isdi-overscite.web.app" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }} target="_blank" rel="noopener noreferrer">Enter Preview</a>
              <Link to="/contact" className="btn btn-outline" style={{ padding: '1rem 2.5rem' }}>Schedule a Briefing</Link>
            </div>
          </GlassPanel>
        </RevealSequence>
      </div>
    </section>
  </>
  );
};

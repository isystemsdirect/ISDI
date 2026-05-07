import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle } from 'lucide-react';
import { RevealSequence, GlassPanel } from '@isdi/ug-uix';

const FAQS = [
  { q: "What is the difference between SCINGULAR and OVERSCITE?", a: "SCINGULAR is the underlying governed orchestration architecture, while OVERSCITE is the visual command surface and application environment where professional users interact with that architecture." },
  { q: "How is data security handled in the ISDI ecosystem?", a: "Security is enforced through our Zero-Trust Intelligence (ZTI) posture and the BANE governance layer. Every intelligence act is verified, and all data movement is auditable and traceable." },
  { q: "Can I use ISDI tools for my specific industry?", a: "While our core expertise is in critical infrastructure and inspection, the SCINGULAR architecture is adaptable to any domain requiring high-stakes, governed intelligence and field-grade operational control." },
  { q: "How do I request access to the OVERSCITE Preview?", a: "You can request a briefing and preview access through our Contact page or the Preview Request form. Access is granted to verified professionals and prospective partners." },
];

export const Faq: React.FC = () => (
  <>
    <section className="page-hero">
      <div className="container cinematic-content">
        <RevealSequence delay={100}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span className="breadcrumb-sep">/</span><span>FAQ</span>
          </nav>
          <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Resources</span></div>
          <h1 style={{ marginBottom: '1.25rem' }}>Support Center</h1>
          <p className="text-muted max-prose" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
            Frequently asked questions about the SCINGULAR™ architecture and the ISDI platform ecosystem.
          </p>
        </RevealSequence>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {FAQS.map((item, i) => (
            <RevealSequence key={i} delay={100 + (i * 100)}>
              <GlassPanel className="p-6 mb-md">
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <HelpCircle className="text-primary" size={20} style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', fontWeight: 700 }}>{item.q}</h3>
                    <p className="text-muted text-sm" style={{ lineHeight: '1.7' }}>{item.a}</p>
                  </div>
                </div>
              </GlassPanel>
            </RevealSequence>
          ))}
        </div>
      </div>
    </section>

    <section className="section text-center" style={{ background: 'var(--color-accent)' }}>
      <div className="container">
        <RevealSequence delay={200}>
          <h2 style={{ marginBottom: '1.25rem' }}>Still Have Questions?</h2>
          <p className="text-muted mb-lg" style={{ marginBottom: '2.5rem' }}>
            Our technical team is available to provide detailed architectural deep-dives.
          </p>
          <div className="flex-center gap-md">
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>Contact Support</Link>
            <a href="mailto:intelligence@isystemsdirect.com" className="btn btn-ghost">Email Us</a>
          </div>
        </RevealSequence>
      </div>
    </section>
  </>
);

import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Layout, Database, Send } from 'lucide-react';
import { RevealSequence, GlassPanel } from '@isdi/ug-uix';

export const PreviewRequest: React.FC = () => (
  <>
    <section className="page-hero">
      <div className="container cinematic-content">
        <RevealSequence delay={100}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span className="breadcrumb-sep">/</span><span>Preview Request</span>
          </nav>
          <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Briefing</span></div>
          <h1 style={{ marginBottom: '1.25rem' }}>Platform Access</h1>
          <p className="text-muted max-prose" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
            Requesting a professional briefing and access to the OVERSCITE™ platform preview environment.
          </p>
        </RevealSequence>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,400px),1fr))', gap: '4rem', alignItems: 'flex-start' }}>
          
          {/* Form Side */}
          <RevealSequence delay={200}>
            <GlassPanel className="p-10">
              <h2 style={{ marginBottom: '2rem', fontSize: '1.75rem' }}>Access Request</h2>
              <form onSubmit={(e) => e.preventDefault()}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div className="form-group">
                    <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>First Name</label>
                    <input type="text" placeholder="Jane" style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', padding: '0.75rem', color: 'white' }} />
                  </div>
                  <div className="form-group">
                    <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Last Name</label>
                    <input type="text" placeholder="Smith" style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', padding: '0.75rem', color: 'white' }} />
                  </div>
                </div>
                
                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Professional Email</label>
                  <input type="email" placeholder="jane@infrastructure.corp" style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', padding: '0.75rem', color: 'white' }} />
                </div>

                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Organization</label>
                  <input type="text" placeholder="Department of Infrastructure" style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', padding: '0.75rem', color: 'white' }} />
                </div>

                <div className="form-group" style={{ marginBottom: '2rem' }}>
                  <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Intended Use Case</label>
                  <textarea rows={4} placeholder="Briefly describe your interest in SCINGULAR / OVERSCITE." style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', padding: '0.75rem', color: 'white', resize: 'vertical' }}></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-full" style={{ padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
                  <Send size={18} /> Submit Request
                </button>
              </form>
            </GlassPanel>
          </RevealSequence>

          {/* Verification Requirements Side */}
          <RevealSequence delay={400}>
            <div>
              <h2 style={{ marginBottom: '2rem', fontSize: '1.75rem' }}>Access Tiers</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <GlassPanel className="p-6">
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <Layout className="text-primary" size={24} style={{ flexShrink: 0 }} />
                    <div>
                      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem' }}>Interface Preview</h3>
                      <p className="text-muted text-sm" style={{ margin: 0, lineHeight: '1.6' }}>
                        Visual walkthrough of the OVERSCITE command surface. Available to verified industry professionals.
                      </p>
                    </div>
                  </div>
                </GlassPanel>

                <GlassPanel className="p-6">
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <Shield className="text-primary" size={24} style={{ flexShrink: 0 }} />
                    <div>
                      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem' }}>Governance Briefing</h3>
                      <p className="text-muted text-sm" style={{ margin: 0, lineHeight: '1.6' }}>
                        In-depth review of BANE and SCINGULAR architectural safeguards. Restricted to compliance and risk officers.
                      </p>
                    </div>
                  </div>
                </GlassPanel>

                <GlassPanel className="p-6">
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <Database className="text-primary" size={24} style={{ flexShrink: 0 }} />
                    <div>
                      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem' }}>Technical Pilot</h3>
                      <p className="text-muted text-sm" style={{ margin: 0, lineHeight: '1.6' }}>
                        Sandboxed instance for actual workflow evaluation. Requires ARC human-identity verification.
                      </p>
                    </div>
                  </div>
                </GlassPanel>
              </div>

              <div className="mt-xl text-center">
                <p className="text-xs text-muted" style={{ fontStyle: 'italic' }}>
                  All access requests are subject to manual review by the ISDI Intelligence Unit. 
                  Approval is not guaranteed and depends on organizational alignment.
                </p>
              </div>
            </div>
          </RevealSequence>

        </div>
      </div>
    </section>
  </>
);

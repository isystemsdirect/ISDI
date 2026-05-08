import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, MapPin, Send, MessageSquare, Shield, Play, Download } from 'lucide-react';
import { RevealSequence, GlassPanel } from '@isdi/ug-uix';

export const Contact: React.FC = () => {
  const location = useLocation();
  const [subject, setSubject] = useState('General Inquiry');
  const [intentLabel, setIntentLabel] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const intent = params.get('intent');

    if (intent === 'arc-onboarding') {
      setSubject('ARC Identity Onboarding');
      setIntentLabel('ARC Identity Onboarding');
    } else if (intent === 'demo' || intent === 'demos') {
      setSubject('Platform Briefing Request');
      setIntentLabel('OVERSCITE™ Briefing');
    } else if (intent === 'downloads') {
      setSubject('Resource Access Request');
      setIntentLabel('Resource Center Access');
    }
  }, [location]);

  return (
    <>
      <section className="page-hero">
        <div className="container cinematic-content">
          <RevealSequence delay={100}>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link><span className="breadcrumb-sep">/</span><span>Contact</span>
            </nav>
            <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Connect</span></div>
            <h1 style={{ marginBottom: '1.25rem' }}>Get in Touch</h1>
            <p className="text-muted max-prose" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
              Request a technical briefing, inquire about partnerships, or schedule an OVERSCITE platform demonstration.
            </p>
          </RevealSequence>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,400px),1fr))', gap: '4rem' }}>
            
            {/* Info Side */}
            <RevealSequence delay={200}>
              <div>
                <h2 style={{ marginBottom: '2rem' }}>Contact Information</h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                    <div className="text-primary" style={{ marginTop: '0.25rem' }}><Mail size={24} /></div>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>Email</div>
                      <a href="mailto:info@isystemsdirect.com" className="text-muted hover:text-primary" style={{ fontSize: '1.1rem', textDecoration: 'none' }}>info@isystemsdirect.com</a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                    <div className="text-primary" style={{ marginTop: '0.25rem' }}><MapPin size={24} /></div>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>Global HQ</div>
                      <p className="text-muted" style={{ fontSize: '1.1rem', margin: 0 }}>
                        Operational Intelligence Division<br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                    <div className="text-primary" style={{ marginTop: '0.25rem' }}><MessageSquare size={24} /></div>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>Scing Support</div>
                      <p className="text-muted" style={{ fontSize: '0.95rem', margin: 0, lineHeight: '1.6' }}>
                        Authorized users can access direct technical support through their OVERSCITE instances.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-xl">
                  <GlassPanel className="p-6" style={{ background: 'rgba(212,160,23,0.03)' }}>
                    <p className="text-xs text-muted" style={{ margin: 0, fontStyle: 'italic' }}>
                      Note: ISDI prioritizes direct engagement with infrastructure professionals and strategic partners. 
                      All inquiries are processed under BANE-governed audit trails.
                    </p>
                  </GlassPanel>
                </div>
              </div>
            </RevealSequence>

            {/* Form Side */}
            <RevealSequence delay={400}>
              <GlassPanel className="p-10">
                {intentLabel && (
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.75rem', 
                    padding: '0.75rem 1rem', 
                    background: 'rgba(212,160,23,0.1)', 
                    border: '1px solid rgba(212,160,23,0.2)', 
                    borderRadius: '4px',
                    marginBottom: '1.5rem',
                    color: 'var(--color-primary)',
                    fontSize: '0.8rem',
                    fontWeight: 700
                  }}>
                    {subject.includes('ARC') ? <Shield size={16} /> : subject.includes('Briefing') ? <Play size={16} /> : <Download size={16} />}
                    Requesting: {intentLabel}
                  </div>
                )}

                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    <div className="form-group">
                      <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>First Name</label>
                      <input type="text" placeholder="John" style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', padding: '0.75rem', color: 'white' }} />
                    </div>
                    <div className="form-group">
                      <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Last Name</label>
                      <input type="text" placeholder="Doe" style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', padding: '0.75rem', color: 'white' }} />
                    </div>
                  </div>
                  
                  <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Email Address</label>
                    <input type="email" placeholder="john@company.com" style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', padding: '0.75rem', color: 'white' }} />
                  </div>

                  <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Subject</label>
                    <select 
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      style={{ width: '100%', background: 'rgba(4,9,14,1)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', padding: '0.75rem', color: 'white' }}
                    >
                      <option>General Inquiry</option>
                      <option>Partnership Proposal</option>
                      <option>Platform Briefing Request</option>
                      <option>ARC Identity Onboarding</option>
                      <option>Resource Access Request</option>
                      <option>Technical Support</option>
                    </select>
                  </div>

                  <div className="form-group" style={{ marginBottom: '2rem' }}>
                    <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Message</label>
                    <textarea rows={5} placeholder="How can we assist you?" style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', padding: '0.75rem', color: 'white', resize: 'vertical' }}></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary w-full" style={{ padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
                    <Send size={18} /> Send Message
                  </button>
                </form>
              </GlassPanel>
            </RevealSequence>
          </div>
        </div>
      </section>
    </>
  );
};

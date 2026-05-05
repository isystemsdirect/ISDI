import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Send, AlertCircle } from 'lucide-react';

interface ContactForm { name: string; email: string; organization: string; interest: string; message: string; }
const INIT: ContactForm = { name: '', email: '', organization: '', interest: '', message: '' };

export const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactForm>(INIT);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) { setError('Name, email, and message are required.'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { setError('Please enter a valid email.'); return; }
    const subject = encodeURIComponent(`ISDI Contact — ${form.interest || 'General'} — ${form.organization || 'Individual'}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nOrganization: ${form.organization}\nInterest: ${form.interest}\n\n${form.message}`);
    window.location.href = `mailto:partners@isystemsdirect.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <section className="page-hero">
        <div className="container cinematic-content">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span className="breadcrumb-sep">/</span><span>Contact</span>
          </nav>
          <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Partnership</span></div>
          <h1 style={{ marginBottom: '1.25rem', maxWidth: '700px' }}>Contact & Partnership Inquiry</h1>
          <p className="text-muted max-prose" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
            We are seeking strategic partners, infrastructure professionals, and aligned compute
            partners to join the SCINGULAR development track. Reach out to start a conversation.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-background)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,380px),1fr))', gap: 'clamp(2.5rem,6vw,5rem)' }}>
            {/* Form */}
            <div>
              {sent ? (
                <div className="glass-panel text-center">
                  <Mail size={36} color="var(--color-primary)" style={{ margin: '0 auto 1.5rem' }} />
                  <h2 style={{ marginBottom: '1rem' }}>Message Prepared</h2>
                  <p className="text-muted" style={{ lineHeight: '1.7', marginBottom: '2rem' }}>
                    Your email client has been opened with a pre-filled message to the ISDI partnership team.
                    We will respond to qualified inquiries within a reasonable timeframe.
                  </p>
                  <Link to="/" className="btn btn-ghost">Return Home</Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h2 style={{ marginBottom: '2rem' }}>Get in Touch</h2>
                  <div className="form-grid" style={{ marginBottom: '1.25rem' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="ct-name">Full Name *</label>
                      <input id="ct-name" name="name" type="text" className="form-input" value={form.name} onChange={handleChange} required autoComplete="name" placeholder="Jane Smith" />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="ct-email">Email *</label>
                      <input id="ct-email" name="email" type="email" className="form-input" value={form.email} onChange={handleChange} required autoComplete="email" placeholder="jane@company.com" />
                    </div>
                  </div>
                  <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                    <label className="form-label" htmlFor="ct-org">Organization <span style={{ fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>(optional)</span></label>
                    <input id="ct-org" name="organization" type="text" className="form-input" value={form.organization} onChange={handleChange} autoComplete="organization" placeholder="Company or Agency" />
                  </div>
                  <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                    <label className="form-label" htmlFor="ct-interest">Interest Area</label>
                    <select id="ct-interest" name="interest" className="form-select" value={form.interest} onChange={handleChange}>
                      <option value="">Select an area</option>
                      <option value="strategic-partnership">Strategic Partnership</option>
                      <option value="technology-partnership">Technology / Integration Partnership</option>
                      <option value="compute-alignment">Compute / Infrastructure Alignment</option>
                      <option value="inspection-professional">Inspection Professional Interest</option>
                      <option value="investment">Investment Inquiry</option>
                      <option value="media">Media / Research</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group" style={{ marginBottom: '2rem' }}>
                    <label className="form-label" htmlFor="ct-message">Message *</label>
                    <textarea id="ct-message" name="message" className="form-textarea" value={form.message} onChange={handleChange} required placeholder="Describe your interest, organization, and how you'd like to work with ISDI…" style={{ minHeight: '150px' }} />
                  </div>
                  {error && (
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: '#f87171', fontSize: '0.875rem', marginBottom: '1.25rem' }}>
                      <AlertCircle size={16} />{error}
                    </div>
                  )}
                  <button type="submit" className="btn btn-primary w-full" style={{ justifyContent: 'center' }}>
                    <Send size={16} /> Send Partnership Inquiry
                  </button>
                  <p className="text-xs text-muted mt-sm" style={{ lineHeight: '1.6' }}>
                    Submitting opens your email client with a pre-filled message. No form data is stored on this site.
                  </p>
                </form>
              )}
            </div>

            {/* Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="glass-panel">
                <div className="flex gap-sm" style={{ marginBottom: '1.25rem' }}>
                  <Mail size={20} color="var(--color-primary)" />
                  <h3 style={{ fontSize: '1rem' }}>Partnership Contact</h3>
                </div>
                <p className="text-muted text-sm" style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
                  Direct partnership and strategic inquiry contact:
                </p>
                <a href="mailto:partners@isystemsdirect.com" style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.9rem', wordBreak: 'break-all' }}>
                  partners@isystemsdirect.com
                </a>
              </div>

              <div className="glass-panel-green">
                <h4 style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem', color: 'var(--color-primary)' }}>We Are Interested In</h4>
                <ul style={{ display: 'grid', gap: '0.75rem', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                  {[
                    'Strategic infrastructure and inspection industry partners',
                    'Compute and AI infrastructure alignment partners',
                    'Licensed inspection professionals for advisory input',
                    'Technology integration and platform partnerships',
                    'Research and development collaborations',
                  ].map(item => (
                    <li key={item} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', lineHeight: '1.5' }}>
                      <div style={{ width: '5px', height: '5px', background: 'var(--color-primary)', borderRadius: '50%', marginTop: '0.5rem', flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.06)', fontSize: '0.75rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                ISDI is a prototype-stage company. Partnership discussions are exploratory and do not constitute
                commitments, agreements, or representations of commercial readiness. All responses are
                subject to ISDI's governance and authority posture.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

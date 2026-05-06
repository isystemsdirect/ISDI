import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Key, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  organization: string;
  role: string;
  interest: string;
  message: string;
}

const INITIAL_FORM: FormState = { name: '', email: '', organization: '', role: '', interest: '', message: '' };

/** Generate a deterministic 6-digit numeric preview code from email + timestamp bucket.
 *  This is display-only — no data is persisted. Codes must be verified manually. */
function generatePreviewCode(email: string): string {
  const seed = email.toLowerCase().trim() + Math.floor(Date.now() / (1000 * 60 * 60 * 24)).toString();
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = ((hash << 5) - hash + seed.charCodeAt(i)) | 0;
  }
  return String(Math.abs(hash) % 1000000).padStart(6, '0');
}

export const PreviewRequest: React.FC = () => {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [previewCode, setPreviewCode] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.organization || !form.role || !form.interest) {
      setError('Please complete all required fields.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    const code = generatePreviewCode(form.email);
    setPreviewCode(code);
    setSubmitted(true);

    // Build mailto link for the submission record
    const subject = encodeURIComponent(`OVERSCITE Preview Request — ${form.organization}`);
    const body = encodeURIComponent(
      `Preview Request\n\nName: ${form.name}\nEmail: ${form.email}\nOrganization: ${form.organization}\nRole: ${form.role}\nInterest: ${form.interest}\nMessage: ${form.message}\n\nGenerated Code: ${code}`
    );
    window.location.href = `mailto:partners@isystemsdirect.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <section className="page-hero">
        <div className="container cinematic-content">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span className="breadcrumb-sep">/</span><span>Preview Request</span>
          </nav>
          <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Access</span></div>
          <h1 style={{ marginBottom: '1.25rem', maxWidth: '700px' }}>Request Preview Access</h1>
          <p className="text-muted max-prose" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
            Submit a request for limited access to the OVERSCITE Preview environment.
            Preview access is demo-safe — no live customer, property, or inspection data is accessible.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-background)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,400px),1fr))', gap: 'clamp(2.5rem,6vw,5rem)' }}>

            {/* Form or Success */}
            <div>
              {submitted ? (
                <AccessCodeSuccess code={previewCode} name={form.name} />
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h2 style={{ marginBottom: '2rem' }}>Preview Access Form</h2>

                  <div className="form-grid" style={{ marginBottom: '1.25rem' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="pr-name">Full Name *</label>
                      <input id="pr-name" name="name" type="text" className="form-input" value={form.name} onChange={handleChange} required autoComplete="name" placeholder="Jane Smith" />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="pr-email">Email *</label>
                      <input id="pr-email" name="email" type="email" className="form-input" value={form.email} onChange={handleChange} required autoComplete="email" placeholder="jane@company.com" />
                    </div>
                  </div>

                  <div className="form-grid" style={{ marginBottom: '1.25rem' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="pr-org">Organization *</label>
                      <input id="pr-org" name="organization" type="text" className="form-input" value={form.organization} onChange={handleChange} required autoComplete="organization" placeholder="Company or Agency" />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="pr-role">Role *</label>
                      <input id="pr-role" name="role" type="text" className="form-input" value={form.role} onChange={handleChange} required placeholder="Engineer, Inspector, Lead, Director…" />
                    </div>
                  </div>

                  <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                    <label className="form-label" htmlFor="pr-interest">Primary Interest *</label>
                    <select id="pr-interest" name="interest" className="form-select" value={form.interest} onChange={handleChange} required>
                      <option value="">Select interest area</option>
                      <option value="inspection-workflow">Inspection Workflow Intelligence</option>
                      <option value="infrastructure">Infrastructure Management</option>
                      <option value="field-operations">Field Operations</option>
                      <option value="research">Research / Academic</option>
                      <option value="partner">Technology Partnership</option>
                      <option value="compute">Compute / Infrastructure Alignment</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group" style={{ marginBottom: '2rem' }}>
                    <label className="form-label" htmlFor="pr-message">Additional Context <span style={{ fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>(optional)</span></label>
                    <textarea id="pr-message" name="message" className="form-textarea" value={form.message} onChange={handleChange} placeholder="Describe your use case or how you found ISDI…" />
                  </div>

                  {error && (
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: '#f87171', fontSize: '0.875rem', marginBottom: '1.25rem' }}>
                      <AlertCircle size={16} />{error}
                    </div>
                  )}

                  <button type="submit" className="btn btn-primary w-full" style={{ justifyContent: 'center', fontSize: '0.9rem' }}>
                    <Send size={16} /> Submit Preview Request
                  </button>

                  <p className="text-xs text-muted mt-sm" style={{ lineHeight: '1.6' }}>
                    Submitting will open your email client with a pre-filled request to partners@isystemsdirect.com.
                    A 6-digit access code will be generated and displayed. Preview access is subject to review.
                  </p>
                </form>
              )}
            </div>

            {/* Info sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="glass-panel">
                <div className="flex gap-sm" style={{ marginBottom: '1rem' }}>
                  <Key size={20} color="var(--color-primary)" />
                  <h3 style={{ fontSize: '1rem' }}>How Access Works</h3>
                </div>
                <ol style={{ display: 'grid', gap: '0.85rem', paddingLeft: '1.25rem', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                  <li style={{ lineHeight: '1.5' }}>Submit this form — your email client opens with a pre-filled request.</li>
                  <li style={{ lineHeight: '1.5' }}>A 6–8 digit preview access code is generated and shown on screen.</li>
                  <li style={{ lineHeight: '1.5' }}>The ISDI team reviews your request and confirms your access code.</li>
                  <li style={{ lineHeight: '1.5' }}>You receive confirmation with instructions to access the OVERSCITE Preview.</li>
                </ol>
              </div>

              <div className="glass-panel-green">
                <h4 style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem', color: 'var(--color-primary)' }}>Preview Environment</h4>
                <ul style={{ display: 'grid', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                  {[
                    'Demo-safe, isolated environment',
                    'No live customer data',
                    'No property or inspection records',
                    'No compliance determinations',
                    'For evaluation and demonstration only',
                  ].map(item => (
                    <li key={item} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                      <CheckCircle size={14} color="var(--color-primary)" style={{ marginTop: '2px', flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', lineHeight: '1.6', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.06)' }}>
                Access is provided at ISDI's discretion. Preview codes grant limited, time-bound access to the
                OVERSCITE demo environment only. No production systems or operational data are exposed.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const AccessCodeSuccess = ({ code, name }: { code: string; name: string }) => (
  <div>
    <div className="access-code-display">
      <CheckCircle size={32} color="var(--color-primary)" style={{ margin: '0 auto 1.5rem' }} />
      <h2 style={{ marginBottom: '0.75rem' }}>Request Submitted</h2>
      <p className="text-muted text-sm" style={{ marginBottom: '2rem', lineHeight: '1.6' }}>
        Thank you, {name}. Your preview access request has been prepared. Your generated access code is:
      </p>
      <div className="access-code-number">{code}</div>
      <p className="text-xs text-muted mt-md" style={{ lineHeight: '1.6' }}>
        This code will be confirmed by the ISDI team after reviewing your request.
        It grants access to the OVERSCITE Preview demo environment only.
        No operational data is accessible.
      </p>
    </div>
    <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <a href="https://isdi-overscite.web.app" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
        Enter OVERSCITE Preview
      </a>
      <Link to="/" className="btn btn-ghost">Return Home</Link>
    </div>
  </div>
);

import { Link } from 'react-router-dom';

const year = new Date().getFullYear();

const LegalSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div style={{ marginBottom: '2.5rem' }}>
    <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-text)' }}>{title}</h2>
    <div style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>{children}</div>
  </div>
);

export const Privacy: React.FC = () => (
  <>
    <section className="page-hero">
      <div className="container cinematic-content">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link><span className="breadcrumb-sep">/</span>
          <Link to="/legal/disclaimers">Legal</Link><span className="breadcrumb-sep">/</span>
          <span>Privacy Policy</span>
        </nav>
        <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Legal</span></div>
        <h1 style={{ marginBottom: '1rem' }}>Privacy Policy</h1>
        <p className="text-muted text-sm">Last updated: May 2026 | Prototype-Stage Deployment</p>
      </div>
    </section>

    <section className="section" style={{ background: 'var(--color-background)' }}>
      <div className="container">
        <div style={{ maxWidth: '780px' }}>
          <LegalSection title="1. Overview">
            <p>
              Inspection Systems Direct ("ISDI," "we," "us") operates isystemsdirect.com (the "Site"). This
              Privacy Policy describes what information we handle and how we handle it. The Site is a
              prototype-stage informational property. We do not operate a data collection platform and do
              not store personal data through this Site's standard operation.
            </p>
          </LegalSection>

          <LegalSection title="2. Information We Do Not Collect">
            <p style={{ marginBottom: '0.75rem' }}>Through this Site, we do not:</p>
            <ul style={{ paddingLeft: '1.5rem', display: 'grid', gap: '0.5rem', listStyle: 'disc' }}>
              <li>Store form submissions server-side. Contact and preview request forms submit via your local email client (mailto:) only.</li>
              <li>Use third-party analytics cookies or tracking pixels.</li>
              <li>Collect biometric, sensor, or inspection data through this Site.</li>
              <li>Create user accounts or persistent sessions on this Site.</li>
            </ul>
          </LegalSection>

          <LegalSection title="3. Information That May Be Logged">
            <p>
              Standard web server infrastructure may log technical data such as IP addresses, browser type,
              pages visited, and access timestamps for operational and security purposes. These logs are not
              used for marketing or sold to third parties. Firebase Hosting (Google) may process technical
              access data subject to Google's privacy policies.
            </p>
          </LegalSection>

          <LegalSection title="4. OVERSCITE Preview Environment">
            <p>
              The OVERSCITE Preview environment (isdi-overscite.web.app) is a separate, isolated demo-safe
              environment. It does not contain live customer data, property records, or inspection records.
              Any data entered in the preview environment is for demonstration purposes only and is not stored
              operationally.
            </p>
          </LegalSection>

          <LegalSection title="5. Third-Party Services">
            <p>
              This Site is hosted on Firebase Hosting (Google Cloud). Requests are subject to Google's
              standard infrastructure logging practices. We do not embed third-party social media widgets,
              advertising networks, or behavioral tracking services on this Site.
            </p>
          </LegalSection>

          <LegalSection title="6. Contact">
            <p>
              For privacy-related questions, contact:{' '}
              <a href="mailto:partners@isystemsdirect.com" style={{ color: 'var(--color-primary)' }}>
                partners@isystemsdirect.com
              </a>
            </p>
          </LegalSection>

          <LegalSection title="7. Updates">
            <p>
              This policy may be updated as the Site evolves from prototype stage. The "Last updated" date
              at the top of this page reflects the most recent revision.
            </p>
          </LegalSection>

          <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem', marginTop: '1.5rem' }}>
            &copy; {year} Inspection Systems Direct. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  </>
);

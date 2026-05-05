import { Link } from 'react-router-dom';

const year = new Date().getFullYear();

const LegalSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div style={{ marginBottom: '2.5rem' }}>
    <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-text)' }}>{title}</h2>
    <div style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>{children}</div>
  </div>
);

export const Terms: React.FC = () => (
  <>
    <section className="page-hero">
      <div className="container cinematic-content">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link><span className="breadcrumb-sep">/</span>
          <Link to="/legal/disclaimers">Legal</Link><span className="breadcrumb-sep">/</span>
          <span>Terms of Use</span>
        </nav>
        <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Legal</span></div>
        <h1 style={{ marginBottom: '1rem' }}>Terms of Use</h1>
        <p className="text-muted text-sm">Last updated: May 2026 | Prototype-Stage Deployment</p>
      </div>
    </section>

    <section className="section" style={{ background: 'var(--color-background)' }}>
      <div className="container">
        <div style={{ maxWidth: '780px' }}>
          <LegalSection title="1. Acceptance of Terms">
            <p>
              By accessing isystemsdirect.com (the "Site"), you agree to these Terms of Use. If you do not
              agree, please do not use this Site. These terms apply to all visitors, including users of the
              OVERSCITE Preview environment.
            </p>
          </LegalSection>

          <LegalSection title="2. Prototype-Stage Disclaimer">
            <p>
              ISDI, SCINGULAR™, and OVERSCITE™ are in active development at prototype stage. Features,
              interfaces, and capabilities described on this Site are aspirational and developmental in nature.
              Nothing on this Site constitutes a representation of production readiness, commercial availability,
              regulatory approval, or verified compliance capability.
            </p>
          </LegalSection>

          <LegalSection title="3. Permitted Use">
            <p style={{ marginBottom: '0.75rem' }}>You may use this Site for:</p>
            <ul style={{ paddingLeft: '1.5rem', display: 'grid', gap: '0.5rem', listStyle: 'disc' }}>
              <li>Informational and research purposes</li>
              <li>Evaluating ISDI's technology posture</li>
              <li>Submitting partnership and preview access inquiries</li>
              <li>Accessing the OVERSCITE Preview demo environment for evaluation</li>
            </ul>
          </LegalSection>

          <LegalSection title="4. Prohibited Use">
            <p style={{ marginBottom: '0.75rem' }}>You may not use this Site to:</p>
            <ul style={{ paddingLeft: '1.5rem', display: 'grid', gap: '0.5rem', listStyle: 'disc' }}>
              <li>Misrepresent ISDI's status, capabilities, or partnerships</li>
              <li>Attempt to access systems beyond the authorized demo environment</li>
              <li>Circumvent access controls or security boundaries</li>
              <li>Submit false preview requests or contact inquiries</li>
              <li>Reproduce SCINGULAR™, OVERSCITE™, or ScingOS™ marks without authorization</li>
            </ul>
          </LegalSection>

          <LegalSection title="5. Intellectual Property">
            <p>
              All content on this Site, including text, architecture descriptions, brand marks, and interface
              designs, is the property of Inspection Systems Direct. SCINGULAR™, OVERSCITE™, and ScingOS™
              are protected marks of ISDI. No content may be reproduced, distributed, or used commercially
              without explicit written authorization.
            </p>
          </LegalSection>

          <LegalSection title="6. No Warranties">
            <p>
              This Site and its content are provided "as is" at prototype stage. ISDI makes no warranties,
              express or implied, regarding accuracy, completeness, availability, or fitness for any purpose.
              Descriptions of future features are aspirational and not contractual commitments.
            </p>
          </LegalSection>

          <LegalSection title="7. Limitation of Liability">
            <p>
              To the maximum extent permitted by applicable law, ISDI shall not be liable for any indirect,
              incidental, special, or consequential damages arising from your use of this Site or reliance on
              its content. Our total liability, if any, shall not exceed zero dollars, as this Site provides
              no commercial transaction capability.
            </p>
          </LegalSection>

          <LegalSection title="8. Governing Law">
            <p>
              These Terms are governed by the laws of the applicable jurisdiction in which Inspection Systems
              Direct operates. Disputes shall be resolved in the appropriate courts of that jurisdiction.
            </p>
          </LegalSection>

          <LegalSection title="9. Contact">
            <p>
              Questions about these Terms:{' '}
              <a href="mailto:partners@isystemsdirect.com" style={{ color: 'var(--color-primary)' }}>
                partners@isystemsdirect.com
              </a>
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

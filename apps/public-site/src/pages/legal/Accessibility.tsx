import { Link } from 'react-router-dom';

const year = new Date().getFullYear();

const LegalSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div style={{ marginBottom: '2.5rem' }}>
    <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-text)' }}>{title}</h2>
    <div style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>{children}</div>
  </div>
);

export const Accessibility: React.FC = () => (
  <>
    <section className="page-hero">
      <div className="container cinematic-content">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link><span className="breadcrumb-sep">/</span>
          <Link to="/legal/disclaimers">Legal</Link><span className="breadcrumb-sep">/</span>
          <span>Accessibility</span>
        </nav>
        <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Legal</span></div>
        <h1 style={{ marginBottom: '1rem' }}>Accessibility Statement</h1>
        <p className="text-muted text-sm">Last updated: May 2026 | Prototype-Stage Deployment</p>
      </div>
    </section>

    <section className="section" style={{ background: 'var(--color-background)' }}>
      <div className="container">
        <div style={{ maxWidth: '780px' }}>
          <LegalSection title="1. Our Commitment">
            <p>
              Inspection Systems Direct is committed to making isystemsdirect.com accessible to users of
              all abilities. We aspire to meet Web Content Accessibility Guidelines (WCAG) 2.1 Level AA
              standards. This Site is at prototype stage, and accessibility improvements are ongoing.
            </p>
          </LegalSection>

          <LegalSection title="2. Current Accessibility Posture">
            <p style={{ marginBottom: '0.75rem' }}>
              The following accessibility features are implemented or in progress:
            </p>
            <ul style={{ paddingLeft: '1.5rem', display: 'grid', gap: '0.5rem', listStyle: 'disc' }}>
              <li>Semantic HTML5 structure with appropriate heading hierarchy</li>
              <li>Descriptive alt text for informational images</li>
              <li>ARIA labels on interactive elements (buttons, navigation, dialogs)</li>
              <li>Keyboard-navigable interface elements</li>
              <li>Color contrast ratios designed to meet WCAG AA minimums</li>
              <li>Responsive layout that adapts to user viewport and text size preferences</li>
              <li>Mobile-first responsive design with accessible touch targets (minimum 44x44px)</li>
            </ul>
          </LegalSection>

          <LegalSection title="3. Known Limitations">
            <p>
              As a prototype-stage site, we acknowledge the following limitations may exist:
            </p>
            <ul style={{ paddingLeft: '1.5rem', display: 'grid', gap: '0.5rem', listStyle: 'disc', marginTop: '0.75rem' }}>
              <li>Cinematic background images may not carry full descriptive alt text in all contexts</li>
              <li>Complex animated elements may not fully respect prefers-reduced-motion in all browsers</li>
              <li>OVERSCITE Preview is a separate environment with its own accessibility development track</li>
            </ul>
          </LegalSection>

          <LegalSection title="4. Feedback and Assistance">
            <p>
              If you experience accessibility barriers on this Site, please contact us at:{' '}
              <a href="mailto:partners@isystemsdirect.com" style={{ color: 'var(--color-primary)' }}>
                partners@isystemsdirect.com
              </a>
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              Please describe the specific barrier you encountered and the assistive technology or method
              you were using. We will respond as promptly as reasonably possible.
            </p>
          </LegalSection>

          <LegalSection title="5. Standards Reference">
            <p>
              Our accessibility aspiration is WCAG 2.1 Level AA conformance. This is an aspirational target
              for a prototype-stage site and does not constitute a conformance claim or certification.
              We will update this statement as accessibility improvements are made.
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

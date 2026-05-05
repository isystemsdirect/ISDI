import { Link } from 'react-router-dom';

const year = new Date().getFullYear();

const LegalSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div style={{ marginBottom: '2.5rem' }}>
    <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-text)' }}>{title}</h2>
    <div style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>{children}</div>
  </div>
);

export const Disclaimers: React.FC = () => (
  <>
    <section className="page-hero">
      <div className="container cinematic-content">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link><span className="breadcrumb-sep">/</span>
          <span>Legal &amp; Disclaimers</span>
        </nav>
        <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Legal</span></div>
        <h1 style={{ marginBottom: '1rem' }}>Disclaimers</h1>
        <p className="text-muted text-sm">Last updated: May 2026 | Prototype-Stage Deployment</p>
      </div>
    </section>

    <section className="section" style={{ background: 'var(--color-background)' }}>
      <div className="container">
        <div style={{ maxWidth: '780px' }}>
          <LegalSection title="1. Prototype-Stage Technology Disclaimer">
            <p>
              SCINGULAR™, OVERSCITE™, ScingOS™, and all associated ISDI technology described on this Site
              are at prototype and development stage. Descriptions of capabilities, features, and use cases
              are aspirational and developmental. They do not represent production deployments, commercially
              available products, or completed systems. No content on this Site should be relied upon for
              professional, legal, compliance, or operational decisions.
            </p>
          </LegalSection>

          <LegalSection title="2. NVIDIA Disclaimer">
            <p>
              References to NVIDIA on this Site describe compute and infrastructure ecosystem alignment only.
              ISDI is not an NVIDIA partner, certified vendor, endorsed product, sponsored entity, or accepted
              program participant unless explicitly stated otherwise with verifiable public documentation.
              The NVIDIA Inception program reference, if present on this Site, describes an application or
              interest context only and does not imply acceptance, partnership, certification, or sponsorship.
              NVIDIA is a registered trademark of NVIDIA Corporation. NVIDIA has no affiliation with or
              responsibility for ISDI's technology, claims, or products.
            </p>
          </LegalSection>

          <LegalSection title="3. AI and Intelligence System Disclaimer">
            <p>
              SCINGULAR and OVERSCITE are governed intelligence systems in development. They are designed to
              augment, not replace, licensed, certified, and accountable human professionals. No output from
              any ISDI system constitutes professional advice, legal advice, regulatory guidance, compliance
              determination, or a substitute for qualified human professional judgment. All high-impact
              conclusions produced by ISDI systems are designed to be human-reviewed.
            </p>
          </LegalSection>

          <LegalSection title="4. Compliance and Regulatory Disclaimer">
            <p>
              ISDI does not claim regulatory approval, certification, or compliance authority for any
              jurisdiction. References to compliance-aware design, governed workflows, or BANE-bounded
              constraints describe the architectural posture of systems in development — not verified
              compliance certifications or regulatory approvals. Compliance determinations remain the
              responsibility of licensed, accountable professionals.
            </p>
          </LegalSection>

          <LegalSection title="5. Forward-Looking Statements">
            <p>
              Statements on this Site regarding future capabilities, planned features, development roadmaps,
              or platform evolution are forward-looking in nature. They involve known and unknown risks,
              uncertainties, and other factors that may cause actual results to differ materially from
              those expressed or implied. ISDI undertakes no obligation to update forward-looking statements.
            </p>
          </LegalSection>

          <LegalSection title="6. Preview Environment Disclaimer">
            <p>
              The OVERSCITE Preview environment is an isolated, demo-safe demonstration environment. It does
              not contain live customer data, property records, inspection findings, compliance records, or
              any operational information. Access to the preview environment does not create any contractual
              relationship, license, or right to access future production systems.
            </p>
          </LegalSection>

          <LegalSection title="7. No Professional Relationship">
            <p>
              Use of this Site or the OVERSCITE Preview does not create a professional, advisory, contractual,
              or fiduciary relationship between ISDI and the user. Information provided on this Site is
              for general informational purposes only.
            </p>
          </LegalSection>

          <div style={{ display: 'grid', gap: '1rem', marginTop: '2rem', marginBottom: '2rem' }}>
            <Link to="/legal/privacy" style={{ color: 'var(--color-primary)', fontSize: '0.9rem' }}>→ Privacy Policy</Link>
            <Link to="/legal/terms" style={{ color: 'var(--color-primary)', fontSize: '0.9rem' }}>→ Terms of Use</Link>
            <Link to="/legal/accessibility" style={{ color: 'var(--color-primary)', fontSize: '0.9rem' }}>→ Accessibility Statement</Link>
          </div>

          <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem', marginTop: '1.5rem' }}>
            &copy; {year} Inspection Systems Direct. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  </>
);

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const FAQ_ITEMS = [
  {
    q: 'What is Inspection Systems Direct (ISDI)?',
    a: 'Inspection Systems Direct (ISDI) is an infrastructure intelligence company developing governed AI tooling for professional inspection and field operations. ISDI builds SCINGULAR™ — a sovereign orchestration architecture — and OVERSCITE™ — the primary intelligence workspace for inspection professionals.',
  },
  {
    q: 'What is SCINGULAR™?',
    a: 'SCINGULAR is a governed orchestration architecture designed to support licensed inspection and infrastructure professionals. It is not a general-purpose AI — it is a purpose-built, boundary-enforced intelligence layer. Key components include ScingBFI (unified intelligence stack), LARI (reasoning engine), BANE (constraint enforcement), and ZTI (Zero-Trust Intelligence posture).',
  },
  {
    q: 'What is OVERSCITE™?',
    a: 'OVERSCITE is the governed intelligence workspace built on the SCINGULAR architecture. It is designed for inspection and field operations professionals — providing property-aware, client-focused, reporting-ready workflow management under human-final authority constraints.',
  },
  {
    q: 'What is the OVERSCITE Preview?',
    a: 'The OVERSCITE Preview is a demo-safe, isolated environment for evaluating the OVERSCITE platform. It does not contain live customer data, property records, inspection findings, or operational information. It is designed for demonstration and evaluation purposes only.',
  },
  {
    q: 'How do I request preview access?',
    a: 'Submit a Preview Request through the Preview Request page. You will need to provide your name, email, organization, role, and interest area. A 6-digit access code will be generated for your record. Access is confirmed by the ISDI team after reviewing your request.',
  },
  {
    q: 'Is SCINGULAR a replacement for licensed inspectors?',
    a: 'No. SCINGULAR is explicitly designed to augment licensed, certified, and accountable professionals — not replace them. Human authority is the non-negotiable constraint at every level of the architecture. Automation remains subordinate to human decision-making.',
  },
  {
    q: 'What is ISDI\'s relationship with NVIDIA?',
    a: 'ISDI has aligned with NVIDIA\'s compute and infrastructure ecosystem. This alignment relates to compute architecture and AI-accelerated infrastructure development. It does not represent an NVIDIA partnership, endorsement, certification, sponsorship, or commercial agreement of any kind. References to NVIDIA on this site are compute-infrastructure alignment statements only.',
  },
  {
    q: 'Is SCINGULAR production-ready?',
    a: 'No. SCINGULAR and OVERSCITE are in active development and are at prototype stage. The OVERSCITE Preview environment is a demo-safe demonstration only. ISDI does not claim production deployment, live customer traction, or regulatory approval where it has not been verified.',
  },
  {
    q: 'Does ISDI handle compliance determinations?',
    a: 'SCINGULAR is designed to support compliance-aware workflows, but it does not make autonomous compliance determinations. All outputs are human-reviewed. Compliance determinations remain the responsibility of licensed, accountable professionals. ISDI does not claim regulatory approval.',
  },
  {
    q: 'How does ISDI handle data privacy?',
    a: 'The ISDI public website (isystemsdirect.com) does not collect personal data through automated means beyond standard web server logs. No form submissions are stored server-side — contact and preview request forms submit via your email client. See our Privacy Policy for full details.',
  },
  {
    q: 'How can I partner with ISDI?',
    a: 'We are seeking strategic partners, infrastructure professionals, compute alignment partners, and technology integrators. Submit a partnership inquiry through the Contact page or email partners@isystemsdirect.com. All discussions are exploratory at prototype stage.',
  },
  {
    q: 'What does "governed workflow" mean in the ISDI context?',
    a: 'Governed workflows in the ISDI context means every action, recommendation, and output is bounded by explicit rules, auditable, human-reviewable, and traceable. The BANE (Boundary and Normative Enforcement Layer) enforces these constraints at the system level — not as policy choices, but as structural guarantees.',
  },
];

const FaqItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button className="faq-trigger" onClick={() => setOpen(v => !v)} aria-expanded={open}>
        {q}
        <ChevronDown size={18} className={`faq-chevron${open ? ' open' : ''}`} />
      </button>
      <div className={`faq-body${open ? ' open' : ''}`} aria-hidden={!open}>
        <p className="faq-answer">{a}</p>
      </div>
    </div>
  );
};

export const Faq: React.FC = () => (
  <>
    <section className="page-hero">
      <div className="container cinematic-content">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link><span className="breadcrumb-sep">/</span><span>FAQ</span>
        </nav>
        <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Support</span></div>
        <h1 style={{ marginBottom: '1.25rem', maxWidth: '700px' }}>Frequently Asked Questions</h1>
        <p className="text-muted max-prose" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
          Common questions about ISDI, SCINGULAR, OVERSCITE, preview access, and our governance posture.
        </p>
      </div>
    </section>

    <section className="section" style={{ background: 'var(--color-background)' }}>
      <div className="container">
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          {FAQ_ITEMS.map(({ q, a }) => <FaqItem key={q} q={q} a={a} />)}
        </div>
      </div>
    </section>

    <section className="section text-center" style={{ background: 'var(--color-accent)' }}>
      <div className="container">
        <h2 style={{ marginBottom: '1rem' }}>Still Have Questions?</h2>
        <p className="text-muted mb-md max-prose" style={{ margin: '0 auto 2rem' }}>
          Reach out through the contact page or email us directly.
        </p>
        <div className="flex-center gap-md flex-wrap">
          <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>Contact Us</Link>
          <a href="mailto:partners@isystemsdirect.com" className="btn btn-ghost" style={{ padding: '1rem 2.5rem' }}>partners@isystemsdirect.com</a>
        </div>
      </div>
    </section>
  </>
);

import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import { ISDI_BRAND_NAME } from '@isdi/brand';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      backgroundColor: '#02070B',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      padding: 'clamp(3rem,10vw,6rem) 0 2rem',
    }}>
      <div className="container">
        {/* Footer grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 'clamp(2rem,5vw,4rem)',
          marginBottom: 'clamp(3rem,8vw,5rem)',
        }}>
          {/* Brand column */}
          <div style={{ gridColumn: 'span 1' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.5rem' }}>
              <ShieldCheck color="var(--color-primary)" size={22} />
              <span style={{ fontWeight: 900, fontSize: '1.1rem', letterSpacing: '0.1em' }}>{ISDI_BRAND_NAME}</span>
            </Link>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', lineHeight: '1.7', maxWidth: '280px' }}>
              Pioneering governed intelligence for the modern infrastructure landscape.
              Built on human authority, verifiable truth, and fail-closed security.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 style={{ color: 'var(--color-text)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>
              Platform
            </h4>
            <ul style={{ display: 'grid', gap: '0.85rem', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
              <li><Link to="/scingular" style={{ transition: 'color 0.2s' }} onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-primary)')} onMouseLeave={e => (e.currentTarget.style.color = '')}>SCINGULAR™</Link></li>
              <li><Link to="/overscite" style={{ transition: 'color 0.2s' }} onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-primary)')} onMouseLeave={e => (e.currentTarget.style.color = '')}>OVERSCITE™</Link></li>
              <li><Link to="/preview-request" style={{ transition: 'color 0.2s' }} onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-primary)')} onMouseLeave={e => (e.currentTarget.style.color = '')}>Preview Request</Link></li>
              <li>
                <a href="https://isdi-overscite.web.app" target="_blank" rel="noopener noreferrer"
                  style={{ transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-primary)')}
                  onMouseLeave={e => (e.currentTarget.style.color = '')}>
                  OVERSCITE Preview ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ color: 'var(--color-text)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>
              Company
            </h4>
            <ul style={{ display: 'grid', gap: '0.85rem', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
              <li><Link to="/about" onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-primary)')} onMouseLeave={e => (e.currentTarget.style.color = '')}>About ISDI</Link></li>
              <li><Link to="/contact" onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-primary)')} onMouseLeave={e => (e.currentTarget.style.color = '')}>Contact & Partnerships</Link></li>
              <li><Link to="/faq" onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-primary)')} onMouseLeave={e => (e.currentTarget.style.color = '')}>FAQ / Support</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ color: 'var(--color-text)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>
              Legal
            </h4>
            <ul style={{ display: 'grid', gap: '0.85rem', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
              <li><Link to="/legal/privacy" onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-primary)')} onMouseLeave={e => (e.currentTarget.style.color = '')}>Privacy Policy</Link></li>
              <li><Link to="/legal/terms" onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-primary)')} onMouseLeave={e => (e.currentTarget.style.color = '')}>Terms of Use</Link></li>
              <li><Link to="/legal/accessibility" onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-primary)')} onMouseLeave={e => (e.currentTarget.style.color = '')}>Accessibility</Link></li>
              <li><Link to="/legal/disclaimers" onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-primary)')} onMouseLeave={e => (e.currentTarget.style.color = '')}>Disclaimers</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.25rem',
          fontSize: '0.75rem',
          color: 'var(--color-text-muted)',
        }}>
          <div>
            &copy; {year} Inspection Systems Direct. All rights reserved.{' '}
            SCINGULAR™, OVERSCITE™, and ScingOS™ are protected marks of ISDI.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <span>Prototype-Stage Deployment</span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
            <span>Governance Posture: STRICT</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

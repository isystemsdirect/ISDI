import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ShieldCheck, MessageSquare } from 'lucide-react';
import { ISDI_BRAND_NAME } from '@isdi/brand';

interface HeaderProps {
  onOpenGuide: () => void;
}

const NAV_LINKS = [
  { to: '/',                 label: 'Home' },
  { to: '/about',            label: 'About' },
  { to: '/scingular',        label: 'SCINGULAR' },
  { to: '/overscite',        label: 'OVERSCITE' },
  { to: '/preview-request',  label: 'Preview Request' },
  { to: '/contact',          label: 'Contact' },
];

export const Header: React.FC<HeaderProps> = ({ onOpenGuide }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className="site-header"
        style={scrolled ? { background: 'rgba(2,7,11,0.98)' } : undefined}
      >
        <div className="container">
          {/* Brand */}
          <Link to="/" className="header-brand" onClick={closeMenu} aria-label="ISDI Home">
            <ShieldCheck color="var(--color-primary)" size={28} />
            <div className="header-brand-text">
              <span className="header-brand-name">{ISDI_BRAND_NAME}</span>
              <span className="header-brand-sub">Infrastructure Excellence</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="header-nav" aria-label="Primary navigation">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                {label}
              </NavLink>
            ))}

            {/* Scing Guide trigger */}
            <button
              onClick={onOpenGuide}
              aria-label="Open Scing Site Guide"
              style={{
                background: 'none',
                border: '1px solid rgba(212,160,23,0.3)',
                borderRadius: '4px',
                padding: '0.4rem 0.75rem',
                cursor: 'pointer',
                color: 'var(--color-primary)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              <MessageSquare size={14} /> Scing
            </button>

            <a
              href="https://isdi-overscite.web.app"
              className="btn btn-primary"
              style={{ padding: '0.55rem 1.1rem', fontSize: '0.75rem' }}
              target="_blank"
              rel="noopener noreferrer"
              id="header-overscite-preview-cta"
            >
              OVERSCITE Preview
            </a>
          </nav>

          {/* Hamburger */}
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <nav
        className={`mobile-nav-drawer${menuOpen ? ' open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {NAV_LINKS.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) => `mobile-nav-link${isActive ? ' active' : ''}`}
            onClick={closeMenu}
          >
            {label}
          </NavLink>
        ))}

        <div className="mobile-nav-divider" />

        <NavLink to="/faq" className={({ isActive }) => `mobile-nav-link${isActive ? ' active' : ''}`} onClick={closeMenu}>
          FAQ / Support
        </NavLink>

        <button
          onClick={() => { closeMenu(); onOpenGuide(); }}
          className="mobile-nav-link"
          style={{ border: 'none', width: '100%', fontFamily: 'var(--font-main)' }}
        >
          <MessageSquare size={16} style={{ color: 'var(--color-primary)' }} />
          Scing Site Guide
        </button>

        <div className="mobile-nav-cta">
          <a
            href="https://isdi-overscite.web.app"
            className="btn btn-primary w-full"
            style={{ display: 'flex', justifyContent: 'center' }}
            onClick={closeMenu}
            target="_blank"
            rel="noopener noreferrer"
            id="mobile-overscite-preview-cta"
          >
            OVERSCITE Preview
          </a>
        </div>
      </nav>
    </>
  );
};

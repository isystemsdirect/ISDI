import { Link } from 'react-router-dom';
import { ChevronRight, Shield, Eye, Cpu } from 'lucide-react';
import { GovernanceSection } from '../components/GovernanceSection';
import { NvidiaSection }     from '../components/NvidiaSection';
import { MissionSection }    from '../components/MissionSection';
import { RevealSequence, GlassPanel } from '@isdi/ug-uix';

interface HomeProps {
  onOpenGuide: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenGuide }) => {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section
        className="hero cinematic-bg"
        style={{ backgroundImage: 'url(/media/hero.jpeg)' }}
        aria-label="ISDI Hero"
      >
        <div className="cinematic-overlay" />
        <div className="container cinematic-content">
          <RevealSequence className="hero-content">
            <div className="eyebrow">
              <div className="eyebrow-line" />
              <span className="eyebrow-text">Governed Intelligence</span>
            </div>

            <h1 className="hero-title">
              Inspection Systems Direct
            </h1>

            <p className="hero-subtitle">
              SCINGULAR™ — a sovereign governed intelligence architecture for professional
              inspection, field, and infrastructure workflows.
            </p>

            <div className="hero-cta-group">
              <a
                href="https://isdi-overscite.web.app"
                className="btn btn-primary"
                style={{ padding: '1rem 2rem', fontSize: '0.9rem' }}
                target="_blank"
                rel="noopener noreferrer"
                id="home-hero-overscite-cta"
              >
                Enter OVERSCITE Preview <ChevronRight size={18} />
              </a>
              <Link to="/preview-request" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '0.9rem' }}>
                Request Access
              </Link>
            </div>

            <div className="hero-metrics">
              <div>
                <span className="hero-metric-label">Compliance</span>
                <span className="hero-metric-value">Fail-Closed</span>
              </div>
              <div>
                <span className="hero-metric-label">Authority</span>
                <span className="hero-metric-value">Human-Final</span>
              </div>
              <div>
                <span className="hero-metric-label">Environment</span>
                <span className="hero-metric-value">Ultra-Grade</span>
              </div>
              <div>
                <span className="hero-metric-label">Status</span>
                <span className="hero-metric-value">In Development</span>
              </div>
            </div>
          </RevealSequence>
        </div>
      </section>

      {/* ── Platform Highlights ─────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--color-accent)' }}>
        <RevealSequence className="container">
          <div className="text-center mb-md">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              <div className="eyebrow-line" />
              <span className="eyebrow-text">Platform Overview</span>
              <div className="eyebrow-line" />
            </div>
            <h2 style={{ marginBottom: '1rem' }}>Built for Multi-Industry Field Professionals</h2>
            <p className="text-muted max-prose" style={{ margin: '0 auto' }}>
              Inspection Systems Direct delivers governed intelligence tooling for engineering, 
              infrastructure, and professional field operations — designed with discipline, not convenience.
            </p>
          </div>

          <div className="card-grid mt-lg">
            <FeatureCard
              icon={<Shield size={28} color="var(--color-primary)" />}
              title="SCINGULAR™ Architecture"
              desc="A sovereign orchestration layer that keeps intelligence subordinate to human authority at every decision point."
              link="/scingular"
            />
            <FeatureCard
              icon={<Eye size={28} color="var(--color-primary)" />}
              title="OVERSCITE™ Workspace"
              desc="The governed intelligence workspace for multi-industry field operations — asset-aware, reporting-ready."
              link="/overscite"
            />
            <FeatureCard
              icon={<Cpu size={28} color="var(--color-primary)" />}
              title="Compute Alignment"
              desc="Infrastructure-grade compute posture aligned with NVIDIA's AI ecosystem for professional deployment."
              link="/scingular"
            />
          </div>
        </RevealSequence>
      </section>

      {/* ── OVERSCITE Preview Band ─────────────────────────────── */}
      <section
        id="overscite-band"
        className="cinematic-bg"
        style={{ backgroundImage: 'url(/media/overscite.jpeg)', padding: 'clamp(4rem,12vw,8rem) 0' }}
        aria-label="OVERSCITE Preview"
      >
        <div className="cinematic-overlay" />
        <div className="container cinematic-content">
          <GlassPanel style={{ maxWidth: '680px' }}>
            <span className="badge badge-dev" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>
              Preview Environment
            </span>
            <h2 style={{ marginBottom: '1.5rem' }}>
              OVERSCITE<sup style={{ fontSize: '0.4em', color: 'var(--color-primary)' }}>™</sup>
            </h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: '1.7', fontSize: '1rem' }}>
              The premier intelligence workspace for multi-industry field operations.
              Asset-aware, client-focused, and reporting-ready.
              Experience a demo-safe preview of the future of field-operational intelligence.
            </p>
            <div className="flex gap-md flex-wrap">
              <a
                href="https://isdi-overscite.web.app"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                id="home-overscite-band-cta"
              >
                Launch Preview
              </a>
              <button onClick={onOpenGuide} className="btn btn-outline">
                Ask Scing
              </button>
            </div>
          </GlassPanel>
        </div>
      </section>

      {/* ── Mission ─────────────────────────────────────────────── */}
      <MissionSection />

      {/* ── SCINGULAR Architecture ──────────────────────────────── */}
      <section id="scingular" className="section" style={{ background: 'linear-gradient(180deg, var(--color-accent) 0%, var(--color-background) 100%)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: 'clamp(2rem,6vw,5rem)', alignItems: 'center' }}>
            <div>
              <div className="eyebrow">
                <div className="eyebrow-line" />
                <span className="eyebrow-text">Architecture</span>
              </div>
              <h2 style={{ marginBottom: '1.5rem' }}>A Sovereign Architecture</h2>
              <p className="text-muted" style={{ lineHeight: '1.8', marginBottom: '1.5rem', fontSize: '1rem' }}>
                SCINGULAR is not just an AI — it is a governed orchestration layer designed to empower
                multi-industry field and infrastructure professionals. From field sensors to executive dashboards,
                intelligence remains a tool of human authority.
              </p>
              <ul style={{ display: 'grid', gap: '0.9rem' }}>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '5px', height: '5px', background: 'var(--color-primary)', borderRadius: '50%', marginTop: '0.55rem', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)' }}><strong>Scing™:</strong> the voice-first interface presence that guides the user through governed intelligence workflows.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '5px', height: '5px', background: 'var(--color-primary)', borderRadius: '50%', marginTop: '0.55rem', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)' }}><strong>LARI™:</strong> the reasoning federation that supports analysis, planning, retrieval, and structured decision support.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '5px', height: '5px', background: 'var(--color-primary)', borderRadius: '50%', marginTop: '0.55rem', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)' }}><strong>BANE™:</strong> the integrity and policy layer that preserves boundaries, traceability, and human-governed control.</span>
                </li>
              </ul>
              <div className="mt-md">
                <Link to="/scingular" className="btn btn-outline">Explore Architecture</Link>
              </div>
            </div>

            {/* Architecture Ring Visual */}
            <GlassPanel style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.65rem', color: 'var(--color-primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '2rem' }}>
                Technical Core
              </div>
              <ArchRingDiagram />
              <div style={{ fontWeight: 800, fontSize: '1.1rem', marginTop: '2rem', letterSpacing: '0.05em' }}>SCINGULAR Prime</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', marginTop: '0.4rem', letterSpacing: '0.1em' }}>
                In Development — Prototype Stage
              </div>
            </GlassPanel>
          </div>
        </div>
      </section>

      {/* ── Governance ─────────────────────────────────────────── */}
      <GovernanceSection />

      {/* ── NVIDIA Alignment ───────────────────────────────────── */}
      <NvidiaSection />

      {/* ── Contact CTA ────────────────────────────────────────── */}
      <section id="contact-cta" className="section text-center" style={{ background: 'linear-gradient(to bottom, #02070B, #061A2F)' }}>
        <div className="container">
          <div className="max-prose" style={{ margin: '0 auto' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              <div className="eyebrow-line" />
              <span className="eyebrow-text">Partnership</span>
              <div className="eyebrow-line" />
            </div>
            <h2 style={{ marginBottom: '1.25rem' }}>Pioneer the Future</h2>
            <p className="text-muted mb-lg">
              Join the vanguard of infrastructure intelligence. We are seeking strategic partners to
              deploy SCINGULAR in high-impact professional environments.
            </p>
            <div className="flex-center gap-md flex-wrap">
              <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '0.9rem' }}>
                Partnership Inquiry
              </Link>
              <Link to="/preview-request" className="btn btn-ghost" style={{ padding: '1rem 2.5rem', fontSize: '0.9rem' }}>
                Request Preview Access
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const FeatureCard = ({ icon, title, desc, link }: { icon: React.ReactNode; title: string; desc: string; link: string }) => (
  <Link to={link} style={{ textDecoration: 'none' }}>
    <div className="feature-card" style={{ height: '100%' }}>
      <div style={{ marginBottom: '1.25rem' }}>{icon}</div>
      <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>{title}</h3>
      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>{desc}</p>
    </div>
  </Link>
);

const ArchRingDiagram = () => (
  <div style={{ position: 'relative', width: '180px', height: '180px', margin: '0 auto' }}>
    <div style={{ position: 'absolute', inset: 0, border: '3px solid var(--color-primary)', borderRadius: '50%', boxShadow: '0 0 40px rgba(212,160,23,0.2)' }} />
    <div style={{ position: 'absolute', inset: '-20px', border: '1px solid rgba(14,59,46,0.6)', borderRadius: '50%' }} />
    <div style={{ position: 'absolute', inset: '-40px', border: '1px solid rgba(212,160,23,0.1)', borderRadius: '50%', animation: 'rotate 20s linear infinite' }} />
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Shield color="var(--color-primary)" size={40} />
    </div>
  </div>
);

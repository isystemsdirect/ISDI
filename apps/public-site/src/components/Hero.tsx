import { ChevronRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="cinematic-bg" style={{ 
      backgroundImage: 'url(/media/hero.jpeg)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '100px'
    }}>
      <div className="cinematic-overlay"></div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '900px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ height: '1px', width: '60px', background: 'var(--color-primary)' }}></div>
            <span style={{ 
              color: 'var(--color-primary)', 
              fontSize: '0.8rem', 
              fontWeight: 800, 
              letterSpacing: '0.4em',
              textTransform: 'uppercase'
            }}>
              Governed Intelligence
            </span>
          </div>
          <h1 style={{ fontSize: '5rem', lineHeight: 1, marginBottom: '2.5rem', fontWeight: 900 }}>
            SCINGULAR<span style={{ verticalAlign: 'super', fontSize: '0.3em', color: 'var(--color-primary)' }}>™</span>
          </h1>
          <p style={{ fontSize: '1.6rem', color: 'var(--color-text)', marginBottom: '3.5rem', maxWidth: '700px', lineHeight: '1.4', fontWeight: 300 }}>
            Orchestrating professional inspection, field, and infrastructure workflows with sovereign authority and BANE-governed precision.
          </p>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="/preview" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1.2rem 2.5rem', fontSize: '1rem' }}>
              Enter OVERSCITE Preview <ChevronRight size={20} />
            </a>
            <a href="#scingular" className="btn btn-outline" style={{ padding: '1.2rem 2.5rem', fontSize: '1rem' }}>
              Explore Architecture
            </a>
          </div>
          <div style={{ marginTop: '5rem', display: 'flex', gap: '3rem' }}>
            <HeroMetric label="Compliance" value="Fail-Closed" />
            <HeroMetric label="Authority" value="Human-Final" />
            <HeroMetric label="Environment" value="Ultra-Grade" />
          </div>
        </div>
      </div>
    </section>
  );
};

const HeroMetric = ({ label, value }: { label: string, value: string }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
    <span style={{ fontSize: '0.6rem', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 800 }}>{label}</span>
    <span style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-text)' }}>{value}</span>
  </div>
);

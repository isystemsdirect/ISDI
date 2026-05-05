import { Shield, Target, Users } from 'lucide-react';

export const MissionSection = () => {
  return (
    <section id="mission" style={{ padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        right: 0, 
        width: '40%', 
        height: '100%', 
        background: 'radial-gradient(circle at 100% 50%, var(--color-secondary) 0%, transparent 100%)',
        opacity: 0.1,
        pointerEvents: 'none'
      }}></div>
      
      <div className="container">
        <div style={{ marginBottom: '6rem' }}>
          <span style={{ color: 'var(--color-primary)', fontWeight: 800, letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.8rem', display: 'block', marginBottom: '1rem' }}>Our Foundation</span>
          <h2 style={{ fontSize: '3rem', fontWeight: 900 }}>Infrastructure Mastery</h2>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '3rem' 
        }}>
          <MissionCard 
            icon={<Target size={32} />} 
            title="Strategic Inspection" 
            description="Infrastructure-grade intelligence tailored for high-stakes field inspection environments."
            image="/media/reporting.jpeg"
          />
          <MissionCard 
            icon={<Shield size={32} />} 
            title="Evidence Foundation" 
            description="Workflows built on a foundation of cryptographic evidence and verifiable truth states."
            image="/media/hero.jpeg" // Reusing hero for foundation context
          />
          <MissionCard 
            icon={<Users size={32} />} 
            title="Human Accountability" 
            description="AI that augments and serves human decision-makers, ensuring total accountability."
            image="/media/overscite.jpeg"
          />
        </div>
      </div>
    </section>
  );
};

const MissionCard = ({ icon, title, description, image }: { icon: any, title: string, description: string, image: string }) => (
  <div className="glass-panel" style={{ padding: '0', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
    <div style={{ height: '200px', backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, var(--color-surface))' }}></div>
      <div style={{ position: 'absolute', bottom: '1.5rem', left: '2rem', color: 'var(--color-primary)' }}>{icon}</div>
    </div>
    <div style={{ padding: '2.5rem' }}>
      <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 800 }}>{title}</h3>
      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>{description}</p>
    </div>
  </div>
);

import { Cpu, Zap, Layers, Network } from 'lucide-react';

export const NvidiaSection = () => {
  return (
    <section style={{ padding: '120px 0', backgroundColor: '#02070B', borderTop: '1px solid rgba(118, 185, 0, 0.1)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '5rem', flexWrap: 'wrap', gap: '2rem' }}>
          <div style={{ maxWidth: '600px' }}>
            <span style={{ color: 'var(--color-nvidia)', fontWeight: 800, letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.8rem', display: 'block', marginBottom: '1rem' }}>Infrastructure Readiness</span>
            <h2 style={{ fontSize: '3rem', fontWeight: 900 }}>Compute-Aligned Intelligence</h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--color-nvidia)' }}></div>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-nvidia)', letterSpacing: '0.1em' }}>NVIDIA INCEPTION ALIGNMENT</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <ComputeCard 
            icon={<Cpu size={32} />}
            title="GPU-Accelerated Workloads"
            description="Architected for high-performance tensor processing and parallel execution on advanced compute hardware."
          />
          <ComputeCard 
            icon={<Zap size={32} />}
            title="Edge Inference Capability"
            description="Designed for low-latency intelligence orchestration at the edge for real-time field data analysis."
          />
          <ComputeCard 
            icon={<Network size={32} />}
            title="Multimodal Processing"
            description="Ready for large-scale multimodal data ingestion, including high-fidelity imagery and sensor streams."
          />
          <ComputeCard 
            icon={<Layers size={32} />}
            title="Infrastructure Scaling"
            description="Seamlessly scales from private local compute to massive cloud-based GPU clusters."
          />
        </div>

        <div style={{ marginTop: '5rem', padding: '2rem', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', textAlign: 'center' }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
            <strong>Technical Note:</strong> SCINGULAR architecture is aligned with NVIDIA’s infrastructure roadmap to ensure professional-grade AI readiness. 
            This reflects technical compatibility and strategic compute-alignment. No claim of official partnership, sponsorship, or certification is made.
          </p>
        </div>
      </div>
    </section>
  );
};

const ComputeCard = ({ icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="glass-panel" style={{ padding: '2.5rem', background: 'rgba(118, 185, 0, 0.03)', border: '1px solid rgba(118, 185, 0, 0.1)' }}>
    <div style={{ color: 'var(--color-nvidia)', marginBottom: '1.5rem' }}>{icon}</div>
    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '1rem' }}>{title}</h3>
    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>{description}</p>
  </div>
);

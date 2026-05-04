

export const DemoHeader = ({ title }: { title: string }) => (
  <header style={{ borderBottom: '1px solid #ccc', paddingBottom: '1rem', marginBottom: '1rem' }}>
    <h1>{title}</h1>
    <span style={{ background: '#f0ad4e', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem' }}>Demo Mode</span>
  </header>
);

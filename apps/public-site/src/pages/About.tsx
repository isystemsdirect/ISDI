import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Users, Shield, Award } from 'lucide-react';
import { RevealSequence, GlassPanel } from '@isdi/ug-uix';

export const About: React.FC = () => (
  <>
    <section className="page-hero">
      <div className="container cinematic-content">
        <RevealSequence delay={100}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span className="breadcrumb-sep">/</span><span>About</span>
          </nav>
          <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Governance</span></div>
          <h1 style={{ marginBottom: '1.25rem' }}>Our Mission</h1>
          <p className="text-muted max-prose" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
            Advancing the infrastructure inspection industry through governed intelligence, 
            accountable automation, and uncompromising evidentiary integrity.
          </p>
        </RevealSequence>
      </div>
    </section>

    <section className="section" style={{ background: 'var(--color-background)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,450px),1fr))', gap: 'clamp(2rem,6vw,5rem)', alignItems: 'center' }}>
          <RevealSequence delay={200}>
            <div>
              <div className="eyebrow"><div className="eyebrow-line" /><span className="eyebrow-text">Heritage</span></div>
              <h2 style={{ marginBottom: '1.5rem' }}>Pioneering Infrastructure Intelligence</h2>
              <p className="text-muted" style={{ lineHeight: '1.8', marginBottom: '1.25rem' }}>
                ISDI was founded on the belief that the next generation of infrastructure management 
                requires more than just data—it requires **governed intelligence**.
              </p>
              <p className="text-muted" style={{ lineHeight: '1.8' }}>
                We have moved beyond the "move fast and break things" era of technology. In the world 
                of critical infrastructure, failure is not an option. Our systems are built to be 
                unfailingly reliable, auditable, and human-anchored.
              </p>
            </div>
          </RevealSequence>

          <RevealSequence delay={400}>
            <GlassPanel className="p-10" style={{ borderLeft: '4px solid var(--color-primary)' }}>
              <Target size={32} color="var(--color-primary)" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>The ISDI Standard</h3>
              <p className="text-muted text-sm" style={{ lineHeight: '1.7' }}>
                We define Infrastructure Excellence as the intersection of technical precision and 
                governance-first architecture. Every product we build must satisfy the most 
                stringent professional standards for safety and accountability.
              </p>
            </GlassPanel>
          </RevealSequence>
        </div>
      </div>
    </section>

    <section className="section" style={{ background: 'var(--color-accent)' }}>
      <div className="container">
        <div className="eyebrow" style={{ justifyContent: 'center' }}><div className="eyebrow-line" /><span className="eyebrow-text">Values</span><div className="eyebrow-line" /></div>
        <h2 className="text-center" style={{ marginBottom: '3.5rem' }}>Core Pillars</h2>

        <div className="card-grid">
          {[
            { icon: <Users />, title: 'Human-in-the-Loop', desc: 'We believe intelligence should augment professional expertise, not replace human accountability.' },
            { icon: <Shield />, title: 'Governed by Design', desc: 'Constraints are baked into our architecture via the BANE layer, ensuring system integrity.' },
            { icon: <Award />, title: 'Evidentiary Excellence', desc: 'All data capture and analysis is auditable and traceable back to its original source context.' }
          ].map((item, i) => (
            <RevealSequence key={i} delay={100 + (i * 100)}>
              <GlassPanel className="p-8 text-center h-full">
                <div className="text-primary mb-md flex-center">{React.cloneElement(item.icon as React.ReactElement, { size: 28 })}</div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p className="text-muted text-sm" style={{ lineHeight: '1.6' }}>{item.desc}</p>
              </GlassPanel>
            </RevealSequence>
          ))}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <RevealSequence delay={200}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>Join the Evolution</h2>
            <p className="text-muted mb-lg" style={{ lineHeight: '1.8' }}>
              We are actively expanding our partner ecosystem and technical leadership. If you are a 
              professional in the infrastructure space or a developer interested in governed AI, 
              we invite you to connect.
            </p>
            <div className="flex-center gap-md">
              <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>Get in Touch</Link>
            </div>
          </div>
        </RevealSequence>
      </div>
    </section>
  </>
);

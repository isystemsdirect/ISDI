import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ExternalLink, Shield, Info, HelpCircle, BookOpen, Mail, ChevronRight } from 'lucide-react';

interface ScingGuidePanelProps {
  active: boolean;
  onClose: () => void;
}

interface KnowledgeEntry {
  key: string;
  response: string;
}

// Public-safe static knowledge — no live Prime Intelligence, no operational data.
const STATIC_KNOWLEDGE: Record<string, KnowledgeEntry> = {
  scingular: {
    key: 'scingular',
    response:
      'SCINGULAR™ is the governed orchestration architecture developed by Inspection Systems Direct. ' +
      'It operates as a sovereign intelligence layer designed to support multi-industry field and ' +
      'infrastructure professionals. Intelligence remains a tool of human authority — it does not ' +
      'replace accountable human judgment. The architecture includes ScingBFI (the unified intelligence ' +
      'stack), LARI (the reasoning engine), BANE (the constraint and integrity enforcement layer), ' +
      'and ZTI (Zero-Trust Intelligence posture). All guidance from SCINGULAR is human-reviewed and auditable.',
  },
  overscite: {
    key: 'overscite',
    response:
      'OVERSCITE™ is the governed intelligence workspace for multi-industry field operations. ' +
      'It is asset-aware, client-focused, and reporting-ready. OVERSCITE provides field ' +
      'professionals with a governed interface for managing assets, field intelligence, and compliance ' +
      'workflows. The Preview environment is a demo-safe, isolated demonstration — it does not ' +
      'contain live customer, asset, or field records.',
  },
  governance: {
    key: 'governance',
    response:
      'ISDI governance is built on the principle of human-final authority. BANE (the constraint ' +
      'and integrity enforcement layer) ensures the system never exceeds its authorized boundaries. ' +
      'All high-impact conclusions are human-reviewable. Safety, compliance, and evidentiary chains ' +
      'are fully inspectable. SCINGULAR is designed to augment — not replace — licensed, certified, ' +
      'and accountable professionals.',
  },
  nvidia: {
    key: 'nvidia',
    response:
      'ISDI is aligned with NVIDIA\'s compute and infrastructure ecosystem. This alignment relates ' +
      'to compute architecture, AI accelerated infrastructure, and the NVIDIA Inception program. ' +
      'This does not represent an NVIDIA partnership, endorsement, certification, sponsorship, or ' +
      'commercial agreement. References to NVIDIA on this site are compute-infrastructure alignment ' +
      'statements only.',
  },
};

export const ScingGuidePanel: React.FC<ScingGuidePanelProps> = ({ active, onClose }) => {
  const [activeResponse, setActiveResponse] = useState<KnowledgeEntry | null>(null);

  const handleAction = (key: string) => {
    setActiveResponse(STATIC_KNOWLEDGE[key] ?? null);
  };

  const handleClose = () => {
    setActiveResponse(null);
    onClose();
  };

  return (
    <div
      className={`scing-guide-panel glass-panel${active ? ' active' : ''}`}
      style={{ padding: 'clamp(1.25rem,4vw,2rem)' }}
      role="dialog"
      aria-label="Scing Site Guide"
      aria-hidden={!active}
    >
      {/* Header */}
      <div className="flex-between" style={{ marginBottom: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <Shield color="var(--color-primary)" size={20} />
          <span style={{ fontWeight: 800, letterSpacing: '0.1em', fontSize: '0.8rem', textTransform: 'uppercase' }}>
            Scing Site Guide
          </span>
        </div>
        <button
          onClick={handleClose}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)', padding: '4px', borderRadius: '4px' }}
          aria-label="Close Scing Guide"
        >
          <X size={18} />
        </button>
      </div>

      {/* Intro */}
      <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: '1.5', marginBottom: '1.25rem' }}>
        I am Scing, the human-facing interface for the SCINGULAR architecture.
        How can I assist your exploration of Inspection Systems Direct?
      </p>

      {/* Active knowledge response */}
      {activeResponse && (
        <div className="guide-response">
          <p style={{ fontSize: '0.82rem', lineHeight: '1.65' }}>{activeResponse.response}</p>
          <button
            onClick={() => setActiveResponse(null)}
            style={{ marginTop: '0.75rem', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-primary)', fontSize: '0.75rem', fontWeight: 700, padding: 0, fontFamily: 'var(--font-main)' }}
          >
            ← Back to guide
          </button>
        </div>
      )}

      {/* Quick Actions */}
      {!activeResponse && (
        <div style={{ display: 'grid', gap: '0.6rem' }}>
          <GuideActionBtn
            icon={<Info size={15} />}
            label="What is SCINGULAR?"
            onClick={() => handleAction('scingular')}
          />
          <GuideActionBtn
            icon={<BookOpen size={15} />}
            label="OVERSCITE Overview"
            onClick={() => handleAction('overscite')}
          />
          <GuideActionBtn
            icon={<Shield size={15} />}
            label="Governance & BANE"
            onClick={() => handleAction('governance')}
          />
          <GuideActionBtn
            icon={<HelpCircle size={15} />}
            label="NVIDIA Alignment"
            onClick={() => handleAction('nvidia')}
          />

          <hr className="hr-dim" style={{ margin: '0.5rem 0' }} />

          {/* Navigation shortcuts */}
          <Link
            to="/preview-request"
            onClick={handleClose}
            className="guide-action-btn"
            style={{ display: 'flex', textDecoration: 'none' }}
          >
            <ChevronRight size={15} style={{ color: 'var(--color-primary)' }} />
            <span>Request Preview Access</span>
          </Link>
          <Link
            to="/contact"
            onClick={handleClose}
            className="guide-action-btn"
            style={{ display: 'flex', textDecoration: 'none' }}
          >
            <Mail size={15} style={{ color: 'var(--color-primary)' }} />
            <span>Partnership Inquiry</span>
          </Link>

          <a
            href="https://isdi-overscite.web.app"
            className="btn btn-primary"
            style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '0.5rem' }}
            target="_blank"
            rel="noopener noreferrer"
            id="scing-panel-overscite-link"
          >
            OVERSCITE Preview <ExternalLink size={14} />
          </a>
        </div>
      )}

      {/* Trust notice */}
      <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.07)', fontSize: '0.68rem', color: 'var(--color-text-muted)' }}>
        <strong style={{ color: 'rgba(212,160,23,0.7)' }}>Trust Notice:</strong>{' '}
        No live Prime Intelligence execution is active on this public surface.
        All guidance is based on public-safe static knowledge only.
      </div>
    </div>
  );
};

const GuideActionBtn = ({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) => (
  <button className="guide-action-btn" onClick={onClick} type="button">
    <span style={{ color: 'var(--color-primary)', flexShrink: 0 }}>{icon}</span>
    {label}
  </button>
);

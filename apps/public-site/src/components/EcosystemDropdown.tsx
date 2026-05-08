import { User, Shield, Download, Play, Settings, HelpCircle, Globe, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GlassPanel } from '@isdi/ug-uix';

export const EcosystemDropdown: React.FC = () => {
  return (
    <div className="ecosystem-dropdown-wrapper">
      <button className="utility-link">
        <Globe size={12} />
        Ecosystem Access
      </button>
      
      <div className="ecosystem-dropdown-menu">
        <GlassPanel 
          style={{ 
            padding: '1.25rem', 
            borderTop: '2px solid var(--color-primary)',
            background: 'rgba(2, 7, 11, 0.95)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.8)'
          }}
        >
          {/* ISDI Site Account */}
          <div className="ecosystem-section">
            <span className="ecosystem-section-title">ISDI Site Account</span>
            <Link to="/contact?intent=demo" className="ecosystem-item">
              <div className="ecosystem-item-icon-box">
                <Play className="ecosystem-item-icon" size={16} />
              </div>
              <div className="ecosystem-item-text">
                <span className="ecosystem-item-label">Access Demos</span>
                <span className="ecosystem-item-desc">Public interface previews</span>
              </div>
              <ChevronRight className="ecosystem-item-arrow" size={14} />
            </Link>
            <Link to="/contact?intent=downloads" className="ecosystem-item">
              <div className="ecosystem-item-icon-box">
                <Download className="ecosystem-item-icon" size={16} />
              </div>
              <div className="ecosystem-item-text">
                <span className="ecosystem-item-label">Resource Center</span>
                <span className="ecosystem-item-desc">Brochures & Whitepapers</span>
              </div>
              <ChevronRight className="ecosystem-item-arrow" size={14} />
            </Link>
          </div>

          <div className="hr-dim" style={{ margin: '1rem 0' }} />

          {/* ARC Identity */}
          <div className="ecosystem-section">
            <span className="ecosystem-section-title">ARC Identity (Accountable)</span>
            <Link to="/contact?intent=arc-onboarding" className="ecosystem-item arc-highlight">
              <div className="ecosystem-item-icon-box arc-box">
                <Shield className="ecosystem-item-icon" size={16} />
              </div>
              <div className="ecosystem-item-text">
                <span className="ecosystem-item-label">ARC Onboarding</span>
                <span className="ecosystem-item-desc">Verified human identity</span>
              </div>
              <ChevronRight className="ecosystem-item-arrow" size={14} />
            </Link>
            <Link to="/contact?intent=arc-link" className="ecosystem-item">
              <div className="ecosystem-item-icon-box">
                <User className="ecosystem-item-icon" size={16} />
              </div>
              <div className="ecosystem-item-text">
                <span className="ecosystem-item-label">Identity Linking</span>
                <span className="ecosystem-item-desc">Consolidate site permissions</span>
              </div>
              <ChevronRight className="ecosystem-item-arrow" size={14} />
            </Link>
          </div>

          <div className="hr-dim" style={{ margin: '1rem 0' }} />

          {/* Global Support */}
          <div className="ecosystem-section" style={{ marginBottom: 0 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              <Link to="/faq" className="utility-link" style={{ fontSize: '0.7rem', padding: '0.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '4px', justifyContent: 'center' }}>
                <HelpCircle size={12} /> Help
              </Link>
              <Link to="/contact" className="utility-link" style={{ fontSize: '0.7rem', padding: '0.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '4px', justifyContent: 'center' }}>
                <Settings size={12} /> Settings
              </Link>
            </div>
          </div>
        </GlassPanel>
      </div>
    </div>
  );
};

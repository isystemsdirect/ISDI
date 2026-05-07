import React from 'react';
import { User, Shield, Download, Play, Settings, HelpCircle, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export const EcosystemDropdown: React.FC = () => {
  return (
    <div className="ecosystem-dropdown-wrapper">
      <button className="utility-link">
        <Globe size={12} />
        Ecosystem Access
      </button>
      
      <div className="ecosystem-dropdown-menu">
        
        {/* ISDI Site Account */}
        <div className="ecosystem-section">
          <span className="ecosystem-section-title">ISDI Site Account</span>
          <Link to="/contact?intent=demo" className="ecosystem-item">
            <Play className="ecosystem-item-icon" size={18} />
            <div className="ecosystem-item-text">
              <span className="ecosystem-item-label">Access Demos</span>
              <span className="ecosystem-item-desc">Public interface previews</span>
            </div>
          </Link>
          <Link to="/contact?intent=downloads" className="ecosystem-item">
            <Download className="ecosystem-item-icon" size={18} />
            <div className="ecosystem-item-text">
              <span className="ecosystem-item-label">Resource Center</span>
              <span className="ecosystem-item-desc">Brochures & Whitepapers</span>
            </div>
          </Link>
        </div>

        {/* ARC Identity */}
        <div className="ecosystem-section">
          <span className="ecosystem-section-title">ARC Identity (Accountable)</span>
          <Link to="/contact?intent=arc-onboarding" className="ecosystem-item">
            <Shield className="ecosystem-item-icon" size={18} />
            <div className="ecosystem-item-text">
              <span className="ecosystem-item-label">ARC Onboarding</span>
              <span className="ecosystem-item-desc">Verified human identity</span>
            </div>
          </Link>
          <Link to="/contact?intent=arc-link" className="ecosystem-item">
            <User className="ecosystem-item-icon" size={18} />
            <div className="ecosystem-item-text">
              <span className="ecosystem-item-label">Identity Linking</span>
              <span className="ecosystem-item-desc">Consolidate site permissions</span>
            </div>
          </Link>
        </div>

        {/* Global Support */}
        <div className="ecosystem-section">
          <span className="ecosystem-section-title">Global Support</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
            <Link to="/faq" className="utility-link" style={{ fontSize: '0.75rem', padding: '0.25rem' }}>
              <HelpCircle size={14} /> Help
            </Link>
            <Link to="/contact" className="utility-link" style={{ fontSize: '0.75rem', padding: '0.25rem' }}>
              <Settings size={14} /> Settings
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

import React, { useEffect, useState, useCallback } from 'react';
import { ShieldAlert, ExternalLink, Cpu, Mail, FileText, AlertTriangle, Image as ImageIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface ContextMenuState {
  visible: boolean;
  x: number;
  y: number;
}

export const BaneContextGate: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [contextState, setContextState] = useState<ContextMenuState>({
    visible: false,
    x: 0,
    y: 0,
  });

  const isSensitiveRoute = location.pathname === '/nvidia-review';

  const handleContextMenu = useCallback((e: MouseEvent) => {
    e.preventDefault();
    
    // Calculate position to prevent menu from going off-screen
    const menuWidth = 280;
    const menuHeight = 400; // Increased for more items
    
    let x = e.clientX;
    let y = e.clientY;
    
    if (x + menuWidth > window.innerWidth) {
      x = window.innerWidth - menuWidth - 10;
    }
    
    if (y + menuHeight > window.innerHeight) {
      y = window.innerHeight - menuHeight - 10;
    }

    setContextState({
      visible: true,
      x,
      y,
    });
  }, []);

  const handleClick = useCallback(() => {
    if (contextState.visible) {
      setContextState(prev => ({ ...prev, visible: false }));
    }
  }, [contextState.visible]);

  const handleScroll = useCallback(() => {
    if (contextState.visible) {
      setContextState(prev => ({ ...prev, visible: false }));
    }
  }, [contextState.visible]);

  useEffect(() => {
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('click', handleClick);
    document.addEventListener('scroll', handleScroll, { capture: true });

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('scroll', handleScroll, { capture: true });
    };
  }, [handleContextMenu, handleClick, handleScroll]);

  const closeMenu = () => setContextState(prev => ({...prev, visible: false}));

  return (
    <>
      {children}
      {contextState.visible && (
        <div 
          className="bane-context-gate"
          style={{ top: contextState.y, left: contextState.x }}
          onClick={(e) => e.stopPropagation()} 
        >
          <div className="bane-context-header">
            <ShieldAlert size={14} color="var(--color-primary)" />
            <span className="bane-context-header-text">
              {isSensitiveRoute ? 'BANE Restricted Gate' : 'BANE Context Gate'}
            </span>
          </div>
          
          <a href="https://isdi-overscite.web.app" target="_blank" rel="noopener noreferrer" className="bane-context-item">
            <ExternalLink size={16} />
            Enter OVERSCITE Preview
          </a>
          
          <Link to="/scingular" className="bane-context-item" onClick={closeMenu}>
            <Cpu size={16} />
            View SCINGULAR Architecture
          </Link>

          <div className="bane-context-divider"></div>

          <Link to="/contact" className="bane-context-item" onClick={closeMenu}>
            <Mail size={16} />
            Contact ISDI
          </Link>

          <Link to="/legal/disclaimers" className="bane-context-item" onClick={closeMenu}>
            <FileText size={16} />
            View Disclosure Notice
          </Link>

          <Link to="/contact?subject=report" className="bane-context-item" onClick={closeMenu}>
            <AlertTriangle size={16} />
            Report Issue
          </Link>

          <Link to="/contact?subject=media" className="bane-context-item" onClick={closeMenu}>
            <ImageIcon size={16} />
            Request Media Authorization
          </Link>

          <div className="bane-context-divider"></div>
          
          <div className="bane-context-status">
            <span>Enforcement Posture</span>
            <span className="bane-context-status-badge">
              {isSensitiveRoute ? 'MAXIMUM' : 'STRICT'}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

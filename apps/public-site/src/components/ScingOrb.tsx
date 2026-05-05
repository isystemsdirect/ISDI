import { Shield } from 'lucide-react';

interface ScingOrbProps {
  onClick: () => void;
}

export const ScingOrb: React.FC<ScingOrbProps> = ({ onClick }) => (
  <button
    className="scing-orb"
    onClick={onClick}
    aria-label="Open Scing Site Guide"
    id="scing-orb-btn"
  >
    <div className="scing-orb-ring" aria-hidden="true" />
    <Shield color="#fff" size={24} />
  </button>
);

import React from 'react';
import './side-nav-toggle.scss';

interface SideNavToggleButtonProps {
  toggle: () => void;
  isVisible: boolean;
}

const SideNavToggle: React.FC<SideNavToggleButtonProps> = ({
  toggle,
  isVisible,
}) => {
  return (
    <button
      className="side-nav-toggle"
      onClick={toggle}
      aria-label={`Toggle Side Navigation, ${
        isVisible ? 'expanded' : 'collapsed'
      }`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px">
        <path d="M400-280v-400l200 200-200 200Z" />
      </svg>
    </button>
  );
};

export default SideNavToggle;

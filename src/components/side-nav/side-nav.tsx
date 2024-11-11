import React from 'react';
import './side-nav.scss';

const SideNav: React.FC = () => {
  return (
    <div className="MagentaA11y__side-nav">
      <md-text-button trailing-icon>
        Open
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px">
          <path d="M480-360 280-560h400L480-360Z" />
        </svg>
      </md-text-button>

      <md-filled-button>Collapse All</md-filled-button>
    </div>
  );
};

export default SideNav;

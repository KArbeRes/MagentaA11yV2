import React from 'react';
import navItems from '../../content.json';
import './side-nav.scss';

const SideNav: React.FC = () => {
  return (
    <div className="side-nav">
      {navItems.map((item) => (
        <md-outlined-button
          key={item}
          className="side-nav-button"
          onClick={() => console.log(`Navigating to ${item}`)}>
          {item}
        </md-outlined-button>
      ))}
    </div>
  );
};

export default SideNav;

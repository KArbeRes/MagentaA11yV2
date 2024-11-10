import React from 'react';
import { NavLink } from 'react-router-dom';
import './top-nav.scss';
import { TopNavProps } from './top-nav.types';

const TopNav: React.FC<TopNavProps> = ({ navItems }) => {
  return (
    <div className="MagentaA11y__top-nav">
      <div className="MagentaA11y__brand">
        <NavLink to="/home" className="MagentaA11y__brand--name">
          A11y
        </NavLink>
      </div>
      <div className="MagentaA11y__nav-items">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.href}
            className="MagentaA11y__nav-items--link"
            aria-label={`Navigate to ${item.label}`}>
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default TopNav;

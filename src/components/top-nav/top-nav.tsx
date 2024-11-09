import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './top-nav.scss';
import { TopNavProps } from './top-nav.types';

const TopNav: React.FC<TopNavProps> = ({ navItems }) => {
  return (
    <div className="top-nav">
      <div className="brand">
        <NavLink to="/home" className="brand--name">
          A11y
        </NavLink>
      </div>
      <div className="nav-items">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.href}
            className="nav-items--link"
            aria-label={`Navigate to ${item.label}`}>
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default TopNav;

import React from "react";
import { NavLink } from "react-router-dom";
import { TopNavProps } from "../nav.types";
import "./top-nav.scss";

const TopNav: React.FC<TopNavProps> = ({ navItems }) => {
  return (
    <div className="MagentaA11y__top-nav">
      {/* Brand Section */}
      <div className="MagentaA11y__brand">
        <NavLink to="/home" className="MagentaA11y__brand--name">
          A11y
        </NavLink>
      </div>

      <nav aria-label="Top navigation">
        <ul className="MagentaA11y__nav-items">
          {navItems.map((item, index) => (
            <li key={index} className="MagentaA11y__nav-items--item">
              <NavLink
                to={item.href}
                className="MagentaA11y__nav-items--link"
                aria-label={`Navigate to ${item.label}`}
              >
                {item.icon && (
                  <span className="MagentaA11y__nav-items--icon">
                    {item.icon}
                  </span>
                )}
                <span className="MagentaA11y__nav-items--label">
                  {item.label}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default TopNav;

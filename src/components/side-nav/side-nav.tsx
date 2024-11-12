import React from "react";
import { NavLink } from "react-router-dom";
import contentData from "../../shared/content.json";
import "./side-nav.scss";

const SideNav: React.FC = () => {
  const renderNavItems = (items: any[], isTopLevel = false) => (
    <ul
      className={
        isTopLevel
          ? "MagentaA11y__side-nav--list"
          : "MagentaA11y__side-nav--sub-list"
      }
    >
      {items.map((item) => (
        <li
          key={item.name}
          className={
            isTopLevel
              ? "MagentaA11y__side-nav--item"
              : "MagentaA11y__side-nav--sub-item"
          }
        >
          <NavLink
            to={item.name}
            className={`MagentaA11y__side-nav--link ${
              !isTopLevel ? "MagentaA11y__side-nav--sub-link" : ""
            }`}
          >
            {item.label}
            {/* Only render SVG icon for top-level items */}
            {isTopLevel && (
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
              >
                <path d="M480-360 280-560h400L480-360Z" />
              </svg>
            )}
          </NavLink>
          {/* Recursively render child directories, if any */}
          {item.children &&
            item.children.length > 0 &&
            renderNavItems(item.children, false)}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="MagentaA11y__side-nav">
      {renderNavItems(contentData, true)}
      <md-filled-button>Collapse All</md-filled-button>
    </div>
  );
};

export default SideNav;

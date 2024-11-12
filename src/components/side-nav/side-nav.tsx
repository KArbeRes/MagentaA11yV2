import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import contentData from "../../shared/content.json";
import "./side-nav.scss";

interface NavItem {
  label: string;
  name: string;
  type?: "file";
  children?: NavItem[];
}

const SideNav: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname.includes(path);

  const renderNavItems = (
    items: NavItem[],
    parentPath = "", // Add parentPath as an argument
    parentActive = false,
    isTopLevel = false
  ) => (
    <ul
      className={
        isTopLevel
          ? "MagentaA11y__side-nav--list"
          : "MagentaA11y__side-nav--sub-list"
      }
    >
      {items.map((item) => {
        const fullPath = `${parentPath}/${item.name}`; // Build the full path
        const itemActive = isActive(fullPath);
        const activeState = parentActive || itemActive;

        return (
          <li
            key={item.name}
            className={
              isTopLevel
                ? "MagentaA11y__side-nav--item"
                : "MagentaA11y__side-nav--sub-item"
            }
          >
            <NavLink
              to={fullPath}
              className={`MagentaA11y__side-nav--link ${
                !isTopLevel ? "MagentaA11y__side-nav--sub-link" : ""
              }`}
              {...(!isTopLevel && !activeState && { tabIndex: -1 })}
            >
              {item.label}
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
            {item.children &&
              item.children.length > 0 &&
              renderNavItems(item.children, fullPath, activeState, false)}
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className="MagentaA11y__side-nav">
      {renderNavItems(contentData as NavItem[], "", false, true)}
      <md-filled-button>Collapse All</md-filled-button>
    </div>
  );
};

export default SideNav;

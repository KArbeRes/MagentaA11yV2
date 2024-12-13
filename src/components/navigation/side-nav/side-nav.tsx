import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import contentData from "../../../shared/content.json";
import "./side-nav.scss";
import SideNavToggle from "../side-nav-toggle/side-nav-toggle";

interface NavItem {
  label: string;
  name: string;
  type?: "file";
  children?: NavItem[];
}

interface SideNavProps {
  platform: "web" | "native";
  isVisible?: boolean;
}

const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return isMobile;
};

const SideNav: React.FC<SideNavProps> = ({ platform }) => {
  const [isSideNavVisible, setSideNavVisible] = useState(true);
  const isMobile = useIsMobile();
  const location = useLocation();

  React.useEffect(() => {
    if (isMobile) {
      setSideNavVisible(false);
    }
  }, [isMobile]);

  const toggleSideNav = () => {
    setSideNavVisible((isSideNavVisible) => !isSideNavVisible);
  };

  const isActive = (path: string) => location.pathname.includes(path);

  const renderNavItems = (
    items: NavItem[],
    parentPath = `/${platform}-criteria`, // Adjust base path for criteria
    parentActive = false,
    isTopLevel = true
  ) => (
    <ul
      className={
        isTopLevel
          ? "MagentaA11y__side-nav--list"
          : "MagentaA11y__side-nav--sub-list"
      }
    >
      {items.map((item) => {
        const fullPath = `${parentPath}/${item.name}`; // Build the full path with the platform and criteria

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
              to={fullPath} // Use the full path with the platform and criteria
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
    <div className="MagentaA11y__side-nav-container">
      <div
        className={`MagentaA11y__side-nav ${isSideNavVisible ? "" : "hidden"}`}
      >
        {renderNavItems(contentData[platform] as NavItem[])}
      </div>
      <SideNavToggle toggle={toggleSideNav} isVisible={isSideNavVisible} />
    </div>
  );
};

export default SideNav;

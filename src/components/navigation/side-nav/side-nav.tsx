import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import contentData from "../../../shared/content.json";
import "./side-nav.scss";
import Accordion from "../../custom-components/accordion/accordion";

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

  const isActive = (path: string) => location.pathname.includes(path);

  const renderNavItems = (
    items: NavItem[],
    parentPath = `/${platform}-criteria`
  ) => {
    return (
      <div
        className={`MagentaA11y__side-nav ${isSideNavVisible ? "" : "hidden"}`}
      >
        <h1 className="MagentaA11y__side-nav--title">Criteria</h1>
        <ul className="MagentaA11y__side-nav--list">
          {items.map((item) => {
            const fullPath = `${parentPath}/${item.name}`;
            const itemActive = isActive(fullPath);

            return (
              <li key={item.name} className="MagentaA11y__side-nav--item">
                <Accordion
                  title={item.label}
                  id={`${item.name}-list`}
                  isOpened={itemActive}
                >
                  {item.children && item.children.length > 0 ? (
                    <ul className="MagentaA11y__side-nav--sub-list">
                      <li
                        key={`${item.name} overview`}
                        className="MagentaA11y__side-nav--sub-item"
                      >
                        <NavLink
                          to={`${fullPath}/overview`}
                          className={`MagentaA11y__side-nav--link`}
                        >
                          Overview
                        </NavLink>
                      </li>
                      {item.children.map((child) => (
                        <li
                          key={child.name}
                          className="MagentaA11y__side-nav--sub-item"
                        >
                          <NavLink
                            to={`${fullPath}/${child.name}`}
                            className={`MagentaA11y__side-nav--link`}
                          >
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <a href={fullPath}>{item.label}</a>
                  )}
                </Accordion>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <nav aria-label="Side navigation">
      <div className="MagentaA11y__side-nav-container">
        {renderNavItems(contentData[platform] as NavItem[])}
      </div>
    </nav>
  );
};

export default SideNav;

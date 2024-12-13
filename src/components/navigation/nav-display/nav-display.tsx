import React, { useEffect, useRef, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { SideNavItem } from "../nav.types";

import "../../../styles/_code-blocks.scss";
import "./nav-display.scss";

interface NavDisplayProps {
  platform: "web" | "native";
  items: SideNavItem[];
}

const NavDisplay: React.FC<NavDisplayProps> = ({ platform, items }) => {
  const location = useLocation();
  const tabsRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState(0);

  // Helper function to find the active item
  const findItemByPath = (
    items: SideNavItem[],
    path: string,
    parentPath = `/${platform}-criteria`
  ): SideNavItem | null => {
    for (const item of items) {
      const fullPath = `${parentPath}/${item.name}`;
      if (path === fullPath) return item;

      if (item.children) {
        const found = findItemByPath(item.children, path, fullPath);
        if (found) return found;
      }
    }
    return null;
  };

  // Get the current item based on the route
  const currentItem = findItemByPath(items, location.pathname);

  // Track active tab changes
  useEffect(() => {
    const handleTabChange = (event: Event) => {
      const tabIndex = (
        event.target as HTMLElement & { activeTabIndex: number }
      ).activeTabIndex;
      setActiveTab(tabIndex);
    };

    const tabs = tabsRef.current;

    if (tabs) {
      tabs.addEventListener("change", handleTabChange);
    }
    return () => {
      if (tabs) {
        setActiveTab(0);
        tabs.removeEventListener("change", handleTabChange);
      }
    };
  }, [location.pathname]);

  if (!currentItem) return <div>No content available</div>;

  const {
    label,
    generalNotes,
    gherkin,
    condensed,
    videos,
    developerNotes,
    children,
  } = currentItem;

  const tabs = [
    { content: condensed, label: "Condensed" },
    { content: gherkin, label: "Gherkin" },
    { content: developerNotes, label: "Developer Notes" },
    { content: videos, label: "Videos" },
  ].filter((tab) => tab.content);

  return (
    <div className="MagentaA11y__nav-display">
      <div className="MagentaA11y__nav-display__intro">
        <h1 className="MagentaA11y__nav-display__title">{label}</h1>

        {generalNotes && (
          <ReactMarkdown
            rehypePlugins={[rehypeHighlight, rehypeRaw]}
            remarkPlugins={[remarkGfm]}
          >
            {generalNotes}
          </ReactMarkdown>
        )}
      </div>

      {tabs.length > 0 && (
        <div className="MagentaA11y__nav-display__content">
          <div className="MagentaA11y__nav-display__content-actions">
            {/* Tabs */}
            <md-tabs
              ref={tabsRef}
              aria-label="Content options for syntax"
              role="tablist"
            >
              {tabs.map((tab, index) => (
                <md-primary-tab
                  key={tab.label}
                  aria-selected={activeTab === index ? "true" : "false"}
                  id={`${tab.label.toLowerCase().replace(" ", "-")}-tab`}
                  role="tab"
                >
                  {tab.label}
                </md-primary-tab>
              ))}
            </md-tabs>
          </div>

          <div className="MagentaA11y__nav-display__content-details">
            {tabs.map((tab, index) => (
              <div
                key={tab.label}
                style={{ display: activeTab === index ? "block" : "none" }}
              >
                <ReactMarkdown
                  rehypePlugins={[rehypeHighlight, rehypeRaw]}
                  remarkPlugins={[remarkGfm]}
                >
                  {tab.content || ""}
                </ReactMarkdown>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sub-items list */}
      {children && children.length > 0 && (
        <ul className="MagentaA11y__nav-display--sub-list">
          {children.map((child) => (
            <li key={child.name} className="MagentaA11y__nav-display--sub-item">
              <NavLink
                to={`${location.pathname}/${child.name}`}
                className="MagentaA11y__nav-display--sub-item-link"
              >
                <span className="MagentaA11y__nav-display--sub-item-title">
                  {child.label}
                </span>
                {child.generalNotes && (
                  <span className="MagentaA11y__nav-display--sub-item-description">
                    {child.generalNotes}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavDisplay;

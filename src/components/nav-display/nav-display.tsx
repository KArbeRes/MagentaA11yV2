import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useLocation } from "react-router-dom";
import rehypeHighlight from "rehype-highlight";
import contentData from "../../shared/content.json";
import { SideNavItem } from "../../shared/types/nav.types";

import "highlight.js/styles/magula.css";
import "./nav-display.scss";

// Helper function to find the item and its children by path
const findItemByPath = (
  items: SideNavItem[],
  path: string
): SideNavItem | null => {
  for (const item of items) {
    const fullPath = `/${item.name}`;
    if (path === fullPath) return item;

    if (item.children) {
      const found = findItemByPath(item.children, path.replace(fullPath, ""));
      if (found) return found;
    }
  }
  return null;
};

const NavDisplay: React.FC = () => {
  const location = useLocation();

  // Get the item matching the current path**
  const mainItem = findItemByPath(
    contentData as SideNavItem[],
    location.pathname
  );

  // Track the active tab
  const tabsRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState(0);

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
        tabs.removeEventListener("change", handleTabChange);
      }
    };
  }, []);

  if (!mainItem) return <div>Item not found</div>;

  const { generalNotes, gherkin, condensed, otherContent } = mainItem;

  return (
    <div className="MagentaA11y__nav-display">
      <div className="MagentaA11y__nav-display__intro">
        <h1 className="MagentaA11y__nav-display__title">{mainItem.label}</h1>
        {/* Render each section in order, if it exists */}
        {generalNotes && (
          <ReactMarkdown
            rehypePlugins={[rehypeHighlight]}
            components={{
              p: ({ node, ...props }) => (
                <p
                  className="MagentaA11y__nav-display__general-notes"
                  {...props}
                />
              ),
            }}
          >
            {generalNotes}
          </ReactMarkdown>
        )}
      </div>

      {(gherkin || condensed) && (
        <div className="MagentaA11y__nav-display__acceptance-criteria">
          <div className="MagentaA11y__nav-display__acceptance-criteria__actions">
            {/* md-tabs with ref */}
            <md-tabs
              ref={tabsRef}
              aria-label="Content options for syntax"
              role="tablist"
            >
              <md-secondary-tab
                aria-selected={activeTab === 0 ? "true" : "false"}
                id="condensed-tab"
                role="tab"
              >
                Condensed
              </md-secondary-tab>
              <md-secondary-tab
                aria-selected={activeTab === 1 ? "true" : "false"}
                id="gherkin-tab"
                role="tab"
              >
                Gherkin
              </md-secondary-tab>
            </md-tabs>

            {/* Textarea displaying content based on activeTab */}
            <textarea
              id="content-textarea"
              name="content-textarea"
              aria-readonly="true"
              className="MagentaA11y__nav-display__textarea"
              aria-label={`Textarea displaying ${
                activeTab === 0 ? "Condensed" : "Gherkin"
              } syntax`}
              value={
                activeTab === 0
                  ? condensed || "No Condensed Syntax available!"
                  : gherkin || "No Gherkin Syntax available!"
              }
            />
          </div>
        </div>
      )}

      {/* Other content sections */}
      {otherContent && (
        <div className="MagentaA11y__nav-display__other-content">
          <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
            {otherContent}
          </ReactMarkdown>
        </div>
      )}

      {/* List of sub-items, if any */}
      {mainItem.children && mainItem.children.length > 0 && (
        <ul className="MagentaA11y__nav-display--sub-list">
          {mainItem.children.map((child) => (
            <li key={child.name} className="MagentaA11y__nav-display--sub-item">
              {child.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavDisplay;

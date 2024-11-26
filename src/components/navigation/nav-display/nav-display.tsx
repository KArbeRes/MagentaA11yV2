import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { NavLink, useLocation } from "react-router-dom";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import contentData from "../../../shared/content.json";
import { SideNavItem } from "../nav.types";

import "../../../styles/_code-blocks.scss";
import "./nav-display.scss";

const ASSET_BASE_PATH = "/MagentaA11yV2/content/assets";

type MediaProps = {
  src?: string;
  alt?: string;
  type?: string;
  children?: React.ReactNode;
  poster?: string;
};

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
        setActiveTab(0);
        tabs.removeEventListener("change", handleTabChange);
      }
    };
  }, [location.pathname]);

  if (!mainItem) return <div>Item not found</div>;

  const { generalNotes, gherkin, condensed, otherContent } = mainItem;

  return (
    <div className="MagentaA11y__nav-display">
      <div className="MagentaA11y__nav-display__intro">
        <h1 className="MagentaA11y__nav-display__title">{mainItem.label}</h1>
        {/* Render each section in order, if it exists */}
        {generalNotes && (
          <ReactMarkdown
            rehypePlugins={[rehypeHighlight]} // Syntax highlighting
            remarkPlugins={[remarkGfm]} // GFM support (e.g., tables)
            components={{
              p: ({ node, ...props }) => (
                <p
                  className="MagentaA11y__nav-display__other-content-p"
                  {...props}
                />
              ),
              table: ({ node, ...props }) => <table {...props} />,
              th: ({ node, ...props }) => <th {...props} />,
              td: ({ node, ...props }) => <td {...props} />,
              tr: ({ node, ...props }) => <tr {...props} />,
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
              readOnly
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
          <ReactMarkdown
            rehypePlugins={[rehypeHighlight, rehypeRaw]} // Syntax highlighting
            remarkPlugins={[remarkGfm]} // GFM support (e.g., tables, task lists)
            components={{
              p: ({ node, ...props }) => <p {...props} />,
              table: ({ node, ...props }) => <table {...props} />,
              th: ({ node, ...props }) => <th {...props} />,
              td: ({ node, ...props }) => <td {...props} />,
              tr: ({ node, ...props }) => <tr {...props} />,
              img: ({ src, alt }: MediaProps) => {
                const resolvedSrc = src?.startsWith("http")
                  ? src
                  : `${ASSET_BASE_PATH}/${src}`;
                return resolvedSrc ? (
                  <img src={resolvedSrc} alt={alt} loading="lazy" />
                ) : (
                  <span>{alt}</span>
                );
              },
              video: ({ poster, children }: MediaProps) => {
                console.log({ poster });
                let posterPath = poster
                  ? `${ASSET_BASE_PATH}/${poster}`
                  : "MagentaA11yV2/movie.svg";

                return (
                  <video controls preload="none" poster={`${posterPath}`}>
                    {children}
                  </video>
                );
              },
              source: ({ src, type }: MediaProps) => {
                const resolvedSrc = src?.startsWith("http")
                  ? src
                  : `${ASSET_BASE_PATH}/${src}`;
                return <source src={resolvedSrc} type={type} />;
              },
            }}
          >
            {otherContent}
          </ReactMarkdown>
        </div>
      )}

      {/* List of sub-items, if any */}
      {mainItem.children && mainItem.children.length > 0 && (
        <ul className="MagentaA11y__nav-display--sub-list">
          {mainItem.children.map((child) => {
            console.log({ child });
            return (
              <li
                key={child.name}
                className="MagentaA11y__nav-display--sub-item"
              >
                <NavLink
                  to={child.name}
                  className="MagentaA11y__nav-display--sub-item-link"
                >
                  <span className="MagentaA11y__nav-display--sub-item-title">
                    {child.label}
                  </span>
                  <span className="MagentaA11y__nav-display--sub-item-description">
                    {child.generalNotes}
                  </span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default NavDisplay;

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

type MediaProps = {
  src?: string;
  alt?: string;
  type?: string;
  children?: React.ReactNode;
  poster?: string;
};

const ASSET_BASE_PATH = "/MagentaA11yV2/content/assets";

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
            components={{
              p: ({ node, ...props }) => <p {...props} />,
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
            {tabs.map((tab, index) => {
              return (
                <div
                  key={tab.label}
                  style={{ display: activeTab === index ? "block" : "none" }}
                >
                  <ReactMarkdown
                    rehypePlugins={[rehypeHighlight, rehypeRaw]}
                    remarkPlugins={[remarkGfm]}
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
                        let posterPath = poster
                          ? `${ASSET_BASE_PATH}/${poster}`
                          : "MagentaA11yV2/movie.svg";

                        return (
                          <video
                            controls
                            preload="none"
                            poster={`${posterPath}`}
                          >
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
                      a: ({ href, children }) => {
                        const isExternal = (() => {
                          if (!href) return false; // Treat undefined href as relative
                          try {
                            const url = new URL(href, window.location.href);
                            return url.origin !== window.location.origin; // External if origins differ
                          } catch (e) {
                            return false; // Invalid URLs are treated as relative
                          }
                        })();

                        return isExternal ? (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${href} in a new tab`}
                          >
                            {children}
                          </a>
                        ) : (
                          <NavLink
                            to={href ? href : "/"}
                            aria-label={`Navigate to ${href}`}
                          >
                            {children}
                          </NavLink>
                        );
                      },
                    }}
                  >
                    {tab.content || ""}
                  </ReactMarkdown>
                </div>
              );
            })}
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

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

const copyToClipboard = (content: string) => {
  if (content) {
    navigator.clipboard.writeText(content);
  }
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

  const { generalNotes, gherkin, condensed, videos, developerNotes } = mainItem;

  const tabs = [
    { content: condensed, label: "Condensed" },
    { content: gherkin, label: "Gherkin" },
    { content: developerNotes, label: "Developer Notes" },
    { content: videos, label: "Videos" },
  ].filter((tab) => tab.content);

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
            {/* md-tabs with ref */}
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
            <md-filled-button>
              Add to list
              <svg slot="icon" viewBox="0 -960 960 960">
                <path d="M377-198v-60h463v60H377Zm0-252v-60h463v60H377Zm0-253v-60h463v60H377ZM189-161q-28.05 0-48.02-19Q121-199 121-227.5t19.5-48q19.5-19.5 48-19.5t47.5 19.98q19 19.97 19 48.02 0 27.23-19.39 46.61Q216.23-161 189-161Zm0-252q-28.05 0-48.02-19.68Q121-452.36 121-480t19.98-47.32Q160.95-547 189-547q27.23 0 46.61 19.68Q255-507.64 255-480t-19.39 47.32Q216.23-413 189-413Zm-1-253q-27.64 0-47.32-19.68T121-733q0-27.64 19.68-47.32T188-800q27.64 0 47.32 19.68T255-733q0 27.64-19.68 47.32T188-666Z" />
              </svg>
            </md-filled-button>
          </div>

          <div className="MagentaA11y__nav-display__content-details">
            {(tabs[activeTab]?.label === "Condensed" ||
              tabs[activeTab]?.label === "Gherkin") && (
              <md-text-button
                name="copy-button"
                onClick={() => copyToClipboard(tabs[activeTab].content || "")}
              >
                Copy text
                <svg slot="icon" viewBox="0 -960 960 960">
                  <path d="M300-200q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h440q24 0 42 18t18 42v560q0 24-18 42t-42 18H300ZM180-80q-24 0-42-18t-18-42v-620h60v620h500v60H180Z" />
                </svg>
              </md-text-button>
            )}

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
              {tabs[activeTab]?.content || "No content available!"}
            </ReactMarkdown>
          </div>
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

import React from "react";
import { useLocation } from "react-router-dom";
import contentData from "../../shared/content.json";
import "./nav-display.scss";
import { SideNavItem } from "../../shared/types/nav.types";
import ReactMarkdown from "react-markdown";

import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-light.css";
//more theme examples here -> https://highlightjs.org/examples

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

  // Get the item matching the current path
  const mainItem = findItemByPath(
    contentData as SideNavItem[],
    location.pathname
  );

  if (!mainItem) return <div>Item not found</div>;

  // const { generalNotes, gherkin, condensed, otherContent } = mainItem;
  const { generalNotes, otherContent } = mainItem;

  return (
    <div className="MagentaA11y__nav-display">
      <h1 className="MagentaA11y__nav-display--title">{mainItem.label}</h1>

      {/* Render each section in order, if it exists */}
      {generalNotes && (
        <ReactMarkdown
          rehypePlugins={[rehypeHighlight]}
          components={{
            p: ({ node, ...props }) => (
              <p
                className="MagentaA11y__nav-display--general-notes"
                {...props}
              />
            ),
          }}
        >
          {generalNotes}
        </ReactMarkdown>
      )}

      {/* {gherkin && <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{gherkin}</ReactMarkdown>*/}
      {/* {condensed && <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{condensed}</ReactMarkdown>} */}
      {otherContent && (
        <div className="MagentaA11y__nav-display--other-content">
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

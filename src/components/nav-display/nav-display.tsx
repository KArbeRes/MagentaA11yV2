import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import contentData from "../../shared/content.json";
import "./nav-display.scss";
import { SideNavItem } from "../../shared/types/nav.types";
import ReactMarkdown from "react-markdown";

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
  const [markdownContent, setMarkdownContent] = useState<string | null>(null);

  // Get the item matching the current path
  const mainItem = findItemByPath(
    contentData as SideNavItem[],
    location.pathname
  );

  useEffect(() => {
    // Clear previous markdown content on path change
    setMarkdownContent(null);

    // If the item is a markdown file, load its contents
    if (mainItem && mainItem.type === "file") {
      const markdownPath = `${process.env.PUBLIC_URL}/content/web/${mainItem.name}.md`;

      fetch(markdownPath)
        .then((response) => {
          if (!response.ok) throw new Error(`Failed to fetch ${markdownPath}`);
          return response.text();
        })
        .then((text) => setMarkdownContent(text))
        .catch((error) => console.error("Error loading markdown file:", error));
    }
  }, [location.pathname, mainItem]);

  if (!mainItem) return <div>Item not found</div>;

  return (
    <div className="MagentaA11y__nav-display">
      <h1 className="MagentaA11y__nav-display--title">{mainItem.label}</h1>

      {/* Render markdown content if it exists */}
      {markdownContent ? (
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      ) : (
        <div>Loading content...</div>
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

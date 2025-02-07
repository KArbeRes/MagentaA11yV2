import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./breadcrumbs.scss";

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const [breadcrumbItems, setBreadcrumbItems] = useState<
    { path: string; label: string }[]
  >([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const rawSegments = location.pathname
      .replace("/MagentaA11yV2#", "")
      .split("/")
      .filter(Boolean);

    let builtPath = "";
    const newBreadcrumbs: { path: string; label: string }[] = [];

    rawSegments.forEach((segment, index) => {
      builtPath += `/${segment}`;

      let pathUrl = builtPath;
      if (index < rawSegments.length - 1) {
        pathUrl = `${builtPath}/overview`;
      }

      if (!newBreadcrumbs.some((crumb) => crumb.path === pathUrl)) {
        newBreadcrumbs.push({
          path: pathUrl,
          label: segment
            .replace(/-/g, " ")
            .replace(/^./, (char) => char.toUpperCase()),
        });
      }
    });

    setBreadcrumbItems(newBreadcrumbs);
  }, [location.pathname, isMobile]);

  // Don't render breadcrumbs on mobile screens
  if (isMobile) return null;

  return (
    <nav className="MagentaA11y__breadcrumbs" aria-label="Breadcrumb">
      <ol>
        <li>
          <Link to="/">MagentaA11y</Link>
        </li>

        {breadcrumbItems.map(({ path, label }, index) => (
          <li key={path}>
            <Link
              to={path}
              aria-current={
                index === breadcrumbItems.length - 1 ? "page" : undefined
              }
            >
              {label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

import React from "react";
import {
  Route,
  HashRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import { Platforms } from "shared/types/shared-types";
import { ReactComponent as BookmarkIconOutlined } from "./assets/svgs/bookmark-outlined.svg";
import About from "./components/about-us/about-us";
import Criteria from "./components/criteria/criteria";
import Home from "./components/home/home";
import { NavItem } from "./components/navigation/nav.types";
import SideNav from "./components/navigation/side-nav/side-nav";
import TopNav from "./components/navigation/top-nav/top-nav";

import "./App.scss";
import Breadcrumbs from "components/navigation/breadcrumbs/breadcrumbs";

const navItems: NavItem[] = [
  { label: "Web Criteria", href: "/web-criteria" },
  { label: "Native Criteria", href: "/native-criteria" },
  { label: "About us", href: "/about" },
  {
    label: "My criteria",
    href: "/my-criteria",
    icon: <BookmarkIconOutlined />,
  },
];

const AppContent: React.FC = () => {
  const location = useLocation();

  // Determine if we should show the SideNav
  const isCriteriaRoute =
    location.pathname.startsWith("/web-criteria") ||
    location.pathname.startsWith("/native-criteria");

  // Determine the platform based on the route
  const platform = location.pathname.startsWith("/web-criteria")
    ? Platforms.WEB
    : Platforms.NATIVE;

  return (
    <div className="MagentaA11y__content">
      {/* Render SideNav only on the criteria pages */}
      {isCriteriaRoute && <SideNav platform={platform} />}

      <div className="MagentaA11y__main-content">
        <Breadcrumbs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/web-criteria/*"
            element={<Criteria platform={Platforms.WEB} />}
          />
          <Route
            path="/native-criteria/*"
            element={<Criteria platform={Platforms.NATIVE} />}
          />
        </Routes>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="MagentaA11y">
        <header className="MagentaA11y-header">
          <TopNav navItems={navItems} />
        </header>
        <AppContent />
      </div>
    </Router>
  );
};

export default App;

import React from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./components/home/home";
import About from "./components/about-us/about-us";
import TopNav from "./components/navigation/top-nav/top-nav";
import SideNav from "./components/navigation/side-nav/side-nav";
import NavDisplay from "./components/navigation/nav-display/nav-display";
import contentData from "./shared/content.json";
import { SideNavItem } from "./shared/types/nav.types";

const navItems = [{ label: "About us", href: "/about", component: About }];

const App: React.FC = () => {
  const generateRoutes = (items: SideNavItem[], parentPath = "") => {
    return items.map((item) => {
      const path = `${parentPath}/${item.name}`;

      return (
        <React.Fragment key={path}>
          <Route path={path} element={<NavDisplay />} />
          {/* Recursively add routes for children */}
          {item.children && generateRoutes(item.children, path)}
        </React.Fragment>
      );
    });
  };
  return (
    <Router>
      <div className="MagentaA11y">
        <header className="MagentaA11y-header">
          <TopNav navItems={navItems} />
        </header>
        <div className="MagentaA11y__content">
          <SideNav />
          <div className="MagentaA11y__main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />

              {/* Generate routes dynamically from content.json */}
              {generateRoutes(contentData as SideNavItem[])}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;

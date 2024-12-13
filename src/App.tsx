import React from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import About from "./components/about-us/about-us";
import Home from "./components/home/home";
import NavDisplay from "./components/navigation/nav-display/nav-display";
import { SideNavItem } from "./components/navigation/nav.types";
import SideNav from "./components/navigation/side-nav/side-nav";
import TopNav from "./components/navigation/top-nav/top-nav";
import contentData from "./shared/content.json";

import "./App.scss";
import Criteria from "./components/criteria/criteria";

const navItems = [
  { label: "Web Criteria", href: "/web-criteria", component: Criteria },
  { label: "Native Criteria", href: "/native-criteria", component: Criteria },
  { label: "About us", href: "/about", component: About },
];

const App: React.FC = () => {
  return (
    <Router>
      <div className="MagentaA11y">
        <header className="MagentaA11y-header">
          <TopNav navItems={navItems} />
        </header>
        <div className="MagentaA11y__content">
          {/* <SideNav /> */}
          <div className="MagentaA11y__main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route
                path="/web-criteria/*"
                element={<Criteria platform="web" />}
              />
              <Route
                path="/native-criteria/*"
                element={<Criteria platform="native" />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;

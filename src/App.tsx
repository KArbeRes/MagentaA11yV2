import React from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import About from "./components/about-us/about-us";
import Criteria from "./components/criteria/criteria";
import Home from "./components/home/home";
import TopNav from "./components/navigation/top-nav/top-nav";

import "./App.scss";

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
    </Router>
  );
};

export default App;

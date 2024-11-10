import React from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import './App.scss';
import Home from './components/home/home';
import About from './components/about-us/about-us';
import TopNav from './components/top-nav/top-nav';
import SideNav from './components/side-nav/side-nav';

const navItems = [{ label: 'About us', href: '/about', component: About }];

const App: React.FC = () => {
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

              {navItems.map((item, index) => (
                <Route
                  key={index}
                  path={item.href}
                  element={<item.component />}
                />
              ))}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;

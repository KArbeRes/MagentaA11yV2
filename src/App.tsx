import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.scss';
import Home from './components/home/home';
import TopNav from './components/top-nav/top-nav';

const navItems = [
  { label: 'About us', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Services', href: '/services' },
];

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header"></header>
        <TopNav navItems={navItems} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Routes>

          {/* <SideNav /> */}
        </div>
      </div>
    </Router>
  );
};

export default App;

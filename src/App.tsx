import MyCriteria from 'components/my-criteria/my-criteria';
import React from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { useCriteria } from 'shared/contexts/criteria-context';
import { Platforms } from 'shared/types/shared-types';
import { ReactComponent as BookmarkIconOutlined } from './assets/svgs/bookmark-outlined.svg';
import About from './components/about-us/about-us';
import Criteria from './components/criteria/criteria';
import Home from './components/home/home';
import { NavItem } from './components/navigation/nav.types';
import TopNav from './components/navigation/top-nav/top-nav';

import './App.scss';

const App: React.FC = () => {
  const { savedCriteria } = useCriteria();

  const savedCriteriaCount = savedCriteria.length;

  const badgeString = savedCriteriaCount
    ? savedCriteriaCount > 99
      ? '99+'
      : `${savedCriteriaCount}`
    : '';

  const navItems: NavItem[] = [
    { label: 'Web Criteria', href: '/web-criteria' },
    { label: 'Native Criteria', href: '/native-criteria' },
    { label: 'How to test', href: '/how-to-test' },
    { label: 'Demo', href: '/demo' },
    { label: 'About us', href: '/about' },
    {
      label: 'My criteria',
      href: '/my-criteria',
      icon: <BookmarkIconOutlined />,
      withBadge: badgeString,
      ariaLabel: badgeString ? `${badgeString}, saved criteria` : '',
    },
  ];
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="MagentaA11y">
        <header className="MagentaA11y-header">
          <TopNav navItems={navItems} />
        </header>
        <div className="MagentaA11y--content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/web-criteria/*"
              element={<Criteria platform={Platforms.WEB} />}
            />
            <Route
              path="/native-criteria/*"
              element={<Criteria platform={Platforms.NATIVE} />}
            />
            <Route path="/my-criteria" element={<MyCriteria />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

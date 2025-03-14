import React, { useEffect } from 'react';
import {
  Route,
  HashRouter as Router,
  Routes,
  useLocation,
} from 'react-router-dom';
import { useCriteria } from 'shared/contexts/criteria-context';
import { Platforms } from 'shared/types/shared-types';
import { ReactComponent as BookmarkIconOutlined } from './assets/svgs/bookmark-outlined.svg';
import About from './components/about-us/about-us';
import Criteria from './components/criteria/criteria';
import Home from './components/home/home';
import MyCriteria from './components/my-criteria/my-criteria';
import { NavItem } from './components/navigation/nav.types';
import TopNav from './components/navigation/top-nav/top-nav';

import './App.scss';

const AppContent: React.FC = () => {
  const location = useLocation();
  const { savedCriteria } = useCriteria();
  const savedCriteriaCount = savedCriteria.length;

  const badgeString = savedCriteriaCount
    ? savedCriteriaCount > 99
      ? '99+'
      : `${savedCriteriaCount}`
    : '';

  useEffect(() => {
    let pathSegments = location.pathname.split('/').filter(Boolean);
    let pageTitle = '';

    if (pathSegments.length > 0) {
      let lastSegment = pathSegments[pathSegments.length - 1];

      if (lastSegment.toLowerCase() === 'overview' && pathSegments.length > 1) {
        lastSegment = pathSegments[pathSegments.length - 2];
      }

      pageTitle = lastSegment
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase());

      if (pathSegments.includes('web-criteria')) {
        pageTitle += ' - Web';
      } else if (pathSegments.includes('native-criteria')) {
        pageTitle += ' - Native';
      }
    }

    document.title = pageTitle;
  }, [location]);

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
      ariaLabel: badgeString
        ? `My Criteria, ${badgeString} criteria has been saved`
        : '',
    },
  ];

  return (
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
  );
};

const App: React.FC = () => {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppContent />
    </Router>
  );
};

export default App;

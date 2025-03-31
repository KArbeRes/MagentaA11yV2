import PageLayout from 'components/page-layout/page-layout';
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import './App.scss';

const App: React.FC = () => {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <PageLayout />
    </Router>
  );
};

export default App;

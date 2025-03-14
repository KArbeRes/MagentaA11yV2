import MainLayout from 'components/main-layout/main-layout';
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import './App.scss';

const App: React.FC = () => {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <MainLayout />
    </Router>
  );
};

export default App;

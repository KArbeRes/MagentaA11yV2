import React from 'react';
import BrandLogo from '../../assets/svgs/brand-logo-magenta.svg';

import './home.scss';

const Home: React.FC = () => {
  return (
    <div className="MagentaA11y--home-page">
      <div className="MagentaA11y--home-page__header">
        <div className="MagentaA11y--home-page__header--title">
          <span>Unlock the power of accessibility</span>
          <span>MagentaA11y</span>
        </div>
        <div className="MagentaA11y--home-page__header--logo">
          <img src={BrandLogo} alt="Globe surrounding T-Mobile Person" />
        </div>
      </div>
      <h1>Welcome to MagentaA11y</h1>
      <p>This is the home page.</p>
    </div>
  );
};

export default Home;

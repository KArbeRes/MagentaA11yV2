import React from 'react';
import TmoLogo from '../../assets/svgs/t-digit-logo.svg';

import './home.scss';

const Home: React.FC = () => {
  return (
    <div className="MagentaA11y--home-page">
      <div className="MagentaA11y--home-page__header">
        <div className="MagentaA11y--home-page__header--logo">
          <img src={TmoLogo} alt="T-Mobile logo" />
        </div>
        <div className="MagentaA11y--home-page__header--title">
          <span>Unlock the power of accessibility</span>
          <span>MagentaA11y</span>
        </div>
      </div>
      <h1>Welcome to MagentaA11y</h1>
      <p>This is the home page.</p>
    </div>
  );
};

export default Home;

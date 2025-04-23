import React from 'react';
import TmoLogo from '../../assets/svgs/t-digit-logo.svg';
import Cards from "../custom-components/cards/cards";
import './home.scss';

const cardContent = [
  {
    "title": "Web accessibility checker",
    "description": "Choose components to define your accessibility success criteria",
<<<<<<< HEAD
<<<<<<< HEAD
    "link": "/web-criteria/page-level/overview"
=======
    "link": "/web-criteria/component/overview"
>>>>>>> a781038 (feat: new homepage styles)
=======
    "link": "/web-criteria/page-level/overview"
>>>>>>> aea25e3 (fix: styling and home page card link)
  },
  {
    "title": "Native accessibility checker",
    "description": "Choose components to define your accessibility success criteria",
    "link": "/native-criteria/controls/overview"
  },
  {
    "title": "How to test components",
    "description": "Learn how to test for accessibility",
    "link": "/how-to-test-criteria/components/overview"
  },
  {
    "title": "Start adding criteria",
    "description": "Check out your saved criteria and copy them all together at the same time",
    "link": "/my-criteria"
  }
]

const Home: React.FC = () => {
  return (
    <div className="MagentaA11y--home-page">
      <div className="MagentaA11y--home-page__header">
        <h1 className="MagentaA11y--home-page__header--title">
          <span>Unlock the power of accessibility</span>
          <span>MagentaA11y</span>
        </h1>
        <div className="MagentaA11y--home-page__header--logo">
          <img src={TmoLogo} alt="T-Mobile logo" />
        </div>
      </div>
      <div className="MagentaA11y--home-page__content MagentaA11y--home-page__content--beige">
        <div className='text-center'>
          <h2 className="MagentaA11y--home-page__content--header">Get Started</h2>
          <p>Automatically generate test cases for Web, iOS, and Android components.</p>
        </div>
        <Cards items={cardContent} />
      </div>
      {/* <div className="MagentaA11y--home-page__content MagentaA11y--home-page__content--white">
        <div className='text-center'>
          <h2 className="MagentaA11y--home-page__content--header">ARC Summit 2025</h2>
          <p>Starts May 1, 2025.</p>
        </div>
      </div> */}
    </div>
  );
};

export default Home;

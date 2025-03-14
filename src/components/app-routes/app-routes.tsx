import AboutUs from 'components/about-us/about-us';
import Criteria from 'components/criteria/criteria';
import Home from 'components/home/home';
import MyCriteria from 'components/my-criteria/my-criteria';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Platforms } from 'shared/types/shared-types';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/about-us" element={<AboutUs />} />
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
);

export default AppRoutes;

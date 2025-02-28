import React, { useRef } from 'react';
import contentData from '../../shared/content.json';
import { Platforms } from '../../shared/types/shared-types';
import ContentDisplay from '../content-display/content-display';
import { SideNavItem } from '../navigation/nav.types';
import SideNav from '../navigation/side-nav/side-nav';

import './criteria.scss';

interface CriteriaProps {
  platform: Platforms;
}

const Criteria: React.FC<CriteriaProps> = ({ platform }) => {
  const sideNavRef = useRef<{ showModal: () => void } | null>(null);

  // Function to toggle the side nav visibility
  const toggleSideNav = () => {
    sideNavRef.current?.showModal();
  };
  // Retrieve the appropriate content for the platform
  const platformData = contentData[platform] as SideNavItem[];

  return (
    <div className="MagentaA11y__criteria-container">
      <SideNav platform={platform} ref={sideNavRef} />

      {/* Main Content Section */}
      <div className="MagentaA11y__criteria-content">
        {/* Dynamically display ContentDisplay based on the current route */}
        <ContentDisplay
          platform={platform}
          items={platformData}
          onToggleSideNav={toggleSideNav}
        />
      </div>
    </div>
  );
};

export default Criteria;

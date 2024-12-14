import React from "react";
import contentData from "../../shared/content.json";
import NavDisplay from "../navigation/nav-display/nav-display";
import { SideNavItem } from "../navigation/nav.types";
import SideNav from "../navigation/side-nav/side-nav";

import "./criteria.scss";

interface CriteriaProps {
  platform: "web" | "native";
}

const Criteria: React.FC<CriteriaProps> = ({ platform }) => {
  // Retrieve the appropriate content for the platform
  const platformData = contentData[platform] as SideNavItem[];

  return (
    <div className="MagentaA11y__criteria-container">
      {/* SideNav remains persistent */}
      <SideNav platform={platform} />

      {/* Main Content Section */}
      <div className="MagentaA11y__criteria-content">
        {/* Dynamically display NavDisplay based on the current route */}
        <NavDisplay platform={platform} items={platformData} />
      </div>
    </div>
  );
};

export default Criteria;

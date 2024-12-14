import React from "react";
import { useLocation } from "react-router-dom";
import SideNav from "../navigation/side-nav/side-nav";
import NavDisplay from "../navigation/nav-display/nav-display";
import contentData from "../../shared/content.json";
import { SideNavItem } from "../navigation/nav.types";

import "./criteria.scss";

interface CriteriaProps {
  platform: "web" | "native";
}

const Criteria: React.FC<CriteriaProps> = ({ platform }) => {
  const location = useLocation();

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

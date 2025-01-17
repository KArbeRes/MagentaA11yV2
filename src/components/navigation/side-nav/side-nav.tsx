import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Platforms } from 'shared/types/shared-types';
import { isPathActive } from 'utils/navigation-helpers';
import contentData from '../../../shared/content.json';
import { useViewport } from '../../../shared/contexts/viewport-context';
import Accordion from '../../custom-components/accordion/accordion';

import './side-nav.scss';

interface NavItem {
  label: string;
  name: string;
  type?: 'file';
  children?: NavItem[];
}

interface SideNavProps {
  platform: Platforms;
  isVisible?: boolean;
}

const SideNav: React.FC<SideNavProps> = ({ platform }) => {
  const viewportContext = useViewport();
  const location = useLocation();

  const renderNavItems = (
    items: NavItem[],
    parentPath = `/${platform}-criteria`
  ) => {
    return (
      <div
        className={`MagentaA11y__side-nav ${
          viewportContext.isMobile ? 'hidden' : ''
        }`}>
        <h1 className="MagentaA11y__side-nav--title">Criteria</h1>
        <ul className="MagentaA11y__side-nav--list">
          {items.map((item) => {
            const fullPath = `${parentPath}/${item.name}`;
            const itemActive = isPathActive(fullPath, location);

            return (
              <li key={item.name} className="MagentaA11y__side-nav--item">
                <Accordion
                  title={item.label}
                  id={`${item.name}-list`}
                  isOpened={itemActive}>
                  {item.children && item.children.length > 0 ? (
                    <ul className="MagentaA11y__side-nav--sub-list">
                      <li
                        key={`${item.name} overview`}
                        className="MagentaA11y__side-nav--sub-item">
                        <NavLink
                          to={`${fullPath}/overview`}
                          className={`MagentaA11y__side-nav--link`}>
                          Overview
                        </NavLink>
                      </li>
                      {item.children.map((child) => (
                        <li
                          key={child.name}
                          className="MagentaA11y__side-nav--sub-item">
                          <NavLink
                            to={`${fullPath}/${child.name}`}
                            className={`MagentaA11y__side-nav--link`}>
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <a href={fullPath}>{item.label}</a>
                  )}
                </Accordion>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <nav aria-label="Side navigation">
      <div className="MagentaA11y__side-nav-container">
        {renderNavItems(contentData[platform] as NavItem[])}
      </div>
    </nav>
  );
};

export default SideNav;

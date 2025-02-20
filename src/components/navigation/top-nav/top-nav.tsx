import classNames from 'classnames';
import { ButtonSize } from 'components/custom-components/buttons/button-types';
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Icons } from 'shared/Icons';
import { useCriteria } from 'shared/contexts/criteria-context';
import { Platforms } from 'shared/types/shared-types';
import { isPathActive } from 'utils/navigation-helpers';
import contentData from '../../../shared/content.json';
import { useViewport } from '../../../shared/contexts/viewport-context';
import IconButton from '../../custom-components/buttons/icon-button/icon-button';
import { TopNavProps } from '../nav.types';

import './top-nav.scss';

const getFirstOverviewLink = (platform: Platforms) => {
  const items = contentData[platform];
  for (const item of items) {
    if (item.children?.length) {
      return `/${platform}-criteria/${item.name}/overview`;
    }
  }
  return `/${platform}-criteria`;
};

const TopNav: React.FC<TopNavProps> = ({ navItems }) => {
  const viewportContext = useViewport();
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  const { savedCriteria } = useCriteria();

  const handleMenuClick = () => {
    setExpanded((expanded) => !expanded);
  };

  return (
    <div className="MagentaA11y__navbar" data-theme="dark">
      {/* Brand Section */}
      <div className="MagentaA11y__brand">
        <NavLink
          to="/home"
          className="MagentaA11y__brand--name"
          aria-label="Magenta A11y - Home">
          A11y
        </NavLink>
      </div>

      {viewportContext.isMobile && (
        <IconButton
          a11yLabel={'Menu Button'}
          icon={expanded ? Icons.closeOutlined : Icons.menu}
          ariaExpanded={expanded}
          ariaHasPopup={true}
          size={ButtonSize.small}
          ariaControls="main"
          onClick={handleMenuClick}></IconButton>
      )}

      <nav className="MagentaA11y__navbar__nav" aria-label="main">
        <ul className="MagentaA11y__nav-items">
          {navItems.map((item, index) => {
            const href =
              item.label === 'Web Criteria'
                ? getFirstOverviewLink(Platforms.WEB)
                : item.label === 'Native Criteria'
                ? getFirstOverviewLink(Platforms.NATIVE)
                : item.href;

            const isActive = isPathActive(item.href, location);

            return (
              <li key={index} className="MagentaA11y__nav-items--item">
                <NavLink
                  to={href}
                  className={classNames('MagentaA11y__nav-items--link', {
                    active: isActive,
                  })}
                  aria-label={item.ariaLabel}>
                  {item.icon && (
                    <span
                      {...(savedCriteria.length > 0
                        ? { 'data-count': savedCriteria.length }
                        : {})}
                      className={'MagentaA11y__nav-items--icon'}>
                      {item.icon}
                    </span>
                  )}
                  <span className="MagentaA11y__nav-items--label">
                    {item.label}
                  </span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default TopNav;

import React, { MutableRefObject, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import './skip-link.scss';

interface SkipLinkProps {
  mainContentRef: MutableRefObject<HTMLDivElement | null>;
  isKeyboardNavigation: boolean;
  liveRegionTestId?: string;
}

const SkipLink: React.FC<SkipLinkProps> = ({
  mainContentRef,
  isKeyboardNavigation,
  liveRegionTestId,
}) => {
  const location = useLocation();
  const skipLinkRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (isKeyboardNavigation && skipLinkRef.current) {
      skipLinkRef.current.focus();
    }
  }, [isKeyboardNavigation, location.pathname]);

  const formatNavigationMessage = () => {
    const path = location.pathname.trim();
    if (!path || path === '/') return '';

    const pathSegments = path.split('/').filter(Boolean);

    if (pathSegments.length === 0) return '';

    if (pathSegments.length === 1) {
      return `${pathSegments[0]} page`;
    }

    const category = pathSegments[0];
    const component = pathSegments[1]?.replace(/-/g, ' ') || '';
    const section = pathSegments[2] ? pathSegments[2] + ' ' : '';

    return `${category} "${component} ${section}page"`.trim();
  };

  return (
    <>
      <button
        className="skip-link"
        ref={skipLinkRef}
        onClick={() => {
          mainContentRef.current?.focus();
        }}>
        Skip to main content
      </button>
      <div data-testid={liveRegionTestId} aria-live="polite" aria-atomic="true">
        {formatNavigationMessage()}
      </div>
    </>
  );
};

export default SkipLink;

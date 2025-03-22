import { useKeyboardNavigation } from 'hooks/useKeyboardNavigation';
import React, { MutableRefObject, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import './skip-link.scss';

interface SkipLinkProps {
  mainContentRef: MutableRefObject<HTMLDivElement | null>;
  liveRegionTestId?: string;
}

const SkipLink: React.FC<SkipLinkProps> = ({
  mainContentRef,
  liveRegionTestId,
}) => {
  const location = useLocation();
  const skipLinkRef = useRef<HTMLButtonElement | null>(null);
  const isKeyboardNavigation = useKeyboardNavigation();

  const formatNavigationMessage = () => {
    const pathSegments = location.pathname.trim().split('/').filter(Boolean);

    if (pathSegments.length === 0) return '';

    const [category, component, section] = pathSegments;

    const formattedComponent = component?.replace(/-/g, ' ') || '';
    const formattedSection = section ? `${section} ` : '';

    return `Navigated to: ${category}${
      formattedComponent
        ? ` "${formattedComponent} ${formattedSection}page"`
        : ' page'
    }`.trim();
  };

  useEffect(() => {
    if (isKeyboardNavigation) {
      skipLinkRef.current?.focus();
    }
  }, [location, isKeyboardNavigation]);

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

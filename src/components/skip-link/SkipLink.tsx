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
  const isKeyboardNavigation = useKeyboardNavigation();
  const spanRef = useRef<HTMLDivElement | null>(null);
  const skipLinkRef = useRef<HTMLButtonElement | null>(null);

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
      spanRef.current?.focus();
    }
  }, [location.pathname, isKeyboardNavigation]);

  return (
    <>
      <span ref={spanRef} tabIndex={-1} aria-labelledby="atomic-region"></span>
      <button
        className="skip-link"
        ref={skipLinkRef}
        onClick={() => {
          mainContentRef.current?.focus();
        }}>
        Skip to main content
      </button>
      <div
        id="atomic-region"
        data-testid={liveRegionTestId}
        aria-live="polite"
        aria-atomic="true">
        {formatNavigationMessage()}
      </div>
    </>
  );
};

export default SkipLink;

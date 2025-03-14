import React, { MutableRefObject, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import './skip-link.scss';

interface SkipLinkProps {
  mainContentRef: MutableRefObject<HTMLDivElement | null>;
  isKeyboardNavigation: boolean;
}

const SkipLink: React.FC<SkipLinkProps> = ({
  mainContentRef,
  isKeyboardNavigation,
}) => {
  const location = useLocation();
  const skipLinkRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (isKeyboardNavigation && skipLinkRef.current) {
      skipLinkRef.current.focus();
    }
  }, [isKeyboardNavigation, location.pathname]);

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
      <div aria-live="assertive" aria-atomic="true" />
    </>
  );
};

export default SkipLink;

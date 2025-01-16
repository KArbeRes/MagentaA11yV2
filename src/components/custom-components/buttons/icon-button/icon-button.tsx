import React from "react";

import "./icon-button.scss";

// // Import your button size, type, and other constants
// import { ButtonSize, ButtonType } from 'shared/types/button/button.types';
// import { TMOIconButton } from 'shared/types/button/html-type/button.types';

const enum ButtonSize {
  large = "large",
  small = "small",
}

const enum ButtonType {
  button = "button",
  submit = "submit",
  reset = "reset",
}

interface TMOIconButton {
  a11yLabel: string;
  icon?: string;
  disabled?: boolean;
  size?: ButtonSize;
  type?: ButtonType;
  ariaHidden?: boolean;
  ariaHasPopup?: boolean;
  ariaControls?: string;
  tabIndex?: number;
  ariaExpanded?: boolean;
  id?: string;
  hasBadge?: boolean;
  badgeNumber?: number;
}

const IconButton: React.FC<TMOIconButton> = ({
  a11yLabel,
  icon,
  disabled = false,
  size = ButtonSize.large,
  type = ButtonType.button,
  ariaHidden,
  ariaHasPopup,
  ariaControls,
  tabIndex,
  ariaExpanded,
  id,
  hasBadge = false,
  badgeNumber = 0,
}) => {
  if (!a11yLabel || a11yLabel.trim() === "") {
    return null;
  }

  if (hasBadge && badgeNumber > 0) {
    a11yLabel = `${a11yLabel}, ${badgeNumber >= 100 ? "99+" : badgeNumber}`;
  }

  return (
    <button
      id={id}
      aria-label={a11yLabel}
      aria-disabled={disabled || undefined}
      data-size={size}
      type={type}
      aria-hidden={ariaHidden || undefined}
      aria-haspopup={ariaHasPopup || undefined}
      aria-controls={ariaControls || undefined}
      tabIndex={tabIndex || undefined}
      aria-expanded={ariaExpanded || undefined}
      disabled={disabled}
      className="MagentaA11y-icon-button"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3.50003 17.6344V16.1345H20.5V17.6344H3.50003ZM3.50003 12.7498V11.2499H20.5V12.7498H3.50003ZM3.50003 7.86521V6.36523H20.5V7.86521H3.50003Z" />
      </svg>

      {hasBadge && badgeNumber >= 0 && (
        <span
          className={`MagentaA11y-badge ${
            badgeNumber ? "MagentaA11y-badge--number" : ""
          }`}
        >
          {badgeNumber > 99 ? "99+" : badgeNumber || null}
        </span>
      )}
    </button>
  );
};

export default IconButton;

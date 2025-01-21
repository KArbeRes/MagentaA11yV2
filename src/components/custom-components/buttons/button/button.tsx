import React from 'react';
import { ButtonSize, ButtonType, ButtonVariant } from '../button-types';
import { Icon } from 'shared/Icons';
import { getIcon } from 'utils/getIcon';

import './button.scss';

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  type: ButtonType;
  variant: ButtonVariant;
  decoration?: Icon;
  size: ButtonSize;
  describedBy?: string;
  a11yLabel?: string;
  label: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled,
  type,
  variant,
  decoration,
  size,
  describedBy,
  a11yLabel,
  label,
}) => {
  const LeadingIcon = decoration ? getIcon(decoration) : null;

  return (
    <button
      onClick={onClick}
      aria-disabled={disabled}
      type={type}
      data-size={size}
      aria-describedby={describedBy}
      a11y-label={a11yLabel}
      className={`Magentaa11y-button Magentaa11y-button--${variant}`}>
      {LeadingIcon && <LeadingIcon width="24" height="24" />}
      <span>{label}</span>
    </button>
  );
};

export default Button;

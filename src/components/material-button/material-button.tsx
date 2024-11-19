import React from "react";
import {
  MaterialButtonProps,
  MaterialButtonVariant,
} from "./material-buttons.types";
import "./material-button.scss";

const MaterialButton: React.FC<MaterialButtonProps> = ({
  text,
  variant,
  style,
  onClick,
}) => {
  switch (variant) {
    case MaterialButtonVariant.Outlined:
      return (
        <md-outlined-button onClick={onClick} data-style={style}>
          {text}
        </md-outlined-button>
      );
    case MaterialButtonVariant.Text:
      return (
        <md-text-button onClick={onClick} data-style={style}>
          {text}
        </md-text-button>
      );
    case MaterialButtonVariant.Tonal:
      return (
        <md-filled-tonal-button onClick={onClick} data-style={style}>
          {text}
        </md-filled-tonal-button>
      );
    case MaterialButtonVariant.Filled:
    default:
      return (
        <md-filled-button onClick={onClick} data-style={style}>
          {text}
        </md-filled-button>
      );
  }
};

export default MaterialButton;

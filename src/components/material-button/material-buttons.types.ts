export enum MaterialButtonVariant {
  Filled = "filled",
  Outlined = "outlined",
  Text = "text",
  Tonal = "tonal",
}

export enum MaterialButtonStyle {
  Monochrome = "monochrome",
}

export interface MaterialButtonProps {
  text: string;
  variant: MaterialButtonVariant;
  style?: MaterialButtonStyle;
  onClick?: () => void;
}

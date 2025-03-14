export enum OrientationEnum {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical',
}

export enum DividerModifiers {
  BRANDED = 'tdds-divider--branded',
  STRONG = 'tdds-divider--strong',
}

export type TDivider = {
  className?: DividerModifiers;
  orientation: OrientationEnum;
};

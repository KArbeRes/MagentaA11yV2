export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

export interface TopNavProps {
  navItems: NavItem[];
}

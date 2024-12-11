export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

export interface TopNavProps {
  navItems: NavItem[];
}

export interface SideNavItem {
  label: string;
  name: string;
  type?: "file";
  children?: SideNavItem[];
  generalNotes?: string | null;
  gherkin?: string | null;
  condensed?: string | null;
  developerNotes?: string | null;
}

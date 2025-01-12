export interface MenuItem {
  icon: any;
  label: string;
  path: string;
  subItems?: MenuItem[];
}

export interface NavigationSection {
  title: string;
  items: MenuItem[];
}
export interface SidebarItem {
  name: string;
}

export interface SidebarType {
  id: string;
  title: string;
  count?: number;
  items: SidebarItem[];
}
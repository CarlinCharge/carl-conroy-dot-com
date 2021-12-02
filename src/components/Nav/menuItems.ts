export interface MenuItem {
  title: string;
  url: string;
}

const menuItemsList: MenuItem[] = [
  { title: "Projects", url: "/projects" },
  { title: "About", url: "/about" },
];

export default menuItemsList;

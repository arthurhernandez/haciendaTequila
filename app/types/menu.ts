export type MenuPrice = {
  size?: string;
  price: number;
};

export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  prices: MenuPrice[];
  badges?: string[]; // 👈 THIS is the key
};

export type MenuSection = {
  category: string;
  items: MenuItem[];
};

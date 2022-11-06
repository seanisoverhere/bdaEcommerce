export type Item = {
  itemId: number;
  itemName: string;
  itemPrice: number;
  image?: string;
};

export type ItemList = {
  [key: string]: Array<Item>;
};

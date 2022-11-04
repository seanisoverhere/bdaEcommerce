export type Item = {
  itemName: string;
  itemPrice: number;
  image: string;
};

export type ItemList = {
  [key: string]: Array<Item>;
};

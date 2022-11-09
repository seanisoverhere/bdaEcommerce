export type Item = {
  itemId: number;
  itemName: string;
  itemPrice: number;
  image?: string;
  // cut 
  articleUrl: string
  articleId: string
  productCode: string
  prodName: string
  garmentGroupName: string
  garmentGroupNo: string
  indexGroupName: string
  indexGroupNo: string
  clubMemberStatuss: string
  customerId: string
  age: string
  date: string
  price: string
};

export type ItemList = {
  [key: string]: Array<Item>;
};

export type Item = {
  article_url: string;
  article_id: string;
  product_code: string;
  prod_name: string;
  garment_group_name: string;
  garment_group_no: string;
  index_group_name: string;
  index_group_no: string;
  club_member_status: string;
  customer_id: string;
  age: string;
  date: string;
  price: string;
};

export type ItemList = {
  [key: string]: Array<Item>;
};

export type RecommendationRequest = {
  article_id: string
  date: string
  price: number
  customer_id: string
}
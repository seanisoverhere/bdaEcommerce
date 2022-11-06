import { ItemList } from "@/types/items";
import { CATEGORIES } from "@/utils/constants/enums";

export const mockItems: ItemList = {
  [CATEGORIES.NEW]: [
    {
      itemName: "New T-Shirt",
      itemPrice: 20.0,
      image: "/fashion1.jpg",
    },
    {
      itemName: "New T-Shirt 2",
      itemPrice: 10.0,
      image: "/fashion1.jpg",
    },
    {
      itemName: "New T-Shirt 3",
      itemPrice: 10.0,
      image: "/fashion1.jpg",
    },
    {
      itemName: "New T-Shirt 4",
      itemPrice: 10.0,
      image: "/fashion1.jpg",
    },
  ],
  [CATEGORIES.POPULAR]: [
    {
      itemName: "Popular T-Shirt",
      itemPrice: 20.0,
      image: "/fashion1.jpg",
    },
    {
      itemName: "Popular T-Shirt 2",
      itemPrice: 10.0,
      image: "/fashion1.jpg",
    },
  ],
  [CATEGORIES.SHIRTS]: [
    {
      itemName: "Shirt 1",
      itemPrice: 20.0,
      image: "/fashion1.jpg",
    },
    {
      itemName: "Shirt 2",
      itemPrice: 10.0,
      image: "/fashion1.jpg",
    },
  ],
  [CATEGORIES.JEANS]: [
    {
      itemName: "Jeans 1",
      itemPrice: 20.0,
      image: "/fashion1.jpg",
    },
    {
      itemName: "Jeans 2",
      itemPrice: 10.0,
      image: "/fashion1.jpg",
    },
  ],
  [CATEGORIES.GARMENTS]: [
    {
      itemName: "Garment 1",
      itemPrice: 20.0,
      image: "/fashion1.jpg",
    },
    {
      itemName: "Garment 2",
      itemPrice: 10.0,
      image: "/fashion1.jpg",
    },
  ],
};

import { ItemList } from "@/types/items";
import { CATEGORIES } from "@/utils/constants/enums";

export const mockItems: ItemList = {
  [CATEGORIES.NEW]: [
    {
      itemId: 1,
      itemName: "New T-Shirt",
      itemPrice: 20.0,
      image: "/fashion1.jpg",
    },
    {
      itemId: 1,
      itemName: "New T-Shirt 2",
      itemPrice: 10.0,
      image: "/fashion1.jpg",
    },
    {
      itemId: 1,
      itemName: "New T-Shirt 3",
      itemPrice: 10.0,
      image: "/fashion1.jpg",
    },
  ],
  [CATEGORIES.POPULAR]: [
    {
      itemId: 1,
      itemName: "Popular T-Shirt",
      itemPrice: 20.0,
      image: "/fashion1.jpg",
    },
    {
      itemId: 1,
      itemName: "Popular T-Shirt 2",
      itemPrice: 10.0,
      image: "/fashion1.jpg",
    },
  ],
  [CATEGORIES.SHIRTS]: [
    {
      itemId: 1,
      itemName: "Shirt 1",
      itemPrice: 20.0,
      image: "/fashion1.jpg",
    },
    {
      itemId: 1,
      itemName: "Shirt 2",
      itemPrice: 10.0,
      image: "/fashion1.jpg",
    },
  ],
  [CATEGORIES.JEANS]: [
    {
      itemId: 1,
      itemName: "Jeans 1",
      itemPrice: 20.0,
      image: "/fashion1.jpg",
    },
    {
      itemId: 1,
      itemName: "Jeans 2",
      itemPrice: 10.0,
      image: "/fashion1.jpg",
    },
  ],
  [CATEGORIES.GARMENTS]: [
    {
      itemId: 1,
      itemName: "Garment 1",
      itemPrice: 20.0,
      image: "/fashion1.jpg",
    },
    {
      itemId: 1,
      itemName: "Garment 2",
      itemPrice: 10.0,
      image: "/fashion1.jpg",
    },
  ],
};

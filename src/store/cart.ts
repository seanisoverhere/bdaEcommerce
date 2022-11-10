import { Item } from "@/types/items";
import { atom } from "jotai";

export const cartAtom = atom<Array<Item>>([]);

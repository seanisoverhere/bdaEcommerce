import { Item } from "@/types/items";
import { atom } from 'jotai'

export const itemAtom = atom<Array<Item>>([])
import { Item } from '@/types/items'
import { atom } from 'jotai'

export const recommendationAtom = atom<Array<Item>>([])
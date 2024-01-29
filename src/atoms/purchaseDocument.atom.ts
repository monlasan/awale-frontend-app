import { IClient } from '@/interfaces';
import { atom } from 'jotai';

// Create your atoms and derivatives
export const purchaseDocumentClientAtom = atom<IClient | null>(null);
export const purchaseDocumentArticlesAtom = atom({
  articles: [],
});
// const uppercaseAtom = atom(
//   (get) => get(textAtom).toUpperCase()
// )

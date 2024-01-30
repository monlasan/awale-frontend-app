import { IClient } from '@/interfaces';
import { atom } from 'jotai';

export const purchaseDocumentAtom = atom<any>(null);
// export const purchaseDocumentClientAtom = atom<IClient | null>(null);
export const purchaseDocumentArticlesAtom = atom<any[]>([]);

// const uppercaseAtom = atom(
//   (get) => get(textAtom).toUpperCase()
// )

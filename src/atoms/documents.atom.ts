import { groupItems } from '@/lib/utils';
import { atom } from 'jotai';

export const isUpdatingDocumentClient = atom(false);
export const isUpdatingDocumentCart = atom(false);

export const documentCart = atom<any>([]);
export const groupedCart = atom((get) => {
  const items = groupItems(get(documentCart));
  return items;
});

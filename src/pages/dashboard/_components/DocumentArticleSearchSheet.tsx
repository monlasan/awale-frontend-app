import { Button } from '@/components/ui/button';
import { Check, Plus } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import React from 'react';
import { Input } from '@/components/ui/input';
import DocumentArticleListSearch from './DocumentArticleListSearch';
import {
  documentCart,
  groupedCart,
  isUpdatingDocumentCart,
} from '@/atoms/documents.atom';
import { useAtom } from 'jotai';
import { mutate } from 'swr';
import { purchaseDocumentAtom } from '@/atoms/purchaseDocument.atom';
import { toast } from 'sonner';
import folderService from '@/services/http/folder.service';

const DocumentArticlesSearchSheet = () => {
  const [atomDocument, setAtomDocument] = useAtom(purchaseDocumentAtom);
  const [isUpdatingCart, setIsUpdatingCart] = useAtom(isUpdatingDocumentCart);
  const [raw_articles_atom, set_raw_articles_atom] = useAtom(documentCart);
  const [grouped_articles_atom, set_grouped_articles_atom] =
    useAtom(groupedCart);

  const handleUpdateDocumentCart = async () => {
    if (grouped_articles_atom.length === 0) return;
    setIsUpdatingCart(true);
    await folderService.updateFolderCart({
      folderId: atomDocument.folder.id,
      cartData: grouped_articles_atom,
    });
    mutate(['get_document', atomDocument.id]);
    toast.success('Document cart updated.');
    setIsUpdatingCart(false);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          onClick={() => set_raw_articles_atom((prev: any) => (prev = []))}
          variant='outline'
          size='sm'
        >
          {' '}
          <Plus className='mr-2' /> Add an article
        </Button>
      </SheetTrigger>
      <SheetContent side='top'>
        <SheetHeader className='mb-2'>
          <SheetTitle>Articles</SheetTitle>
          <div className='grid grid-cols-2 gap-6'>
            <div>
              <SheetDescription className='mb-1'>
                Search an article by name or reference
              </SheetDescription>
              <form className='flex'>
                <Input placeholder='Article name or reference' />
                <Button variant='dark'>Search</Button>
              </form>
            </div>
            <SheetClose asChild>
              <Button
                onClick={() => handleUpdateDocumentCart()}
                className='ml-auto mt-auto'
                disabled={grouped_articles_atom.length === 0 ? true : false}
              >
                <Check className='mr-2' /> Validate
              </Button>
            </SheetClose>
          </div>
        </SheetHeader>
        <DocumentArticleListSearch />
      </SheetContent>
    </Sheet>
  );
};

export default DocumentArticlesSearchSheet;

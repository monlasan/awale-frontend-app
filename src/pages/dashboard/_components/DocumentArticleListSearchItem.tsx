import React from 'react';
import { purchaseDocumentAtom } from '@/atoms/purchaseDocument.atom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SheetClose } from '@/components/ui/sheet';
import { useAtom } from 'jotai';
import { Check, Minus, Plus } from 'lucide-react';
import { documentCart, groupedCart } from '@/atoms/documents.atom';
import { formatPrice } from '@/lib/utils';

const DocumentArticleListSearchItem = ({ article }: { article: any }) => {
  const [raw_articles_atom, setRawArticlesAtom] = useAtom(documentCart);
  const [grouped_articles_atom, setGroupedArticles] = useAtom(groupedCart);
  const [atomDocument, setAtomDocument] = useAtom(purchaseDocumentAtom);
  const [quantity, setQuantity] = React.useState(0);

  const retrieveArticleQty = () => {
    if (quantity === 0) return;
    setQuantity((prev) => prev - 1);
  };
  const addArticleQty = () => {
    setQuantity((prev) => prev + 1);
  };

  const addToCart = (article: any) => {
    // remove old quantity
    let cleanedCart = raw_articles_atom.filter(
      (art: any) => art.id !== article.id
    );
    setRawArticlesAtom((prev: any) => (prev = cleanedCart));

    // // let itemAlreadyExistInCart = raw_articles_atom.filter(
    // //   (art: any) => art.id === article.id
    // // );
    // if (raw_articles_atom.length === quantity) return;
    for (let i = 0; i < quantity; i++) {
      setRawArticlesAtom((prev: any) => (prev = [...prev, article]));
    }
  };

  return (
    <div className='p-2 flex items-center gap-3 border bg-accent/70'>
      <Avatar className='w-14 h-14'>
        {article.photo_url && article.photo_url.length > 0 && (
          <AvatarImage src={article.photo_url} alt={'#' + article.name} />
        )}
        <AvatarFallback className='text-black uppercase dark:text-zinc-200'>
          {article.name[0] + '' + article.name[1]}
        </AvatarFallback>
      </Avatar>
      <div className='flex flex-1 flex-col'>
        <b>{article.name}</b>
        <span className='opacity-70'>{formatPrice(article.price)}</span>
      </div>
      <div className='flex items-center'>
        <Button
          onClick={retrieveArticleQty}
          className='w-7 h-7'
          size='icon'
          variant='outline'
        >
          <Minus size={18} />
        </Button>
        <div className='w-10 h-7 text-sm font-medium flex border-t border-b bg-white dark:bg-secondary justify-center items-center'>
          {quantity}
        </div>
        <Button
          onClick={addArticleQty}
          className='w-7 h-7'
          size='icon'
          variant='outline'
        >
          <Plus size={18} />
        </Button>
        <Button
          disabled={quantity === 0}
          onClick={() => addToCart(article)}
          className='w-7 ml-2 h-7'
          size='icon'
          variant='default'
        >
          <Check size={18} />
        </Button>
        {/* <Button
          onClick={() => setRawArticlesAtom([])}
          className='w-7 ml-2 h-7'
          size='icon'
          variant='destructive'
        >
          <Minus size={18} />
        </Button> */}
      </div>
    </div>
  );
};

export default DocumentArticleListSearchItem;

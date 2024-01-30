import { purchaseDocumentAtom } from '@/atoms/purchaseDocument.atom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { SheetClose } from '@/components/ui/sheet';
import { useAtom } from 'jotai';
import { Check } from 'lucide-react';

const DocumentArticleListSearchItem = ({ article }: { article: any }) => {
  const [atomDocument, setAtomDocument] = useAtom(purchaseDocumentAtom);

  return (
    <div className='p-3 flex items-center gap-3 border bg-accent/70'>
      <Avatar>
        {article.photo_url && article.photo_url.length > 0 && (
          <AvatarImage src={article.photo_url} alt={'#' + article.name} />
        )}
        <AvatarFallback className='text-black dark:text-zinc-200'>
          {article.name[0]}
        </AvatarFallback>
      </Avatar>
      <div className='flex flex-1 flex-col'>
        <b>{article.name}</b>
        <span className='opacity-70'>{article.price}</span>
      </div>
      <SheetClose asChild>
        <Button size='icon'>
          <Check size={21} />
        </Button>
      </SheetClose>
    </div>
  );
};

export default DocumentArticleListSearchItem;

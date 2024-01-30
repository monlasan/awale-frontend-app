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

const DocumentArticlesSearchSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline' size='sm'>
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
            <Button className='ml-auto mt-auto'>
              {' '}
              <Check className='mr-2' /> Validate
            </Button>
          </div>
        </SheetHeader>
        <DocumentArticleListSearch />
      </SheetContent>
    </Sheet>
  );
};

export default DocumentArticlesSearchSheet;

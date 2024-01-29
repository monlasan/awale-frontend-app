import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import DocumentClientsListSearch from './DocumentClientsListSearch';

const DocumentClientsSearchSheet = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader className='mb-2'>
          <SheetTitle>Add a client</SheetTitle>
          <form>
            <Input placeholder='Search a user' />
          </form>
        </SheetHeader>
        <DocumentClientsListSearch />
      </SheetContent>
    </Sheet>
  );
};

export default DocumentClientsSearchSheet;

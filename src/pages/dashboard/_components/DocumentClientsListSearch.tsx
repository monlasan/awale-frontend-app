import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { SheetClose } from '@/components/ui/sheet';
import useSearchClients from '@/hooks/requests/useSearchClients';
import { Check, Loader } from 'lucide-react';
import React from 'react';
import DocumentClientListSearchItem from './DocumentClientListSearchItem';
import { IClient } from '@/interfaces';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useAtom } from 'jotai';
import { purchaseDocumentClientAtom } from '@/atoms/purchaseDocument.atom';

const DocumentClientsListSearch = () => {
  const { data, error, isLoading } = useSearchClients();
  const [client, setClient] = useAtom(purchaseDocumentClientAtom);
  console.log('CLIENT FETCHED', data);

  const handleClientPickClose = (clientInfos: IClient): void => {
    setClient((prev) => (prev = clientInfos));
  };

  if (error) {
    return (
      <div className='p-3 border-destructive border bg-destructive/10 text-destructive'>
        <p className='text-center'>
          Something went wrong while fetching clients!
        </p>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className='p-6 flex justify-center items-center'>
        <Loader className='animate-spin text-primary' size={22} />
      </div>
    );
  }
  return (
    <ScrollArea className='h-full'>
      <div className='flex flex-col gap-2'>
        {data && data.length === 0 && (
          <div className='p-3 flex justify-center items-center gap-3 border bg-secondary'>
            <span className='opacity-60'>No entry</span>
          </div>
        )}
        {data.length > 0 &&
          data.map((client: IClient) => (
            <DocumentClientListSearchItem
              key={client.id}
              client={client}
              action={handleClientPickClose}
            />
          ))}
      </div>
    </ScrollArea>
  );
};

export default DocumentClientsListSearch;

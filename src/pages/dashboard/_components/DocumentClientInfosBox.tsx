import React from 'react';
import DocumentClientsSearchSheet from './DocumentClientsSearchSheet';
import { Button } from '@/components/ui/button';
import { PenLine, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { IClient } from '@/interfaces';

const DocumentClientInfosBox = ({ client }: { client: IClient | null }) => {
  return (
    <div className='flex flex-1 dark:bg-secondary bg-accent/40 min-w-[254px] flex-col py-4 px-4 gap-1 outline outline-1 outline-border'>
      <div>
        <span className='text-xs opacity-60'>Client</span>
        <br />
        {/* <span className='text-sm font-medium'>#FLD-8AZ7D6</span> */}

        {!client && (
          <DocumentClientsSearchSheet>
            <Button size='sm' variant='dark'>
              <User className='mr-2' size={20} />
              Add a client
            </Button>
          </DocumentClientsSearchSheet>
        )}

        {client && (
          <div className='flex items-center gap-3'>
            <div className='border bg-white dark:bg-secondary p-2 flex items-center gap-3'>
              <Avatar>
                {client.avatar_url.length > 0 && (
                  <AvatarImage
                    src={client.avatar_url}
                    alt={'@' + client.first_name + ' ' + client.last_name}
                  />
                )}
                <AvatarFallback className='text-black dark:text-zinc-200'>
                  {client.first_name[0] + '' + client.last_name[0]}
                </AvatarFallback>
              </Avatar>
              <div className='flex flex-col'>
                <b className='text-sm font-semibold'>
                  {client.first_name + ' ' + client.last_name}
                </b>
                <span className='text-xs opacity-50 font-medium'>
                  {client.phone_number}
                </span>
              </div>
              <div className='ml-auto'>
                <DocumentClientsSearchSheet>
                  <Button size='icon' className='ml-auto' variant='dark'>
                    <PenLine size={19} />
                  </Button>
                </DocumentClientsSearchSheet>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        <span className='text-xs opacity-60'>Delivery Address</span>
        <br />
        {client ? (
          <span className='text-sm font-medium'>{client.delivery_address}</span>
        ) : (
          <span className='text-sm font-medium'>---</span>
        )}
      </div>
    </div>
  );
};

export default DocumentClientInfosBox;

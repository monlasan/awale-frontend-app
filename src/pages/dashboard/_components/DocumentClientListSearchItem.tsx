import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { SheetClose } from '@/components/ui/sheet';
import { IClient } from '@/interfaces';
import { Check } from 'lucide-react';

const DocumentClientListSearchItem = ({
  client,
  action,
}: {
  client: IClient;
  action: (client: IClient) => void;
}) => {
  return (
    <div className='p-3 flex items-center gap-3 border bg-secondary'>
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
      <div className='flex flex-1 flex-col'>
        <b>{client.first_name + ' ' + client.last_name}</b>
        <span className='opacity-70'>{client.phone_number}</span>
      </div>
      <SheetClose asChild>
        <Button size='icon' onClick={() => action(client)}>
          <Check size={21} />
        </Button>
      </SheetClose>
    </div>
  );
};

export default DocumentClientListSearchItem;

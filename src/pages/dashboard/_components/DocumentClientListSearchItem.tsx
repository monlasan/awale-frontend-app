import { isUpdatingDocumentClient } from '@/atoms/documents.atom';
import { purchaseDocumentAtom } from '@/atoms/purchaseDocument.atom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { SheetClose } from '@/components/ui/sheet';
import { IClient } from '@/interfaces';
import folderService from '@/services/http/folder.service';
import { useAtom } from 'jotai';
import { Check } from 'lucide-react';
import { toast } from 'sonner';
import { mutate } from 'swr';

const DocumentClientListSearchItem = ({ client }: { client: IClient }) => {
  const [atomDocument, setAtomDocument] = useAtom(purchaseDocumentAtom);
  const [isUpdatingClient, setIsUpdatingClient] = useAtom(
    isUpdatingDocumentClient
  );
  const handleClientPickClose = async (clientInfos: IClient) => {
    setIsUpdatingClient(true);
    await folderService.updateFolderClient({
      folderId: atomDocument.folder.id,
      clientInfos,
    });
    mutate(['get_document', atomDocument.id]);
    toast.success('Document client updated.');
    setIsUpdatingClient(false);
  };

  return (
    <div className='p-3 flex items-center gap-3 border bg-accent/70'>
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
        <Button size='icon' onClick={() => handleClientPickClose(client)}>
          <Check size={21} />
        </Button>
      </SheetClose>
    </div>
  );
};

export default DocumentClientListSearchItem;

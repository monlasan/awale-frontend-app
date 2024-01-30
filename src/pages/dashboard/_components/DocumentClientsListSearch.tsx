import useSearchClients from '@/hooks/requests/useSearchClients';
import { Loader } from 'lucide-react';
import DocumentClientListSearchItem from './DocumentClientListSearchItem';
import { IClient } from '@/interfaces';
import { ScrollArea } from '@/components/ui/scroll-area';

const DocumentClientsListSearch = () => {
  const { data, error, isLoading } = useSearchClients();
  console.log('CLIENT FETCHED', data);

  if (error) {
    return (
      <div className='p-3 border-destructive border bg-destructive/10 text-destructive'>
        <p className='text-center'>
          Something went wrong while fetching the clients!
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
      <div className='flex flex-col mt-4 gap-2'>
        {data && data.length === 0 && (
          <div className='p-3 flex justify-center items-center gap-3 border bg-secondary'>
            <span className='opacity-60'>No entry</span>
          </div>
        )}
        {data.length > 0 &&
          data.map((client: IClient) => (
            <DocumentClientListSearchItem key={client.id} client={client} />
          ))}
      </div>
    </ScrollArea>
  );
};

export default DocumentClientsListSearch;

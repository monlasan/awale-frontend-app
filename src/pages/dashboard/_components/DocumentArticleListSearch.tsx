import { Loader } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import DocumentArticleListSearchItem from './DocumentArticleListSearchItem';
import useSearchArticles from '@/hooks/requests/useSearchArticles';
import { columns, Article } from '../_components/DTGroupedArticleListColumns';
import { DataTable } from '@/components/ui/data-table';

const DocumentArticleListSearch = () => {
  const groupedArticles = [
    {
      id: 'gg-444-xZZBOOZAKA-ID-1',
      name: 'xZZBOOZAKA',
      quantity: 2,
      total_price: 120,
    },
    {
      id: 'gg-444-xZZLOOME-ID-2',
      name: 'xZZKLOOME',
      quantity: 1,
      total_price: 19.99,
    },
    {
      id: 'gg-444-ZZLOOME-ID-2',
      name: 'xZZKLOOME',
      quantity: 1,
      total_price: 19.99,
    },
  ];
  const { data, error, isLoading } = useSearchArticles();

  if (error) {
    return (
      <div className='p-3 border-destructive border bg-destructive/10 text-destructive'>
        <p className='text-center'>
          Something went wrong while fetching the articles!
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
    <div className='grid grid-cols-2 gap-6'>
      <ScrollArea className='h-[400px]'>
        <div className='flex flex-col mt-4 gap-2'>
          {data && data.length === 0 && (
            <div className='p-3 flex justify-center items-center gap-3 border bg-secondary'>
              <span className='opacity-60'>No entry</span>
            </div>
          )}
          {data.length > 0 &&
            data.map((article: any) => (
              <DocumentArticleListSearchItem
                key={article.id}
                article={article}
              />
            ))}
        </div>
      </ScrollArea>
      <ScrollArea>
        <div className='flex flex-col mt-4 '>
          <div className='p-3 border border-b-0'>
            <h3 className='text-xl font-bold '>Cart</h3>
          </div>
          <DataTable columns={columns} data={groupedArticles} />
        </div>
      </ScrollArea>
    </div>
  );
};

export default DocumentArticleListSearch;

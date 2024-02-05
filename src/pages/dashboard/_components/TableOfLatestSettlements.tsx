import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import useSearchPayments from '@/hooks/requests/useSearchPayments';
import { columns, Payment } from '../_components/DTLatestPaymentsColumns';
import React from 'react';
import { DataTable } from '@/components/ui/data-table';
import { Loader } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

const TableOfLatestSettlements = () => {
  const { data, error, isLoading } = useSearchPayments();
  return (
    <Card className='text-xs h-full min-w-[300px] font-medium flex-1'>
      <CardHeader>
        <CardTitle className='text-md'>Latest settlements</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className='flex p-6 justify-center h-full'>
            <Loader size={30} className='animate-spin text-primary' />
          </div>
        ) : (
          <ScrollArea className='max-h-[258px]'>
            <DataTable columns={columns} data={data} />
          </ScrollArea>
        )}
      </CardContent>
    </Card>
  );
};

export default TableOfLatestSettlements;

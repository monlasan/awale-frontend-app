import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart } from '@tremor/react';
import { Loader } from 'lucide-react';
import React from 'react';

const data = [
  {
    id: '7b2b72fd-ae54-4d8b-8a73-2e4129bdaae1',
    reference: 'INV-8411c4acc4',
    name: 'Stock Nairobi',
    address: 'C/SB 5246 Express NIT',
    description:
      'This is a place to store all the product manufactured in Nairobi',
    physical_quantity: 4,
    limit: 5,
    created_at: '2024-01-26T22:21:40.306Z',
    updated_at: '2024-01-26T22:21:40.306Z',
  },
  {
    id: '7b2b72fd-ae54-4d8b-8a73-2e4129bdaae1',
    reference: 'INV-8411c4acc4',
    name: 'Stock E',
    address: 'C/SB 5246 Express NIT',
    description:
      'This is a place to store all the product manufactured in Nairobi',
    physical_quantity: 4,
    limit: 5,
    created_at: '2024-01-26T22:21:40.306Z',
    updated_at: '2024-01-26T22:21:40.306Z',
  },
  {
    id: '7b2b72fd-ae54-4d8b-8a73-2e4129bdaae1',
    reference: 'INV-8411c4acc4',
    name: 'Stock vv',
    address: 'C/SB 5246 Express NIT',
    description:
      'This is a place to store all the product manufactured in Nairobi',
    physical_quantity: 4,
    limit: 5,
    created_at: '2024-01-26T22:21:40.306Z',
    updated_at: '2024-01-26T22:21:40.306Z',
  },
  {
    id: '7ba2b72fd-ae54-4d8b-8a73-2e4129bdaae1',
    reference: 'INV-8411c4acc4',
    name: 'Stock Parakou',
    address: 'C/SB 5246 Express NIT',
    description:
      'This is a place to store all the product manufactured in Nairobi',
    physical_quantity: 2,
    limit: 5,
    created_at: '2024-01-26T22:21:40.306Z',
    updated_at: '2024-01-26T22:21:40.306Z',
  },
  {
    id: '7ba2b72fd-ae54-4d8b-8a73-2e4129bdaae1',
    reference: 'INV-8411c4acc4',
    name: 'Stock a',
    address: 'C/SB 5246 Express NIT',
    description:
      'This is a place to store all the product manufactured in Nairobi',
    physical_quantity: 1,
    limit: 5,
    created_at: '2024-01-26T22:21:40.306Z',
    updated_at: '2024-01-26T22:21:40.306Z',
  },
];

const transformedData = data.map((inventory) => ({
  name: inventory.name,
  'Number of articles': inventory.physical_quantity,
  Limit: inventory.limit,
}));

const ChartOfInventories = () => {
  return (
    <Card className='text-xs min-w-[300px] font-medium flex-1'>
      <CardHeader>
        <CardTitle className='text-md'>Inventories state</CardTitle>
      </CardHeader>
      <CardContent>
        {/* <div className='flex p-6 justify-center items-center mb-4 h-[200px] w-full'>
          <Loader size={30} className='animate-spin text-primary' />
        </div> */}
        <BarChart
          data={transformedData}
          index='name'
          categories={['Number of articles', 'Limit']}
          colors={['emerald-300', 'indigo-300']}
          yAxisWidth={48}
        />
      </CardContent>
    </Card>
  );
};

export default ChartOfInventories;

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart } from '@tremor/react';
import { Loader } from 'lucide-react';
import React from 'react';

const data = [
  {
    id: '7b2b72fd-ae54-4d8b-8a73-2e4129bdaae1',
    name: 'Stock Nord',
    physical_quantity: 4,
    limit: 5,
  },
  {
    id: '7b2b72fd-ae54-4d8b-8a73-2e4129bdaae1',
    name: 'Stock Sud',
    physical_quantity: 4,
    limit: 3,
  },
  {
    id: '7b2b72fd-ae54-4d8b-8a73-2e4129bdaae1',
    name: 'Stock Ouest',
    physical_quantity: 4,
    limit: 5,
  },
  {
    id: '7ba2b72fd-ae54-4d8b-8a73-2e4129bdaae1',
    name: 'Stock Est',
    physical_quantity: 2,
    limit: 7,
  },
  {
    id: '7ba2b72fd-ae54-4d8b-8a73-2e4129bdaae1',
    name: 'Stock Main',
    physical_quantity: 1,
    limit: 3,
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

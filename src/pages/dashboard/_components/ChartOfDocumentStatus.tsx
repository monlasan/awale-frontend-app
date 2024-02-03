import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart } from '@tremor/react';
import { doc_status } from '@/lib/constants';
import {
  formatOption,
  generateRandomColor,
  processStatusColor,
} from '@/lib/utils';
import { Loader } from 'lucide-react';
import React from 'react';
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   CartesianGrid,
//   ResponsiveContainer,
// } from 'recharts';

const documentData = [
  {
    status: 'IN_WRITTING',
  },
  {
    status: 'IN_WRITTING',
  },
  {
    status: 'IN_WRITTING',
  },
  {
    status: 'IN_WRITTING',
  },
  {
    status: 'IN_WRITTING',
  },
  {
    status: 'IS_READY',
  },
  {
    status: 'IS_REJECTED',
  },
  {
    status: 'IS_REJECTED',
  },
  {
    status: 'IS_REJECTED',
  },
  {
    status: 'IS_READY',
  },
  {
    status: 'IS_LOCKED',
  },
  {
    status: 'IS_VALIDATED',
  },
  {
    status: 'IS_VALIDATED',
  },
  {
    status: 'IS_VALIDATED',
  },
];

// Transform data for Recharts
const documentStatusCounts = documentData.reduce((acc, document) => {
  // @ts-ignore
  acc[document.status] = (acc[document.status] || 0) + 1;
  return acc;
}, {});

const data = Object.keys(documentStatusCounts).map((status) => ({
  status: formatOption(status, doc_status),
  // color: processStatusColor(status),
  // @ts-ignore
  Count: documentStatusCounts[status],
}));

const ChartOfDocumentStatus = () => {
  return (
    <Card className='text-xs min-w-[300px] font-medium flex-1'>
      <CardHeader>
        <CardTitle className='text-md'>Document status overview</CardTitle>
      </CardHeader>
      <CardContent>
        {/* <div className='flex p-6 justify-center items-center mb-4 h-[200px] w-full'>
          <Loader size={30} className='animate-spin text-primary' />
        </div> */}
        <BarChart
          data={data}
          index='status'
          categories={['Count']}
          // categories={["Number of documents"]}
          colors={['emerald-300']}
          yAxisWidth={48}
        />
      </CardContent>
    </Card>
    // <Card className='p-12 pb-4 text-xs font-medium pt-3 pl-0'>
    //   <h3 className='text-md font-semibold pt-0 pb-4 px-6'>
    //     Document status overview
    //   </h3>

    //   <BarChart width={450} height={200} data={data}>
    //     <CartesianGrid strokeDasharray='3 3' />
    //     <XAxis dataKey='status' />
    //     <YAxis />
    //     <Tooltip />
    //     <Legend />
    //     <Bar dataKey='count' fill='#2fc17590' />
    //   </BarChart>
    // </Card>
  );
};

export default ChartOfDocumentStatus;

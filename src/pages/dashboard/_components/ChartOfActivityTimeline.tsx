import { Card, CardContent } from '@/components/ui/card';
import { formatDate } from '@/lib/utils';
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

// Fetch activity data from your database using Prisma Client
// This query should include the timestamp of each activity
// For example:
// const activities = await prisma.activity.findMany({ ... });

// Dummy data for demonstration
const activities = [
  { timestamp: formatDate('2024-01-01T08:00:00Z'), count: 5 },
  { timestamp: formatDate('2024-01-02T08:00:00Z'), count: 10 },
  { timestamp: formatDate('2024-01-03T08:00:00Z'), count: 8 },
  // Add more activity data here...
];

const ChartOfActivityTimeline = () => {
  return (
    <Card className='p-12 text-xs font-medium pl-0'>
      {/* <LineChart data={activities}> */}
      <LineChart width={600} height={200} data={activities}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='timestamp' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type='monotone'
          dataKey='count'
          name='Activity'
          stroke='#8884d8'
        />
      </LineChart>
    </Card>
  );
};

export default ChartOfActivityTimeline;

// import React from 'react'
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import DashboardLayout from '@/layouts/DashboardLayout';
import ChartOfInventories from './_components/ChartOfInventories';
import ChartOfUserDistribution from './_components/ChartOfUserDistribution';
import ChartOfDocumentStatus from './_components/ChartOfDocumentStatus';
import ChartOfActivityTimeline from './_components/ChartOfActivityTimeline';
import TableOfLatestSettlements from './_components/TableOfLatestSettlements';
const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className='lg:px-14 py-4 pb-12 h-full flex flex-col'>
        <div className='flex-1 flex flex-col gap-3 px-4 py-3'>
          <h2 className='text-2xl font-semibold'>Dashboard</h2>
          <div className='flex gap-3 flex-wrap'>
            <ChartOfInventories />
            <ChartOfDocumentStatus />
          </div>

          {/* <div className='flex-1 flex flex-col gap-3 sm:flex-row sm:items-start'> */}
          <div className='flex gap-3 flex-wrap items-start'>
            <ChartOfUserDistribution />
            <TableOfLatestSettlements />
          </div>
          {/* </div> */}
        </div>
        {/* <ChartOfActivityTimeline /> */}
        {/* <Card className='mt-3'>
            <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>
            Deploy your new project in one-click.
            </CardDescription>
            </CardHeader>
            
          </Card> */}
        {/* <div className='px-4 py-3 w-full max-w-80 bg-white dark:bg-secondary text-secondary-foreground border-l border-border'>
          <p>Lorem, ipsum dolor.</p>
        </div> */}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;

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
const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className='flex h-full'>
        <div className='flex-1 px-4 py-3'>
          <h2 className='text-2xl font-semibold'>Dashboard</h2>
          <Card className='mt-3'>
            <CardHeader>
              <CardTitle>Create project</CardTitle>
              <CardDescription>
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeader>
            {/* <CardContent></CardContent>
          <CardFooter className='flex justify-between'>
            <Button variant='outline'>Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter> */}
          </Card>
        </div>
        {/* <div className='px-4 py-3 w-full max-w-80 bg-white dark:bg-secondary text-secondary-foreground border-l border-border'>
          <p>Lorem, ipsum dolor.</p>
        </div> */}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;

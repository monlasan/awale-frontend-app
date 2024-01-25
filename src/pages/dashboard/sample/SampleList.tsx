import React from 'react';
import DashboardLayout from '@/layouts/DashboardLayout';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Plus } from 'lucide-react';
import { DataTable } from '@/components/ui/data-table';
import { columns, Payment } from './DTSampleColumns';

const ContactList = () => {
  const data: Payment[] = [
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
  ];

  return (
    <DashboardLayout>
      <div className='px-4 py-4 h-full flex flex-col gap-3'>
        <Card>
          <CardHeader className='flex py-3 pb-4 flex-row justify-between items-center'>
            <CardTitle>Liste des contacts</CardTitle>
            <Button>
              <Plus size={22} className='mr-2' /> Ajouter un contact
            </Button>
          </CardHeader>
          <div className='m mb-6 p-6 bg-zinc-400/10 border-t border-b '>
            FullName, reference, number, roles, actions
          </div>
          <CardContent>
            <DataTable columns={columns} data={data} />
          </CardContent>
        </Card>
        {/* <Card className='p-6'>
          Lorem
        </Card> */}
      </div>
    </DashboardLayout>
  );
};

export default ContactList;

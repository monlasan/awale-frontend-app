import React from 'react';
import { Loader, Plus, Search } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { DataTable } from '@/components/ui/data-table';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { columns, Contact } from '../_components/DTContactListColumns';
import DashboardLayout from '@/layouts/DashboardLayout';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import useSearchContacts from '@/hooks/requests/useSearchContacts';
import { Link } from 'react-router-dom';

const ContactList = () => {
  const { data, error, isLoading } = useSearchContacts();
  // console.log('CONTACTS', data);
  // const data: Contact[] = [
  //   {
  //     id: '728ed52f',
  //     reference: 'CON-728ed52f',
  //     fullName: 'Sanny Khaled',
  //     email: 'khaledsanny@example.com',
  //     phone: '+229 61640292',
  //     avatarUrl: 'https://github.com/shadcn.png',
  //     roles: ['admin'],
  //   },
  //   {
  //     id: '828ed52f',
  //     reference: 'CON-728ed52f',
  //     fullName: 'Darell AGBODO',
  //     email: 'darell66@example.com',
  //     phone: '+229 95474256',
  //     avatarUrl: '',
  //     roles: ['admin', 'commercial'],
  //   },
  // ];

  if (error) {
    return (
      <DashboardLayout>
        <div className='px-14 py-4 h-full flex flex-col'>
          <div className='p-8 border-destructive border bg-destructive text-destructive-foreground'>
            <p>Something went wrong !</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }
  return (
    <DashboardLayout>
      <div className='px-14 py-4 h-full flex flex-col'>
        <Card>
          <CardHeader className='flex py-3 pb-4 flex-row justify-between items-center'>
            <CardTitle>Contacts list</CardTitle>
            <Link to='/contact/new'>
              <Button>
                <Plus size={22} className='mr-2' /> Add a contact
              </Button>
            </Link>
          </CardHeader>

          {/* <CardContent>
            <DataTable columns={columns} data={data} />
          </CardContent> */}
        </Card>
        <div className='grid gap-4 p-6 bg-white dark:bg-secondary border-l border-r border-b mb-4'>
          <div className='grid grid-cols-2 gap-4 gap-y-1 flex-1'>
            <div>
              <Label htmlFor='fullName'>Name</Label>
              <Input
                type='fullName'
                id='fullName'
                placeholder='Search by name'
              />
            </div>
            <div>
              <Label htmlFor='role'>Roles</Label>
              <Select>
                <SelectTrigger id='role'>
                  <SelectValue placeholder='Select a role' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value='ADMIN'>Administratorr</SelectItem>
                    <SelectItem value='COMMERCIAL'>Commercial</SelectItem>
                    <SelectItem value='PROVIDER'>Provider</SelectItem>
                    <SelectItem value='CONSTRUCTOR'>Constructor</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <Button>
              <Search size={20} className='mr-2' />
              Search
            </Button>
          </div>
        </div>
        {isLoading ? (
          <div className='flex p-6 justify-center'>
            <Loader size={30} className='animate-spin' />
          </div>
        ) : (
          <div className='bg-white dark:bg-secondary'>
            <DataTable columns={columns} data={data} />
          </div>
        )}
        {/* <Card className='p-6'>
          Lorem
        </Card> */}
      </div>
    </DashboardLayout>
  );
};

export default ContactList;

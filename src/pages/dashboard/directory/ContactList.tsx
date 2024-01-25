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
import { columns, Contact } from '../components/DTContactListColumns';
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

const ContactList = () => {
  const { data, error, isLoading } = useSearchContacts();
  console.log('CONTACTS', data);
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

  return (
    <DashboardLayout>
      <div className='px-4 py-4 h-full flex flex-col '>
        <Card>
          <CardHeader className='flex py-3 pb-4 flex-row justify-between items-center'>
            <CardTitle>Liste des contacts</CardTitle>
            <Button>
              <Plus size={22} className='mr-2' /> Ajouter un contact
            </Button>
          </CardHeader>

          {/* <CardContent>
            <DataTable columns={columns} data={data} />
          </CardContent> */}
        </Card>
        <div className='grid gap-4 p-6 bg-zinc-400/10 border-l border-r border-b mb-4'>
          <div className='grid grid-cols-2 gap-4 gap-y-1 flex-1'>
            <div>
              <Label htmlFor='fullName'>Nom/Prénoms</Label>
              <Input
                type='fullName'
                id='fullName'
                placeholder='Rechercher par nom/prénoms'
              />
            </div>
            <div>
              <Label htmlFor='role'>Roles</Label>
              <Select>
                <SelectTrigger id='role'>
                  <SelectValue placeholder='Sélectionner un role' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value='admin'>Administrateur</SelectItem>
                    <SelectItem value='commercial'>Commercial</SelectItem>
                    <SelectItem value='provider'>Fournisseur</SelectItem>
                    <SelectItem value='constructor'>Constructeur</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <Button>
              <Search size={20} className='mr-2' />
              Rechercher
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

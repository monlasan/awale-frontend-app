import React from 'react';
import { Plus, Search } from 'lucide-react';
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
import { columns, Sale } from '../_components/DTSaleListColumns';
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

const SaleList = () => {
  const data: Sale[] = [
    {
      id: '728ed52f',
      type: 'Facture',
      reference: 'FAC-728ed52f',
      client_fullname: 'Sanny Khaled',
      amount: 5000,
      state: 'inWritting',
      created_at: '2022-01-01',
      updated_at: '2022-02-01',
    },
  ];

  return (
    <DashboardLayout>
      <div className='px-14 py-4 h-full flex flex-col'>
        <Card>
          <CardHeader className='flex py-3 pb-3 flex-row justify-between items-center'>
            <CardTitle>Purchase documents</CardTitle>
          </CardHeader>

          {/* <CardContent>
            <DataTable columns={columns} data={data} />
          </CardContent> */}
        </Card>
        <div className='grid gap-4 p-6 bg-white dark:bg-secondary border-l border-r border-b mb-4'>
          {/* <div className='grid grid-cols-2 gap-4 gap-y-1 flex-1'>
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
                    <SelectItem value='collaborator'>Collaborateur</SelectItem>
                    <SelectItem value='client'>Client</SelectItem>
                    <SelectItem value='provider'>Fournisseur</SelectItem>
                    <SelectItem value='commercial'>Commercial</SelectItem>
                    <SelectItem value='constructor'>Constructeur</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div> */}
          <div>
            <Button>
              <Search size={20} className='mr-2' />
              Rechercher
            </Button>
          </div>
        </div>
        <div className='bg-white dark:bg-secondary'>
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SaleList;

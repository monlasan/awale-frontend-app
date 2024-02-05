import React from 'react';
import {
  Edit,
  FileDown,
  Loader,
  Mail,
  PenLine,
  Plus,
  Search,
  Trash2,
  User,
} from 'lucide-react';
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
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { columns, Purchase } from '../_components/DTPurchaseListColumns';
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
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import useSearchPurchaseDocuments from '@/hooks/requests/useSearchPurchaseDocuments';
import ErrorDashboardLayout from '@/layouts/ErrorDashboardLayout';

const PurchaseList = () => {
  const { data, error, isLoading } = useSearchPurchaseDocuments();

  if (error) {
    return <ErrorDashboardLayout />;
  }

  return (
    <DashboardLayout>
      <div className='px-14 py-4 pb-12 h-full flex flex-col'>
        <Card className='mb-4'>
          <CardHeader className='flex py-6 flex-row justify-between items-center'>
            <CardTitle>Purchase documents</CardTitle>
          </CardHeader>

          {/* <CardContent>
            <DataTable columns={columns} data={data} />
          </CardContent> */}
        </Card>
        {/* <div className='grid gap-4 p-6 bg-white dark:bg-secondary border-l border-r border-b mb-4'>
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
        </div> */}
        {isLoading ? (
          <div className='flex p-6 justify-center'>
            <Loader size={30} className='animate-spin text-primary' />
          </div>
        ) : (
          <div className='bg-white dark:bg-secondary'>
            <DataTable columns={columns} data={data} />
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default PurchaseList;

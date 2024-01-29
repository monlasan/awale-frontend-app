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
import { columns, Article } from '../_components/DTArticleListColumns';
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
import useSearchArticles from '@/hooks/requests/useSearchArticles';

const ArticleList = () => {
  const { data, error, isLoading } = useSearchArticles();
  console.log('ARTICLES FETCHED', data);

  // const data: Article[] = [
  //   {
  //     id: '728ed52f',
  //     reference: 'ART-728ed52f',
  //     name: 'Sanny Khaled',
  //     photo_url: null,
  //     price: 5000,
  //     created_at: '2024-01-26T22:21:40.306Z',
  //     updated_at: '2024-01-26T22:21:40.306Z',
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
          <CardHeader className='flex py-3 pb-3 flex-row justify-between items-center'>
            <CardTitle>Articles list</CardTitle>
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
      </div>
    </DashboardLayout>
  );
};

export default ArticleList;

import React from 'react';
import {
  Box,
  Hash,
  LayoutGrid,
  List,
  Loader,
  MapPin,
  MoreHorizontal,
  Plus,
  Search,
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
import { columns, Inventory } from '../_components/DTInventoryOverviewColumns';
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
import useSearchInventories from '@/hooks/requests/useSearchInventories';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const InventoryOverview = () => {
  const [layoutType, setLayoutType] = React.useState('grid');
  const { data, error: errorInventory, isLoading } = useSearchInventories();

  if (errorInventory) {
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
        <Card className='mb-4'>
          <CardHeader className='flex py-3 pb-4 flex-row justify-between items-center'>
            <CardTitle>Inventory overview</CardTitle>
            <div className='flex items-center gap-2'>
              <form className='flex items-center'>
                <Input
                  type='search'
                  enterKeyHint='enter'
                  placeholder='Search an inventory'
                />
              </form>
              <div className='flex items-center'>
                <Button
                  onClick={() => setLayoutType('grid')}
                  variant={layoutType === 'grid' ? 'dark' : 'ghost'}
                  size='icon'
                >
                  <LayoutGrid
                    className={cn({ 'opacity-70': layoutType === 'list' })}
                    size={22}
                  />
                </Button>
                <Button
                  onClick={() => setLayoutType('list')}
                  variant={layoutType === 'list' ? 'dark' : 'ghost'}
                  size='icon'
                >
                  <List
                    className={cn({ 'opacity-70': layoutType === 'grid' })}
                    size={22}
                  />
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>

        {isLoading ? (
          <div className='flex p-6 justify-center'>
            <Loader size={30} className='animate-spin' />
          </div>
        ) : (
          <>
            {layoutType === 'grid' ? (
              <div className='grid grid-cols-3 gap-2'>
                {data.length === 0 ? (
                  <div className='bg-white dark:bg-secondary border p-4 py-8 flex flex-col justify-center items-center gap-3'>
                    <p>No inventory available yet</p>
                    <Link to='/inventory/create'>
                      <Button>
                        <Plus size={21} className='mr-2' />
                        Create an inventory
                      </Button>
                    </Link>
                  </div>
                ) : (
                  data.map((item: Inventory) => (
                    <div
                      key={item.id}
                      className='bg-white dark:bg-secondary border p-4 flex flex-col gap-1'
                    >
                      <div className='flex justify-between gap-2 pb-3 border-b'>
                        <div className='flex gap-4'>
                          {/* <div className='w-10 h-10 flex items-center justify-center border border-primary/60 bg-primary/10'> */}
                          <Box size={25} className='text-primary' />
                          {/* </div> */}
                          <div className='space-y-1'>
                            <h3 className='text-xl'>{item.name}</h3>
                            <span className='opacity-70 flex items-center gap-1 text-xs'>
                              <Hash size={15} /> {item.reference}
                            </span>
                            <span className='opacity-70 flex items-center gap-1 text-xs'>
                              <MapPin size={15} /> {item.address}
                            </span>
                          </div>
                        </div>
                        {/* <div> */}
                        <Button variant='ghost' size='icon'>
                          <MoreHorizontal size={21} />
                        </Button>
                        {/* </div> */}
                      </div>

                      {/* <div>
                    <span className='opacity-70 text-sm'>
                      #{item.reference}
                    </span>
                    <span className='opacity-70 flex items-center gap-1 text-sm'>
                      <MapPin size={15} />
                      {item.address}
                    </span>
                  </div> */}
                      <div className='flex my-2 items-center justify-between'>
                        <span>
                          <b className='text-2xl'>35</b>
                          <span className='opacity-50 dark:opacity-45'>
                            {' '}
                            articles
                          </span>
                        </span>
                        <Badge variant='destructive'>Out of stock</Badge>
                      </div>
                      <p className='text-xs p-2 border bg-accent'>
                        {item.description ||
                          'No description provided for this inventory'}
                      </p>
                    </div>
                  ))
                )}
              </div>
            ) : (
              <div className='bg-white dark:bg-secondary'>
                <DataTable columns={columns} data={data} />
              </div>
            )}
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default InventoryOverview;

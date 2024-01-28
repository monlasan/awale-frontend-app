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

const PurchaseList = () => {
  const data: Purchase[] = [
    {
      id: '728ed52f',
      type: 'Facture',
      reference: 'FAC-728ed52f',
      provider_fullname: 'Sanny Khaled',
      amount: 5000,
      state: 'inWritting',
      created_at: '2022-01-01',
      updated_at: '2022-02-01',
    },
  ];

  return (
    <DashboardLayout>
      <div className='px-14 py-4 h-full flex flex-col '>
        {/* <div className='px-10 pl-4 mb-4 border bg-white dark:bg-accent flex items-center justify-between'>
          <button className='p-6 py-3 border-0 border-b-2 border-primary hover:bg-accent'>
            Document
          </button>
          <Button size='sm'>Add</Button>
        </div> */}
        <div className='isolate relative mb-20'>
          <div className='w-8 h-8 bg-black rotate-45 -z-10 absolute top-0 left-0 translate-y-[49px] -translate-x-[16px]'>
            <div className='w-8 h-8 bg-orange-400/50 z-10'></div>
          </div>
          <div className='p-4 shadow border bg-white dark:bg-accent'>
            <div className='flex items-center justify-between pr-6'>
              <div className='w-fit flex items-center gap-4 -translate-x-10'>
                <div className='bg-orange-400  text-white p-3 px-4'>
                  Status: <b>IN WRITTING</b>
                </div>
              </div>
              <div>
                <Button>VRIANT</Button>
              </div>
            </div>
            <div className='py-6 px-6  flex flex-col gap-3'>
              <h2 className='text-2xl font-semibold'>FACTURE #FAC-8AZ7D6</h2>
              <div className='flex divide-x -translate-x-4 flex-wrap'>
                <div className='flex flex-1 min-w-[254px] flex-col py-3 px-4  gap-1'>
                  <div>
                    <span className='text-xs opacity-60'>Folder reference</span>
                    <br />
                    <span className='text-sm font-medium'>#FLD-8AZ7D6</span>
                  </div>
                  <div>
                    <span className='text-xs opacity-60'>Issue Date</span>
                    <br />
                    <span className='text-sm font-medium'>31/8/2023</span>
                  </div>
                  <div>
                    <span className='text-xs opacity-60'>Editor</span>
                    <br />
                    <span className='text-sm font-medium'>
                      Antony SWISSOERD
                    </span>
                  </div>
                </div>
                <div className='flex flex-1 min-w-[254px] flex-col py-3 px-4  gap-1'>
                  <div>
                    <span className='text-xs opacity-60'>Client</span>
                    <br />
                    <span className='text-sm font-medium'>Laurent GBAGBO</span>
                  </div>
                  <div>
                    <span className='text-xs opacity-60'>Delivery Address</span>
                    <br />
                    <span className='text-sm font-medium'>
                      C/299 ENANGON COTONOU Rue 1
                    </span>
                  </div>
                </div>
                <div className='flex flex-1 min-w-[254px] flex-col py-3 px-4  gap-1'>
                  <div>
                    <span className='text-xs opacity-60'>Total amount</span>
                    <br />
                    <span className='text-sm font-medium'>319.15</span>
                  </div>
                  <div>
                    <span className='text-xs opacity-60'>Amount paid</span>
                    <br />
                    <span className='text-sm font-medium'>0.00</span>
                  </div>
                  <div>
                    <span className='text-xs opacity-60'>Balance due</span>
                    <br />
                    <span className='text-2xl font-bold'>319.15</span>
                    <div className='bg-accent text-sm p-1 px-2 border  w-fit'>
                      Due Date: 06/9/2018
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='py-3 pb-4 px-10 dark:bg-secondary bg-accent border-t border-b -mx-4 flex flex-col gap-3'>
              <div className='flex items-center justify-between'>
                <h3 className='text-lg font-medium'>
                  Articles {'(' + 8 + ')'}
                </h3>
                <Button variant='outline' size='sm'>
                  {' '}
                  <Plus className='mr-2' /> Add an article
                </Button>
              </div>
              <div className='bg-white dark:bg-accent'>
                <DataTable columns={columns} data={data} />
              </div>
            </div>
          </div>
        </div>
        {/* <div className='bg-white dark:bg-secondary'> */}
        {/* <DataTable columns={columns} data={data} /> */}
        {/* </div> */}
      </div>
    </DashboardLayout>
  );
};

export default PurchaseList;

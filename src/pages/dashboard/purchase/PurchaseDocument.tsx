import React from 'react';
import {
  Check,
  Edit,
  FileDown,
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
  SheetClose,
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
import { useParams } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';

const PurchaseDocument = () => {
  let { documentId } = useParams();
  console.log('DOCUMENT ID', documentId);

  const data: Purchase[] = [
    {
      id: '7a28ed52f',
      type: 'Facture',
      reference: 'FAC-728ed52f',
      provider_fullname: 'Sanny Khaled',
      amount: 5000,
      state: 'inWritting',
      created_at: '2022-01-01',
      updated_at: '2022-02-01',
    },
    {
      id: '628ed52f',
      type: 'Facture',
      reference: 'FAC-728ed52f',
      provider_fullname: 'Sanny Khaled',
      amount: 5000,
      state: 'inWritting',
      created_at: '2022-01-01',
      updated_at: '2022-02-01',
    },
  ];

  const handleClientPickClose = (clientInfos: string): void => {
    console.log('CLIENT INFOS', clientInfos);
  };

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
          <div className='p-4 shadow border bg-white dark:bg-accent min-w-[372px]'>
            <div className='flex items-center flex-wrap gap-4 justify-between pr-6'>
              <div className='w-fit flex  items-center gap-4 -translate-x-10'>
                <div className='bg-orange-400  text-white p-3 px-4 whitespace-nowrap'>
                  Status: <b>IN WRITTING</b>
                </div>
                <div className='flex flex-nowrap items-center'>
                  <Button variant='outline' size='icon'>
                    <FileDown size={21} className='opacity-70' />
                  </Button>
                  <Button
                    variant='outline'
                    className='border-l-0 border-r-0'
                    size='icon'
                  >
                    <Mail size={21} className='opacity-70' />
                  </Button>
                  <Button variant='outline' size='icon'>
                    <Trash2 size={21} className='opacity-70' />
                  </Button>
                </div>
              </div>
              <div className='flex items-center ml-auto'>
                {/* <span className='opacity-50'>|</span> */}
                <div className='flex items-center flex-wrap'>
                  <Button variant='dark'>Cancel order</Button>
                  <Button>Validate order</Button>
                </div>
              </div>
            </div>
            <div className='py-6 flex flex-col gap-3 '>
              <div className='flex px-6 flex-wrap gap-3 justify-between'>
                {/* <Badge variant='outline'>Client</Badge> */}
                <div className='flex items-center flex-nowrap gap-3'>
                  <h2 className='text-2xl font-semibold uppercase'>Order</h2>
                  <b className='text-2xl opacity-50 font-semibold whitespace-nowrap'>
                    #ORD-8AZ7D6
                  </b>
                </div>

                <div className='flex items-center gap-2'>
                  <Badge variant='secondary'>Quotation</Badge>
                  <Badge variant='secondary'>Delivery</Badge>
                  <Badge variant='default'>Order</Badge>
                  <Badge className='opacity-40' variant='secondary'>
                    Bill
                  </Badge>
                </div>
              </div>
              <div className='flex px-6 flex-1 gap-3 flex-wrap'>
                <div className='flex flex-1 dark:bg-secondary bg-accent/40 min-w-[254px] flex-col py-4 px-4 gap-1 outline outline-1 outline-border'>
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
                <div className='flex flex-1 dark:bg-secondary bg-accent/40 min-w-[254px] flex-col py-4 px-4 gap-1 outline outline-1 outline-border'>
                  <div>
                    <span className='text-xs opacity-60'>Client</span>
                    <br />
                    {/* <span className='text-sm font-medium'>#FLD-8AZ7D6</span> */}

                    <Sheet>
                      <SheetTrigger asChild>
                        <Button size='sm' variant='dark'>
                          <User className='mr-2' size={20} />
                          Add a client
                        </Button>
                      </SheetTrigger>
                      <SheetContent>
                        <SheetHeader className='mb-2'>
                          <SheetTitle>Add a client</SheetTitle>
                          <form>
                            <Input placeholder='Search a user' />
                          </form>
                        </SheetHeader>
                        <ScrollArea className='h-full'>
                          <div className='flex flex-col gap-2'>
                            <div className='p-3 flex justify-center items-center gap-3 border bg-secondary'>
                              <span className='opacity-60'>No entry</span>
                            </div>
                            {[
                              1, 2, 3, 4, 5, 11, 22, 33, 44, 55, 111, 222, 333,
                              444, 555, 666,
                            ].map((client) => (
                              <div
                                key={client}
                                className='p-3 flex items-center gap-3 border bg-secondary'
                              >
                                <Avatar>
                                  {/* {avatar_url.length > 0 && ( */}
                                  <AvatarImage
                                    src='https://via.placeholder.com/200x200.png'
                                    alt={'@'}
                                  />
                                  {/* )} */}
                                  <AvatarFallback className='text-black dark:text-zinc-200'>
                                    CL
                                    {/* {fullName.split(' ')[0][0]} */}
                                    {/* {fullName.split(' ')[1][0]} */}
                                  </AvatarFallback>
                                </Avatar>
                                <div className='flex flex-1 flex-col'>
                                  <b>N'TIA Theodule</b>
                                  <span className='opacity-70'>
                                    +299 61640292
                                  </span>
                                </div>
                                <SheetClose asChild>
                                  <Button
                                    size='icon'
                                    onClick={() =>
                                      handleClientPickClose('clientInfos')
                                    }
                                  >
                                    <Check size={21} />
                                  </Button>
                                </SheetClose>
                              </div>
                            ))}
                          </div>
                        </ScrollArea>
                      </SheetContent>
                    </Sheet>
                    {/* <div className='flex items-center gap-3'>
                      <span className='text-sm font-medium'>
                        Laurent GBAGBO
                      </span>
                      <button className='text-primary'>
                        <PenLine size={19} />
                      </button>
                    </div> */}
                  </div>
                  <div>
                    <span className='text-xs opacity-60'>Delivery Address</span>
                    <br />
                    {/* <span className='text-sm font-medium'>
                      C/299 ENANGON COTONOU Rue 1
                    </span> */}
                    <span className='text-sm font-medium'>---</span>
                  </div>
                </div>
                <div className='flex flex-1 dark:bg-secondary bg-accent/40 min-w-[254px] flex-col py-4 px-4  gap-1 outline outline-1 outline-border'>
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
            <div className='py-3 pb-4 px-10 dark:bg-secondary bg-accent/40 border-t border-b -mx-4 flex flex-col gap-3'>
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

export default PurchaseDocument;
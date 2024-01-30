import React from 'react';
import {
  Check,
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
  SheetClose,
} from '@/components/ui/sheet';
import { columns, Article } from '../_components/DTGroupedArticleListColumns';
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
import { useNavigate, useParams } from 'react-router-dom';
import DocumentClientsListSearch from '../_components/DocumentClientsListSearch';
import {
  purchaseDocumentArticlesAtom,
  purchaseDocumentAtom,
} from '@/atoms/purchaseDocument.atom';
import { useAtom } from 'jotai';
import DocumentClientsSearchSheet from '../_components/DocumentClientsSearchSheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import DocumentClientInfosBox from '../_components/DocumentClientInfosBox';
import useGetDocument from '@/hooks/requests/useGetDocument';
import { formatDate, formatOption } from '@/lib/utils';
import { toast } from 'sonner';
import { purchase_doc_status } from '@/lib/constants';
import ErrorDashboardLayout from '@/layouts/ErrorDashboardLayout';
import DocumentArticlesSearchSheet from '../_components/DocumentArticleSearchSheet';

const PurchaseDocument = () => {
  const navigate = useNavigate();
  const [documentAtom, setDocument] = useAtom(purchaseDocumentAtom);
  const [groupedArticles, setGroupedArticles] = useAtom(
    purchaseDocumentArticlesAtom
  );

  let { documentId } = useParams();

  const {
    data: documentData,
    error: documentError,
    isLoading: documentIsLoading,
  } = useGetDocument(documentId);

  // if (documentError === 'Cannot convert undefined or null to object') {
  //   navigate('/purchase/list');
  // }
  if (documentIsLoading) {
    return (
      <DashboardLayout>
        <div className='w-full h-full flex flex-col gap-2 justify-center items-center'>
          <Loader className='text-primary animate-spin' size={30} />
          <p>Document is loading...</p>
        </div>
      </DashboardLayout>
    );
  }
  if (documentError) {
    return <ErrorDashboardLayout />;
  }
  if (!documentData) {
    <DashboardLayout>
      <div className='w-full h-full flex flex-col gap-2 justify-center items-center'>
        {/* <Loader className='text-primary animate-spin' size={30} /> */}
        <p>Nothing found</p>
      </div>
    </DashboardLayout>;
  }
  setDocument((prev: any) => (prev = documentData));
  setGroupedArticles(
    (prev) => (prev = documentData.folder.grouped_articles.articles)
  );
  // console.log('DOCUMENT ID', documentId);
  // console.log('CLIENT', client);
  // console.log('GROUPED ARTICLES', groupedArticles);
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
                  Status{' : '}
                  {documentData.type === 'QUOTE' && (
                    <b className='uppercase'>
                      {formatOption(
                        documentData.status,
                        purchase_doc_status.quote
                      )}
                    </b>
                  )}
                  {documentData.type === 'ORDER' && (
                    <b className='uppercase'>
                      {formatOption(
                        documentData.status,
                        purchase_doc_status.order
                      )}
                    </b>
                  )}
                  {documentData.type === 'DELIVERY' && (
                    <b className='uppercase'>
                      {formatOption(
                        documentData.status,
                        purchase_doc_status.delivery
                      )}
                    </b>
                  )}
                  {documentData.type === 'BILL' && (
                    <b className='uppercase'>
                      {formatOption(
                        documentData.status,
                        purchase_doc_status.bill
                      )}
                    </b>
                  )}
                  {/* <b>{formatOption(documentData.status, documentData.type)}</b> */}
                </div>
                <div className='flex flex-nowrap items-center'>
                  <Button disabled variant='outline' size='icon'>
                    <FileDown size={21} className='opacity-70' />
                  </Button>
                  <Button
                    variant='outline'
                    className='border-l-0 border-r-0'
                    size='icon'
                    disabled
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
                  <h2 className='text-2xl font-semibold uppercase'>
                    {documentData.type}
                  </h2>
                  <b className='text-2xl opacity-50 font-semibold whitespace-nowrap'>
                    #{documentData.reference}
                  </b>
                </div>

                {/* <div className='flex items-center gap-2'>
                      <Badge variant='secondary'>Quotation</Badge>
                      <Badge variant='secondary'>Delivery</Badge>
                      <Badge variant='default'>Order</Badge>
                      <Badge className='opacity-40' variant='secondary'>
                        Bill
                      </Badge>
                    </div> */}
              </div>
              <div className='flex px-6 flex-1 gap-3 flex-wrap'>
                <div className='flex flex-1 dark:bg-secondary bg-accent/40 min-w-[254px] flex-col py-4 px-4 gap-1 outline outline-1 outline-border'>
                  <div>
                    <span className='text-xs opacity-60'>Folder reference</span>
                    <br />
                    <span className='text-sm font-medium'>
                      #{documentData?.folder.reference}
                    </span>
                  </div>
                  <div>
                    <span className='text-xs opacity-60'>Issue Date</span>
                    <br />
                    <span className='text-sm font-medium'>
                      {formatDate(documentData.created_at)}
                    </span>
                  </div>
                  <div>
                    <span className='text-xs opacity-60'>Editor</span>
                    <br />
                    <span className='text-sm font-medium'>
                      {documentData.editor.first_name +
                        ' ' +
                        documentData.editor.last_name}
                    </span>
                  </div>
                </div>
                <DocumentClientInfosBox client={documentData.folder.client} />
                <div className='flex flex-1 dark:bg-secondary bg-accent/40 min-w-[254px] flex-col py-4 px-4 gap-3 outline outline-1 outline-border'>
                  <div className='flex flex-wrap gap-8'>
                    <div className='flex flex-col gap-1'>
                      <div>
                        <span className='text-xs opacity-60'>Total amount</span>
                        <br />
                        <span className='text-sm font-medium'>
                          {documentData.folder.amount}
                        </span>
                      </div>
                      <div>
                        <span className='text-xs opacity-60'>Amount paid</span>
                        <br />
                        <span className='text-sm font-medium'>0.00</span>
                      </div>
                    </div>
                    <div>
                      <span className='text-xs opacity-60'>Balance due</span>
                      <br />
                      <span className='text-2xl font-bold'>
                        {documentData.folder.amount - 15}
                      </span>
                    </div>
                  </div>
                  <div className='bg-accent text-sm p-1 px-2 border  w-fit'>
                    Due Date: 06/9/2018
                  </div>
                </div>
              </div>
            </div>
            <div className='py-3 pb-4 px-10 dark:bg-secondary bg-accent/40 border-t border-b -mx-4 flex flex-col gap-3'>
              <div className='flex items-center justify-between'>
                <h3 className='text-lg font-medium'>
                  Articles cart {'(' + groupedArticles.length + ')'}
                </h3>
                <DocumentArticlesSearchSheet />
              </div>
              <div className='bg-white dark:bg-accent'>
                <DataTable columns={columns} data={groupedArticles} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PurchaseDocument;

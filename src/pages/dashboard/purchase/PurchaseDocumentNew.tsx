import DashboardLayout from '@/layouts/DashboardLayout';
import { Loader } from 'lucide-react';
import React from 'react';

const PurchaseDocumentNew = ({
  createDocument,
}: {
  createDocument: string;
}) => {
  return (
    <DashboardLayout>
      <div className='w-full h-full flex flex-col gap-2 justify-center items-center'>
        <Loader className='text-primary animate-spin' size={30} />
        <p>Creating document...</p>
      </div>
    </DashboardLayout>
  );
};

export default PurchaseDocumentNew;

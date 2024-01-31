import { useAppSelector } from '@/hooks/useRedux';
import DashboardLayout from '@/layouts/DashboardLayout';
import documentService from '@/services/http/document.service';
import { Loader } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { mutate } from 'swr';

const SaleDocumentNew = ({
  documentToCreate,
}: {
  documentToCreate: string;
}) => {
  const navigate = useNavigate();
  const { currentUser } = useAppSelector((state) => state.user);

  const createDocument = async () => {
    const documentCreated = await documentService.createDocument({
      type: documentToCreate,
      status: 'IN_WRITTING',
      transaction: 'SALE',
      editor_id: currentUser?.user.id,
      client_id: '',
      amount: 0,
      articles_grouped: [],
    });
    toast.success('Document created successfully');
    // mutate('get_document', null);
    navigate('/document/' + documentCreated.id);
  };

  React.useEffect(() => {
    createDocument();
  }, []);

  return (
    <DashboardLayout>
      <div className='w-full h-full flex flex-col gap-2 justify-center items-center'>
        <Loader className='text-primary animate-spin' size={30} />
        <p>Creating document...</p>
      </div>
    </DashboardLayout>
  );
};

export default SaleDocumentNew;

import documentService from '@/services/http/document.service';
import useSWR from 'swr';

function useSearchPurchaseDocuments() {
  const { data, error, isLoading } = useSWR(
    'search_purchase_documents',
    async () => await documentService.searchPurchaseDocuments()
  );
  return { data, error, isLoading };
}

export default useSearchPurchaseDocuments;

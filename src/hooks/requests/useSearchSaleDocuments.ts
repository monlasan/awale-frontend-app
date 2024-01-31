import documentService from '@/services/http/document.service';
import useSWR from 'swr';

function useSearchSaleDocuments() {
  const { data, error, isLoading } = useSWR(
    'search_sale_documents',
    async () => await documentService.searchSaleDocuments()
  );
  return { data, error, isLoading };
}

export default useSearchSaleDocuments;

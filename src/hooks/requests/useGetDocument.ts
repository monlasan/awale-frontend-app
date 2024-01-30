import documentService from '@/services/http/document.service';
import useSWR from 'swr';

function useGetDocument(documentId: string | undefined) {
  const { data, error, isLoading } = useSWR(
    'get_document',
    async () => await documentService.getDocument(documentId),
    {
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        // Never retry on 404.
        if (error.status === 404) return;

        // // Only retry up to 10 times.
        // if (retryCount >= 3) return;

        // // Retry after 5 seconds.
        // setTimeout(() => revalidate({ retryCount }), 5000);
      },
    }
  );
  return { data, error, isLoading };
}

export default useGetDocument;

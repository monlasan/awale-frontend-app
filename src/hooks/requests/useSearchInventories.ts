import inventoryService from '@/services/http/inventory.service';
import useSWR from 'swr';

function useSearchInventories() {
  const { data, error, isLoading } = useSWR(
    'search_inventory',
    async () => await inventoryService.search()
  );
  return { data, error, isLoading };
}

export default useSearchInventories;

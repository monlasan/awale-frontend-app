import userService from '@/services/http/user.service';
import useSWR from 'swr';

function useSearchClients() {
  const { data, error, isLoading } = useSWR(
    'search_client',
    async () => await userService.searchClients()
  );
  return { data, error, isLoading };
}

export default useSearchClients;

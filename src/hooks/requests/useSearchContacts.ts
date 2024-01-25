import userService from '@/services/http/user.service';
import useSWR from 'swr';

function useSearchContacts() {
  const { data, error, isLoading } = useSWR(
    'search_user',
    async () => await userService.search()
  );
  return { data, error, isLoading };
}

export default useSearchContacts;

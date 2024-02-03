import paymentService from '@/services/http/payment.service';
import useSWR from 'swr';

function useSearchPayments() {
  const { data, error, isLoading } = useSWR(
    'search_payment',
    async () => await paymentService.search()
  );
  return { data, error, isLoading };
}

export default useSearchPayments;

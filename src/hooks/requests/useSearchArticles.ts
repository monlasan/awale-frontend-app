import articleService from '@/services/http/article.service';
import useSWR from 'swr';

function useSearchArticles() {
  const { data, error, isLoading } = useSWR(
    'search_article',
    async () => await articleService.search()
  );
  return { data, error, isLoading };
}

export default useSearchArticles;

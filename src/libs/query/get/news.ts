import { useInfiniteQuery } from 'react-query';
import { TIME_FETCH_NEWS } from '../../../constants/time';
import { getNewsAnime } from '../../api/get/news';

export const useFetchNews = () =>
    useInfiniteQuery('news', ({ pageParam }) => getNewsAnime(pageParam), {
        staleTime: TIME_FETCH_NEWS,
        getNextPageParam: (lastPage) => lastPage.page + 1,
        getPreviousPageParam: (lastPage) => lastPage.page - 1,
    });

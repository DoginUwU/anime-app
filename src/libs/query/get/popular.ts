import { useInfiniteQuery } from 'react-query';
import { TIME_FETCH_NEWS } from '../../../constants/time';
import { getPopularAnime } from '../../api/get/popular';

export const useFetchPopular = () =>
    useInfiniteQuery('popular', ({ pageParam }) => getPopularAnime(pageParam), {
        staleTime: TIME_FETCH_NEWS,
        getNextPageParam: (lastPage) => lastPage.page + 1,
        getPreviousPageParam: (lastPage) => lastPage.page - 1,
    });

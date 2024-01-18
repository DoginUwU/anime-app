import { useInfiniteQuery } from 'react-query';
import { TIME_FETCH_NEWS } from '../../../constants/time';
import { getLatestAnimes } from '../../api/get/latest';

export const useFetchLatest = () =>
    useInfiniteQuery('latest', ({ pageParam }) => getLatestAnimes(pageParam), {
        staleTime: TIME_FETCH_NEWS,
        getNextPageParam: (lastPage) => lastPage.hasNext ? lastPage.page + 1 : null,
        getPreviousPageParam: (lastPage) => lastPage.page - 1,
    });

import { useQuery } from 'react-query';
import { TIME_FETCH_NEWS } from '../../../constants/time';
import { getNewsAnime } from '../../api/get/news';

export const useFetchNews = () =>
    useQuery('news', getNewsAnime, {
        staleTime: TIME_FETCH_NEWS,
    });

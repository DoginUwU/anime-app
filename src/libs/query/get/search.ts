import { useQuery } from 'react-query';
import { TIME_FETCH_SEARCH } from '../../../constants/time';
import { searchByName } from '../../api/get/search';

export const useFetchSearch = (name: string) =>
    useQuery(['search', { name }], () => searchByName(name), {
        staleTime: TIME_FETCH_SEARCH,
    });

import { useQuery } from 'react-query';
import { TIME_FETCH_ANIME } from '../../../constants/time';
import { getAnimeByUrl } from '../../api/get/anime';

export const useFetchAnime = (url: string) =>
    useQuery(['anime', { url }], () => getAnimeByUrl(url), {
        staleTime: TIME_FETCH_ANIME,
    });

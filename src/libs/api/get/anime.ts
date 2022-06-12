import { IAnimeGet } from '../../../@types/anime';
import { api } from '../axios';

const getAnimeByUrl = async (url: string): Promise<IAnimeGet> => {
    const response = (
        await api.get<IAnimeGet>('anime', {
            params: {
                site: 'AnimesOnline',
                url,
            },
        })
    ).data;

    response.seasons = response.seasons.filter((season) => season.episodes.length > 0);

    return response;
};

export { getAnimeByUrl };

import { ISearchGet } from '../../../@types/search';
import { api } from '../axios';

const getLatestAnimes = async (page?: number): Promise<ISearchGet> => {
    const response = (
        await api.get<ISearchGet>('latest/animes', {
            params: {
                site: 'AnimeFire',
                page,
            },
        })
    ).data;

    return response;
};

export { getLatestAnimes };

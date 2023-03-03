import { ISearchGet } from '../../../@types/search';
import { api } from '../axios';

const getPopularAnime = async (page?: number): Promise<ISearchGet> => {
    const response = (
        await api.get<ISearchGet>('popular', {
            params: {
                site: 'AnimeFire',
                page,
            },
        })
    ).data;

    return response;
};

export { getPopularAnime };

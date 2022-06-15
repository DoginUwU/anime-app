import { ISearchGet } from '../../../@types/search';
import { api } from '../axios';

const getNewsAnime = async (page?: number): Promise<ISearchGet> => {
    const response = (
        await api.get<ISearchGet>('news', {
            params: {
                site: 'AnimesOnline',
                page,
            },
        })
    ).data;

    return response;
};

export { getNewsAnime };

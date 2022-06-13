import { ISearchGet, ISearchItem } from '../../../@types/search';
import { api } from '../axios';

const getNewsAnime = async (): Promise<ISearchItem[]> => {
    const response = (
        await api.get<ISearchGet>('news', {
            params: {
                site: 'AnimesOnline',
            },
        })
    ).data;

    return response.items;
};

export { getNewsAnime };

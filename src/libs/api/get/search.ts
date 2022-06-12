import { ISearchGet, ISearchItem } from '../../../@types/search';
import { api } from '../axios';

const searchByName = async (name: string): Promise<ISearchItem[]> => {
    const response = await api.get<ISearchGet>('search', {
        params: {
            site: 'AnimesOnline',
            search: name,
            page: 1,
        },
    });

    return response.data.items;
};

export { searchByName };

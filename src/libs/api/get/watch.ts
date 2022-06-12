import { API_URL } from '../../../config/defaults';

const getWatchSrc = (url: string): string => {
    const src = new URL(`${API_URL}/watch`);
    const params = new URLSearchParams(src.search);

    params.set('site', 'AnimesOnline');
    params.set('url', url);

    src.search = params.toString();

    return src.toString();
};

export { getWatchSrc };

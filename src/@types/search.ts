interface ISearchItem {
    title: string;
    url: string;
    image: string;
}

interface ISearchGet {
    items: ISearchItem[];
    page: number;
    total: number;
    hasNext: boolean;
}

export type { ISearchItem, ISearchGet };

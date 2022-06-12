interface ISearchItem {
    title: string;
    url: string;
    image: string;
}

interface ISearchGet {
    items: ISearchItem[];
}

export type { ISearchItem, ISearchGet };

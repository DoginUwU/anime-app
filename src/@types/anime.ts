interface IAnimeEpisode {
    title: string;
    url: string;
    image: string;
}

interface IAnimeSeason {
    title: string;
    episodes: IAnimeEpisode[];
}

interface IAnimeGet {
    title: string;
    image: string;
    tags: string[];
    description: string;
    seasons: IAnimeSeason[];
}

export { IAnimeGet, IAnimeSeason, IAnimeEpisode };

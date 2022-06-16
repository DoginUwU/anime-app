interface EpisodeData {
    url: string;
    title: string;
    image: string;
    episode: number;
    season: number;
    date: number;
    progress: number;
    duration: number;
    anime: {
        title: string;
    };
}

interface StorageData {
    continue_watching: {
        episodes: EpisodeData[];
    };
}

export type { EpisodeData, StorageData };

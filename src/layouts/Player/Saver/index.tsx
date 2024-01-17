import React, { useEffect } from 'react';
import { IAnimeEpisode, IAnimeGet } from '../../../@types/anime';
import { EpisodeData } from '../../../@types/storage';

interface IProps {
    anime: IAnimeGet;
    episode: IAnimeEpisode;
    progress: number;
    duration: number;
}

const Saver: React.FC<IProps> = ({ episode, progress, duration, anime }) => {
    const addEpisode = (saveEpisode: EpisodeData) => {
        let episodes = window.ipcRenderer.getStorage<EpisodeData[] | undefined>('continueWatching.episodes') || [];

        if (episodes.length > 20) episodes = episodes.slice(0, 1);

        const findEpisode = episodes.find((e) => e.anime.title === saveEpisode.anime.title);

        if (findEpisode) {
            episodes.splice(episodes.indexOf(findEpisode), 1);
        }

        episodes.push(saveEpisode);

        episodes = episodes
            .sort((a, b) => b.date - a.date)
            .map((e) => ({
                ...e,
                image: e.image || anime.image,
            }));

        window.ipcRenderer.setStorage<EpisodeData[]>('continueWatching.episodes', episodes);
    };

    useEffect(() => {
        const saveEpisode: EpisodeData = {
            title: episode.title,
            url: episode.url,
            image: episode.image,
            date: new Date().getTime(),
            episode: 1,
            season: 1,
            progress,
            duration,
            anime: {
                title: anime.title,
            },
        };

        addEpisode(saveEpisode);
    }, [episode.url, progress]);

    return null;
};

export default Saver;

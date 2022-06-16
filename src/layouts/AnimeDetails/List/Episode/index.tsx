import { DownloadSimple } from 'phosphor-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Wave from 'react-wavify';
import { IAnimeEpisode, IAnimeGet, IAnimeSeason } from '../../../../@types/anime';
import { EpisodeData } from '../../../../@types/storage';
import Button from '../../../../components/Button';
import styles from './styles.module.css';

interface IProps {
    anime: IAnimeGet;
    episode: IAnimeEpisode;
    season: IAnimeSeason;
}

const Episode: React.FC<IProps> = ({ anime, episode, season }) => {
    const [progress, setProgress] = useState(0);

    const checkEpisode = () => {
        const episodes = window.Main.getStorage<EpisodeData[] | undefined>('continueWatching.episodes') || [];

        const ep = episodes.find((e) => e.url === episode.url);

        setProgress(ep?.progress || 0);
    };

    const calcProgressWidth = () => {
        const total = 25 + progress;
        return `${total}%`;
    };

    useEffect(() => {
        checkEpisode();
    }, []);

    return (
        <div className={styles.item} key={episode.url}>
            <div
                className={styles.progress}
                style={{
                    width: calcProgressWidth(),
                }}
            >
                <Wave
                    fill="#7069d1"
                    paused={false}
                    options={{
                        height: 20,
                        amplitude: 10,
                        speed: 0.3,
                        points: 3,
                    }}
                />
            </div>
            <div className={styles.itemInfo}>
                <h2>{episode.title}</h2>
            </div>
            <div className={styles.itemActions}>
                <Button>
                    <DownloadSimple />
                </Button>
                <Link to="/player" state={{ episode, episodes: season.episodes, anime, progress }}>
                    <Button>Watch</Button>
                </Link>
            </div>
        </div>
    );
};

export default Episode;

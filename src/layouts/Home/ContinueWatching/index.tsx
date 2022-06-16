import React from 'react';
import { Link } from 'react-router-dom';
import { EpisodeData } from '../../../@types/storage';
import Empty from '../Empty';
import styles from './styles.module.css';
import { formatToMMSS } from '../../../utils/time';

const ContinueWatching: React.FC = () => {
    const episodes = window.Main.getStorage<EpisodeData[] | undefined>('continueWatching.episodes');

    return (
        <div className={styles.list}>
            <h1>Continue watching</h1>
            <div className={styles.items}>
                {(!episodes || !episodes.length) && <Empty />}
                {episodes &&
                    episodes.map((episode) => (
                        <Link
                            to="/player"
                            state={{ episode, episodes: [], anime: episode.anime, progress: episode.progress }}
                            key={episode.url}
                        >
                            <div className={styles.item}>
                                <img src={episode.image} alt={episode.title} />
                                <div className={styles.itemInfo}>
                                    <h2>{episode.anime.title}</h2>
                                    <p>
                                        E{episode.episode} - T{episode.season} • 1 day ago
                                    </p>
                                    <div className={styles.itemDuration}>{formatToMMSS(episode.duration)}</div>
                                </div>
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    );
};

export default ContinueWatching;

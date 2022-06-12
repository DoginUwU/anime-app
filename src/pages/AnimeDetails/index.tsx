import { DownloadSimple } from 'phosphor-react';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IAnimeGet } from '../../@types/anime';
import Button from '../../components/Button';
import { getAnimeByUrl } from '../../libs/api/get/anime';
import styles from './styles.module.css';

interface ILocationProps {
    url: string;
}

const AnimeDetails: React.FC = () => {
    const { state } = useLocation();
    const [anime, setAnime] = useState<IAnimeGet>();

    useEffect(() => {
        if (!state) return;
        const { url } = state as ILocationProps;

        getAnimeByUrl(url).then(setAnime);
    }, [state]);

    if (!anime) return null;

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <h1>{anime.title}</h1>
                    <p>{anime.description}</p>
                    <div className={styles.list}>
                        {anime.seasons.map((season) => (
                            <div key={season.title}>
                                <h1>{season.title}</h1>
                                <div className={styles.items}>
                                    {season.episodes.map((episode) => (
                                        <div className={styles.item}>
                                            <div className={styles.itemInfo}>
                                                <h2>{episode.title}</h2>
                                                {/* <p>Empty</p> */}
                                            </div>
                                            <div className={styles.itemActions}>
                                                <Button>
                                                    <DownloadSimple />
                                                </Button>
                                                <Link
                                                    to="/player"
                                                    state={{ url: episode.url, episode, episodes: season.episodes }}
                                                >
                                                    <Button>Watch</Button>
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.headerRight}>
                    <img src={anime.image} alt={anime.title} />
                    <Button>Play</Button>
                </div>
            </div>
        </div>
    );
};

export default AnimeDetails;

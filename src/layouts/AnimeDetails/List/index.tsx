import { DownloadSimple } from 'phosphor-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { IAnimeGet } from '../../../@types/anime';
import Button from '../../../components/Button';
import styles from './styles.module.css';

interface IListProps {
    anime: IAnimeGet;
}

const List: React.FC<IListProps> = ({ anime }) => (
    <div className={styles.container}>
        {anime.seasons.map((season) => (
            <div key={season.title}>
                <h1>{season.title}</h1>
                <div className={styles.items}>
                    {season.episodes.map((episode) => (
                        <div className={styles.item}>
                            <div className={styles.itemInfo}>
                                <h2>{episode.title}</h2>
                            </div>
                            <div className={styles.itemActions}>
                                <Button>
                                    <DownloadSimple />
                                </Button>
                                <Link to="/player" state={{ episode, episodes: season.episodes }}>
                                    <Button>Watch</Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ))}
    </div>
);

export default List;

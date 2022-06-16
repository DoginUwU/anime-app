import React from 'react';
import { IAnimeGet } from '../../../@types/anime';
import Episode from './Episode';
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
                        <Episode key={episode.url} episode={episode} anime={anime} season={season} />
                    ))}
                </div>
            </div>
        ))}
    </div>
);

export default List;

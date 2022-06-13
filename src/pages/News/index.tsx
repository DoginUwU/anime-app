import React, { useEffect, useState } from 'react';
import { ISearchItem } from '../../@types/search';
import AnimeCard from '../../components/AnimeCard';
import { getNewsAnime } from '../../libs/api/get/news';
import styles from './styles.module.css';

const News: React.FC = () => {
    const [animes, setAnimes] = useState<ISearchItem[]>([]);

    useEffect(() => {
        getNewsAnime().then(setAnimes);
    }, []);

    return (
        <main className={styles.container}>
            <h1>News</h1>
            <div className={styles.items}>
                {animes.map((anime) => (
                    <AnimeCard key={anime.title} anime={anime} />
                ))}
            </div>
        </main>
    );
};

export default News;

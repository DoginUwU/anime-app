import React from 'react';
import AnimeCard from '../../components/AnimeCard';
import AnimeCardSkeleton from '../../components/Skeletons/AnimeCardSkeleton';
import { useFetchNews } from '../../libs/query/get/news';
import styles from './styles.module.css';

const News: React.FC = () => {
    const { data: animes, isLoading } = useFetchNews();

    return (
        <main className={styles.container}>
            <h1>News</h1>
            <div className={styles.items}>
                {isLoading && <AnimeCardSkeleton length={20} />}
                {animes && animes.map((anime) => <AnimeCard key={anime.title} anime={anime} />)}
            </div>
        </main>
    );
};

export default News;

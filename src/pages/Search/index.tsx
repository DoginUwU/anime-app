import React from 'react';
import { useParams } from 'react-router-dom';
import AnimeCard from '../../components/AnimeCard';
import AnimeCardSkeleton from '../../components/Skeletons/AnimeCardSkeleton';
import { useFetchSearch } from '../../libs/query/get/search';
import styles from './styles.module.css';

const Search: React.FC = () => {
    const { query }: any = useParams();
    const { data: animes, isLoading } = useFetchSearch(query);

    return (
        <main className={styles.container}>
            <h1>Search: {query}</h1>
            <div className={styles.items}>
                {isLoading && <AnimeCardSkeleton length={20} />}
                {animes && animes.map((anime) => <AnimeCard key={anime.title} anime={anime} />)}
            </div>
        </main>
    );
};

export default Search;

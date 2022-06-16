import React from 'react';
import { ISearchItem } from '../../@types/search';
import Empty from '../../layouts/Home/Empty';
import AnimeCard from '../AnimeCard';
import AnimeCardSkeleton from '../Skeletons/AnimeCardSkeleton';
import styles from './styles.module.css';

interface IProps {
    title: string;
    animes: ISearchItem[];
    isLoading: boolean;
}

const AnimeCardsSection: React.FC<IProps> = ({ title, animes, isLoading }) => (
    <div className={styles.list}>
        <h1>{title}</h1>
        <div className={styles.items}>
            {isLoading && <AnimeCardSkeleton />}
            {!isLoading && !animes.length && <Empty />}
            {animes && animes.map((anime) => <AnimeCard anime={anime} key={anime.url} />)}
        </div>
    </div>
);

export default AnimeCardsSection;

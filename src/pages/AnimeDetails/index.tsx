import React from 'react';
import { useLocation } from 'react-router-dom';
import ListSkeleton from '../../components/Skeletons/ListSkeleton';
import Header from '../../layouts/AnimeDetails/Header';
import List from '../../layouts/AnimeDetails/List';
import { useFetchAnime } from '../../libs/query/get/anime';
import styles from './styles.module.css';

interface ILocationProps {
    url: string;
}

const AnimeDetails: React.FC = () => {
    const { state } = useLocation();
    const { url } = state as ILocationProps;
    const { data: anime, isLoading } = useFetchAnime(url);

    return (
        <div className={styles.container}>
            {isLoading && <ListSkeleton />}
            {anime && (
                <Header anime={anime}>
                    <List anime={anime} />
                </Header>
            )}
        </div>
    );
};

export default AnimeDetails;

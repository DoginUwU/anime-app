import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import AnimeCard from '../../components/AnimeCard';
import AnimeCardSkeleton from '../../components/Skeletons/AnimeCardSkeleton';
import { useFetchNews } from '../../libs/query/get/news';
import styles from './styles.module.css';

const News: React.FC = () => {
    const { data, isLoading, fetchNextPage, hasNextPage } = useFetchNews();
    const animes = data?.pages.flatMap((page) => page.items);

    return (
        <main className={styles.container}>
            <h1>News</h1>
            <div className={styles.items}>
                {isLoading && <AnimeCardSkeleton length={20} />}
                {animes && (
                    <InfiniteScroll
                        className={styles.items}
                        dataLength={animes.length}
                        next={fetchNextPage}
                        hasMore={hasNextPage || false}
                        loader={<AnimeCardSkeleton length={20} />}
                    >
                        {animes.map((anime) => (
                            <AnimeCard anime={anime} key={anime.url} />
                        ))}
                    </InfiniteScroll>
                )}
            </div>
        </main>
    );
};

export default News;

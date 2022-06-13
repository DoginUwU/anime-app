import React from 'react';
import AnimeCardSkeleton from '../../../components/Skeletons/AnimeCardSkeleton';
import styles from './styles.module.css';

const Popular: React.FC = () => (
    <div className={styles.list}>
        <h1>Popular</h1>
        <div className={styles.items}>
            <AnimeCardSkeleton />
        </div>
    </div>
);

export default Popular;

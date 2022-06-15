/* eslint-disable react/no-array-index-key */
import React from 'react';
import styles from './styles.module.css';

interface AnimeCardSkeletonProps {
    length?: number;
}

const AnimeCardSkeleton: React.FC<AnimeCardSkeletonProps> = ({ length = 6 }) => (
    <>
        {[...Array(length)].map((_, index) => (
            <div className={styles.item} key={index} />
        ))}
    </>
);

export default AnimeCardSkeleton;

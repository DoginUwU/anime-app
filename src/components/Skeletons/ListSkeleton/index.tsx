import React from 'react';
import styles from './styles.module.css';

const ListSkeleton: React.FC = () => (
    <div className={styles.container}>
        <div className={styles.item1} />
        <div className={styles.item2} />
        <div className={styles.item3} />
        <div className={styles.item4} />
    </div>
);

export default ListSkeleton;

import React from 'react';
import Empty from '../Empty';
import styles from './styles.module.css';

const Recomended: React.FC = () => (
    <div className={styles.list}>
        <h1>Recomended</h1>
        <div className={styles.items}>
            <Empty />
        </div>
    </div>
);

export default Recomended;

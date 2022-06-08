import React from 'react';
import styles from './styles.module.css';

const ContinueWatching: React.FC = () => (
    <div className={styles.list}>
        <h1>Continue watching</h1>
        <div className={styles.items}>
            <div className={styles.item}>
                <img src="https://i.pinimg.com/originals/a2/81/93/a281930405ee5ea88ccf6c26a681271f.jpg" alt="" />
                <div className={styles.itemInfo}>
                    <h2>School Live</h2>
                    <p>E2 - T1 • 1 day ago</p>
                    <div className={styles.itemDuration}>21:42</div>
                </div>
            </div>
        </div>
    </div>
);

export default ContinueWatching;

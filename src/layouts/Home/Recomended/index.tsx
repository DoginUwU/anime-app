import React from 'react';
import styles from './styles.module.css';

const Recomended: React.FC = () => (
    <div className={styles.list}>
        <h1>Recomended</h1>
        <div className={styles.items}>
            <div className={styles.item}>
                <img src="https://i.pinimg.com/originals/a2/81/93/a281930405ee5ea88ccf6c26a681271f.jpg" alt="" />
            </div>
        </div>
    </div>
);

export default Recomended;

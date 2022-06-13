import React from 'react';
import ContinueWatching from '../../layouts/Home/ContinueWatching';
import Recomended from '../../layouts/Home/Recomended';
import styles from './styles.module.css';

const Home: React.FC = () => (
    <div className={styles.container}>
        <ContinueWatching />
        <Recomended />
    </div>
);

export default Home;

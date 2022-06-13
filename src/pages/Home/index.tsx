import React from 'react';
import ContinueWatching from '../../layouts/Home/ContinueWatching';
import Popular from '../../layouts/Home/Popular';
import Recomended from '../../layouts/Home/Recomended';
import styles from './styles.module.css';

const Home: React.FC = () => (
    <div className={styles.container}>
        <ContinueWatching />
        <Recomended />
        <Popular />
    </div>
);

export default Home;

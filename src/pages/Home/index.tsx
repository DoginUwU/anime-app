import React from 'react';
import SearchInput from '../../components/SearchInput';
import ContinueWatching from '../../layouts/Home/ContinueWatching';
import Recomended from '../../layouts/Home/Recomended';
import styles from './styles.module.css';

const Home: React.FC = () => (
    <div className={styles.container}>
        <SearchInput />
        <ContinueWatching />
        <Recomended />
    </div>
);

export default Home;

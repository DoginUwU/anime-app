import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ISearchItem } from '../../@types/search';
import { searchByName } from '../../libs/api/get/search';
import styles from './styles.module.css';

// import { Container } from './styles';

const Search: React.FC = () => {
    const { query } = useParams();
    const [animes, setAnimes] = useState<ISearchItem[]>([]);

    useEffect(() => {
        if (query) {
            searchByName(query).then(setAnimes);
        }
    }, [query]);

    return (
        <main className={styles.container}>
            <h1>Search: {query}</h1>
            <div className={styles.items}>
                {animes.map((anime) => (
                    <Link to="/anime" state={{ url: anime.url }} key={anime.title}>
                        <div className={styles.item}>
                            <img src={anime.image} alt={anime.title} />
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
};

export default Search;

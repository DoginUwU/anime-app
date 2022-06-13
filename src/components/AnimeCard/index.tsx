import React from 'react';
import { Link } from 'react-router-dom';
import { ISearchItem } from '../../@types/search';
import styles from './styles.module.css';

interface IProps {
    anime: ISearchItem;
}

const AnimeCard: React.FC<IProps> = ({ anime }) => (
    <Link to="/anime" state={{ url: anime.url }}>
        <div className={styles.item}>
            <img src={anime.image} alt={anime.title} />
        </div>
    </Link>
);

export default AnimeCard;

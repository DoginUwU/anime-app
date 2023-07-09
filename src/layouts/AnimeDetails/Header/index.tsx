import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { IAnimeGet } from '../../../@types/anime';
import Button from '../../../components/Button';
import styles from './styles.module.css';

interface IHeaderProps {
    anime: IAnimeGet;
}

const Header = ({ anime, children }: PropsWithChildren<IHeaderProps>) => (
    <div className={styles.container}>
        <div className={styles.headerLeft}>
            <h1>{anime.title}</h1>
            <p>{anime.description}</p>
            {children}
        </div>
        <div className={styles.headerRight}>
            <img src={anime.image} alt={anime.title} />
            {anime.seasons.length && anime.seasons[0].episodes.length === 0 && (
                <Link
                    to="/player"
                    state={{
                        episode: anime.seasons[0].episodes[0],
                        episodes: anime.seasons[0].episodes,
                        anime,
                    }}
                >
                    <Button>Play</Button>
                </Link>
            )}
        </div>
    </div>
);

export default Header;

import { DownloadSimple } from 'phosphor-react';
import React from 'react';
import { Link } from 'react-router-dom';
import Wave from 'react-wavify';
import { IAnimeGet } from '../../../@types/anime';
import Button from '../../../components/Button';
import styles from './styles.module.css';

interface IListProps {
    anime: IAnimeGet;
}

const List: React.FC<IListProps> = ({ anime }) => {
    const calcProgressWidth = (progress: number) => {
        const total = 25 + progress;
        return `${total}%`;
    };

    return (
        <div className={styles.container}>
            {anime.seasons.map((season) => (
                <div key={season.title}>
                    <h1>{season.title}</h1>
                    <div className={styles.items}>
                        {season.episodes.map((episode, index) => (
                            <div className={styles.item} key={episode.url}>
                                <div
                                    className={styles.progress}
                                    style={{
                                        // width: `${episode.progress}%`,
                                        width: index === 0 ? calcProgressWidth(25) : '0%',
                                    }}
                                >
                                    <Wave
                                        fill="#7069d1"
                                        paused={false}
                                        options={{
                                            height: 20,
                                            amplitude: 10,
                                            speed: 0.3,
                                            points: 3,
                                        }}
                                    />
                                </div>
                                <div className={styles.itemInfo}>
                                    <h2>{episode.title}</h2>
                                </div>
                                <div className={styles.itemActions}>
                                    <Button>
                                        <DownloadSimple />
                                    </Button>
                                    <Link to="/player" state={{ episode, episodes: season.episodes }}>
                                        <Button>Watch</Button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default List;

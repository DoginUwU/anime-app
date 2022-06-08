import { DownloadSimple } from 'phosphor-react';
import React from 'react';
import Button from '../../components/Button';
import styles from './styles.module.css';

const AnimeDetails: React.FC = () => (
    <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.headerLeft}>
                <h1>School Live</h1>
                <p>
                    Carefree high school junior Yuki Takeya every day looks forward to the School Living Club.
                    Consisting of the president Yuuri Wakasa, the athletic Kurumi Ebisuzawa, the mature Miki Naoki, the
                    supervising teacher Megumi Sakura, and club dog Taroumaru, the club prides itself on making the most
                    of life at school. There is only one rule the club members have to follow: all members must live
                    their entire lives within school grounds.
                </p>
                <div className={styles.list}>
                    <h1>Season 1</h1>
                    <div className={styles.items}>
                        <div className={styles.item}>
                            <div className={styles.itemInfo}>
                                <h2>Episode 1</h2>
                                <p>The jorney beging</p>
                            </div>
                            <div className={styles.itemActions}>
                                <Button>
                                    <DownloadSimple />
                                </Button>
                                <Button>Watch</Button>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.itemInfo}>
                                <h2>Episode 2</h2>
                                <p>K2Gunn</p>
                            </div>
                            <div className={styles.itemActions}>
                                <Button>
                                    <DownloadSimple />
                                </Button>
                                <Button>Watch</Button>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.itemInfo}>
                                <h2>Episode 3</h2>
                                <p>Bahia</p>
                            </div>
                            <div className={styles.itemActions}>
                                <Button>
                                    <DownloadSimple />
                                </Button>
                                <Button>Watch</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.headerRight}>
                <img src="https://i.pinimg.com/originals/a2/81/93/a281930405ee5ea88ccf6c26a681271f.jpg" alt="" />
                <Button>Play</Button>
            </div>
        </div>
    </div>
);

export default AnimeDetails;

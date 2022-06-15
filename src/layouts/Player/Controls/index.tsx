/* eslint-disable react/destructuring-assignment */
import classNames from 'classnames';
import { ArrowLeft, ArrowsOutSimple, Pause, Play, Queue, SpeakerHigh, SpeakerNone } from 'phosphor-react';
import React, { createElement, useState } from 'react';
import { Link } from 'react-router-dom';
import { IAnimeEpisode } from '../../../@types/anime';
import { formatToMMSS } from '../../../utils/time';
import styles from './styles.module.css';

interface IControlsProps {
    episode: IAnimeEpisode;
    episodes: IAnimeEpisode[];
    playing: boolean;
    progress: number;
    duration: number;
    volume: number;
    muted: boolean;
    showing?: boolean;
    onTogglePlay: () => void;
    onGoBack: () => void;
    onSetVolume: (volume: number) => void;
    onToggleMute: () => void;
    onSetProgress: (progress: number) => void;
}

const Controls: React.FC<IControlsProps> = ({ episode, episodes, ...props }) => {
    const [showEpisodes, setShowEpisodes] = useState(false);
    const { playing, progress, duration, volume, muted } = props;
    const { onTogglePlay, onGoBack, onSetProgress, onSetVolume, onToggleMute } = props;

    const handleChangeProgress = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        onSetProgress(parseFloat(value));
    };

    const handleChangeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        onSetVolume(parseFloat(value));
    };

    const handleShowEpisodes = () => {
        setShowEpisodes(!showEpisodes);
    };

    const handleFullscreen = () => {
        if (!window.screenTop && !window.screenY) document.exitFullscreen();
        else document.body.requestFullscreen();
    };

    return (
        <div
            className={styles.container}
            style={{
                opacity: props.showing ? 1 : 0,
            }}
        >
            <div className={styles.titlebar} />
            <div className={styles.back}>
                <ArrowLeft size={32} onClick={onGoBack} />
            </div>
            <div className={styles.controlsTitle}>
                <img src={episode?.image} alt={episode?.title} />
                <h1>{episode?.title}</h1>
            </div>
            <div className={styles.controlsCommands}>
                {createElement(playing ? Pause : Play, {
                    onClick: onTogglePlay,
                })}
            </div>
            <div className={styles.controlsDuration}>
                <p>{formatToMMSS(progress)}</p>
                <input type="range" min="0" max={duration} value={progress} onChange={handleChangeProgress} />
                <p>{formatToMMSS(duration)}</p>
            </div>
            <div className={styles.controlsVolume}>
                {createElement(muted ? SpeakerNone : SpeakerHigh, {
                    onClick: onToggleMute,
                })}
                <input type="range" min="0" max="100" value={muted ? 0 : volume} onChange={handleChangeVolume} />
            </div>
            <div className={styles.controlsOptions}>
                <Queue
                    className={classNames({
                        [styles.active]: showEpisodes,
                    })}
                    onClick={handleShowEpisodes}
                />
                <ArrowsOutSimple onClick={handleFullscreen} />
            </div>
            <div
                className={styles.queue}
                style={{
                    opacity: showEpisodes ? 100 : 0,
                }}
            >
                {episodes.map((e) => (
                    <Link to="/player" state={{ episode: e, episodes }}>
                        <div
                            key={e.url}
                            className={classNames({
                                [styles.active]: e.url === episode?.url,
                            })}
                        >
                            <img src={e?.image} alt={e?.title} />
                            <p>{e?.title}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Controls;

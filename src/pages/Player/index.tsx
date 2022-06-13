import React, { createElement, createRef, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { ArrowLeft, ArrowsOutSimple, Pause, Play, Queue, SpeakerHigh, SpeakerNone } from 'phosphor-react';
import classNames from 'classnames';
import styles from './styles.module.css';
import { getWatchSrc } from '../../libs/api/get/watch';
import { formatToMMSS } from '../../utils/time';
import { IAnimeEpisode } from '../../@types/anime';

interface IStateProps {
    episode: IAnimeEpisode;
    episodes: IAnimeEpisode[];
}

const Player: React.FC = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const [src, setSrc] = useState('');
    const [episode, setEpisode] = useState<IAnimeEpisode>();
    const [episodes, setEpisodes] = useState<IAnimeEpisode[]>([]);
    const [loading, setLoading] = useState(true);
    const ref = createRef<ReactPlayer>();
    const [playing, setPlaying] = useState(true);
    const [volume, setVolume] = useState(50);
    const [muted, setMuted] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [showEpisodes, setShowEpisodes] = useState(false);

    useEffect(() => {
        if (!state) return;
        const { episode: getEpisode, episodes: getEpisodes } = state as IStateProps;

        setSrc(getWatchSrc(getEpisode.url));
        setEpisode(getEpisode);
        setEpisodes(getEpisodes);
    }, [state]);

    useEffect(() => {
        setLoading(true);
        setPlaying(true);
        setProgress(0);
        setDuration(0);
        setShowEpisodes(false);
    }, [src]);

    const togglePlay = () => {
        setPlaying(!playing);
    };

    const goBack = () => {
        navigate(-1);
    };

    const handleProgress = () => {
        if (!ref.current) return;
        const { getCurrentTime, getDuration } = ref.current;
        setProgress(getCurrentTime);
        setDuration(getDuration);
    };

    const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVolume(Number(e.target.value));
    };

    const handleMute = () => {
        setMuted(!muted);
    };

    const handleChangeProgress = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!ref.current) return;
        const { seekTo } = ref.current;
        seekTo(Number(e.target.value));
    };

    const handleFullscreen = () => {
        if (!window.screenTop && !window.screenY) document.exitFullscreen();
        else document.body.requestFullscreen();
    };

    const handleShowEpisodes = () => {
        setShowEpisodes(!showEpisodes);
    };

    const handleReady = () => {
        setLoading(false);
    };

    return (
        <div className={styles.container}>
            <ReactPlayer
                className={styles.player}
                ref={ref}
                url={src}
                width="100%"
                height="100%"
                playing={playing}
                volume={muted ? 0 : volume / 100}
                onProgress={handleProgress}
                onReady={handleReady}
            />
            <div className={styles.controls}>
                <div className={styles.back}>
                    <ArrowLeft size={32} onClick={goBack} />
                </div>
                <div className={styles.controlsTitle}>
                    <img src={episode?.image} alt={episode?.title} />
                    <h1>{episode?.title}</h1>
                </div>
                <div className={styles.controlsCommands}>
                    {createElement(playing ? Pause : Play, {
                        onClick: togglePlay,
                    })}
                </div>
                <div className={styles.controlsDuration}>
                    <p>{formatToMMSS(progress)}</p>
                    <input type="range" min="0" max={duration} value={progress} onChange={handleChangeProgress} />
                    <p>{formatToMMSS(duration)}</p>
                </div>
                <div className={styles.controlsVolume}>
                    {createElement(muted ? SpeakerNone : SpeakerHigh, {
                        onClick: handleMute,
                    })}
                    <input type="range" min="0" max="100" value={muted ? 0 : volume} onChange={handleVolume} />
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
            {loading && (
                <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center z-40">
                    <img
                        className="w-[200px] h-[200px]"
                        src="https://res.cloudinary.com/doginuwu/image/upload/v1655045084/loading_ta2osi.gif"
                        alt="loading"
                    />
                </div>
            )}
        </div>
    );
};

export default Player;

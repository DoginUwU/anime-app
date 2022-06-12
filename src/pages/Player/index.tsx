import React, { createElement, createRef, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { ArrowLeft, ArrowsOutSimple, Pause, Play, Queue, SpeakerHigh, SpeakerNone } from 'phosphor-react';
import styles from './styles.module.css';
import { getWatchSrc } from '../../libs/api/get/watch';
import { formatToMMSS } from '../../utils/time';
import { IAnimeEpisode } from '../../@types/anime';

interface IStateProps {
    url: string;
    episode: IAnimeEpisode;
}

const Player: React.FC = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const [src, setSrc] = useState('');
    const [episode, setEpisode] = useState<IAnimeEpisode>();
    const ref = createRef<ReactPlayer>();
    const [playing, setPlaying] = useState(true);
    const [volume, setVolume] = useState(50);
    const [muted, setMuted] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        if (!state) return;
        const { url, episode: getEpisode } = state as IStateProps;

        setSrc(getWatchSrc(url));
        setEpisode(getEpisode);
    }, [state]);

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

    return (
        <div className={styles.container}>
            <ReactPlayer
                className={styles.player}
                ref={ref}
                url={src}
                width="100%"
                height="100%"
                onProgress={handleProgress}
                playing={playing}
                volume={muted ? 0 : volume / 100}
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
                    <Queue />
                    <ArrowsOutSimple onClick={handleFullscreen} />
                </div>
            </div>
            <div className={styles.queue}>
                <div>
                    <img src={episode?.image} alt={episode?.title} />
                    <h3>{episode?.title}</h3>
                </div>
                <div>
                    <img src={episode?.image} alt={episode?.title} />
                    <h3>{episode?.title}</h3>
                </div>
                <div>
                    <img src={episode?.image} alt={episode?.title} />
                    <h3>{episode?.title}</h3>
                </div>
                <div>
                    <img src={episode?.image} alt={episode?.title} />
                    <h3>{episode?.title}</h3>
                </div>
            </div>
        </div>
    );
};

export default Player;

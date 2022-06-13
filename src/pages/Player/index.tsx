import React, { createRef, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useLocation, useNavigate } from 'react-router-dom';
import { IAnimeEpisode } from '../../@types/anime';
import Controls from '../../layouts/Player/Controls';
import Loading from '../../layouts/Player/Loading';
import { getWatchSrc } from '../../libs/api/get/watch';
import styles from './styles.module.css';

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

    const handleMute = () => {
        setMuted(!muted);
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
            {episode && (
                <Controls
                    episode={episode}
                    episodes={episodes}
                    playing={playing}
                    progress={progress}
                    duration={duration}
                    volume={volume}
                    muted={muted}
                    onTogglePlay={togglePlay}
                    onGoBack={goBack}
                    onSetVolume={setVolume}
                    onToggleMute={handleMute}
                    onSetProgress={setProgress}
                />
            )}
            {loading && <Loading />}
        </div>
    );
};

export default Player;

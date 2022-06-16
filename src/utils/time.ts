import { formatDistance, subDays } from 'date-fns';

const formatToMMSS = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = Math.floor(seconds % 60);

    return `${minutes < 10 ? '0' : ''}${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
};

const formatDistanceToNow = (date: Date) => formatDistance(date, new Date(), { addSuffix: true });

export { formatToMMSS };

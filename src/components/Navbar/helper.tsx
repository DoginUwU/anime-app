import { House, DownloadSimple, Clock, Heart, Playlist, Broadcast } from 'phosphor-react';
import { FunctionComponent } from 'react';

interface IItem {
    name: string;
    link: string;
    icon: FunctionComponent;
}

interface IMenu {
    name: string;
    items: IItem[];
}

const menu: IMenu[] = [
    {
        name: 'Home',
        items: [
            {
                name: 'Home',
                link: '/',
                icon: House,
            },
            {
                name: 'Latest',
                link: '/latest',
                icon: Broadcast,
            },
            {
                name: 'Downloads',
                link: '/downloads',
                icon: DownloadSimple,
            },
        ],
    },
    {
        name: 'Library',
        items: [
            {
                name: 'History',
                link: '/history',
                icon: Clock,
            },
            {
                name: 'Favorites',
                link: '/favorites',
                icon: Heart,
            },
        ],
    },
    {
        name: 'Playlists',
        items: [
            {
                name: 'Drama Animes',
                link: '/playlist1',
                icon: Playlist,
            },
        ],
    },
];

export { menu };

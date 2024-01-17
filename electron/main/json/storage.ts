/* eslint-disable no-empty-pattern */
import { Schema } from 'electron-store';
import { StorageData } from '../../../src/@types/storage';

export const storage: Schema<StorageData> = {
    continue_watching: {
        type: 'object',
        properties: {
            episodes: {
                type: 'array',
                properties: {
                    url: { type: 'string' },
                    title: { type: 'string' },
                    episode: { type: 'number' },
                    season: { type: 'number' },
                    date: { type: 'string' },
                },
            },
        },
    },
};

import { contextBridge, ipcRenderer } from 'electron';
import { ENVIRONMENTS } from './environment';

export const api = {
    sendMessage: (message: string) => {
        ipcRenderer.send('message', message);
    },

    getEnvironment: (): typeof ENVIRONMENTS['development'] => ipcRenderer.sendSync('getEnvironment'),

    setStorage: <T>(key: string, value: T) => ipcRenderer.send('setStorage', key, value),

    getStorage: <T>(key: string): T => ipcRenderer.sendSync('getStorage', key),

    removeStorage: (key: string) => ipcRenderer.send('removeStorage', key),

    clearStorage: () => ipcRenderer.send('clearStorage'),

    on: (channel: string, callback: Function) => {
        ipcRenderer.on(channel, (_, data) => callback(data));
    },
};

contextBridge.exposeInMainWorld('Main', api);

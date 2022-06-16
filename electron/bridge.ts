import { contextBridge, ipcRenderer } from 'electron';

export const api = {
    /**
     * Here you can expose functions to the renderer process
     * so they can interact with the main (electron) side
     * without security problems.
     *
     * The function below can accessed using `window.Main.sendMessage`
     */

    sendMessage: (message: string) => {
        ipcRenderer.send('message', message);
    },

    getEnvironment: (name: string) => ipcRenderer.sendSync('getEnvironment', name),

    setStorage: <T>(key: string, value: T) => ipcRenderer.send('setStorage', key, value),

    getStorage: <T>(key: string): T => ipcRenderer.sendSync('getStorage', key),

    removeStorage: (key: string) => ipcRenderer.send('removeStorage', key),

    clearStorage: () => ipcRenderer.send('clearStorage'),

    /**
     * Provide an easier way to listen to events
     */
    on: (channel: string, callback: Function) => {
        ipcRenderer.on(channel, (_, data) => callback(data));
    },
};

contextBridge.exposeInMainWorld('Main', api);

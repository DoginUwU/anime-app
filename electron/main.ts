/* eslint-disable global-require */
/* eslint-disable no-param-reassign */
import { app, ipcMain, protocol, BrowserWindow } from 'electron';
import Store from 'electron-store';
import { ENVIRONMENTS } from './environment';
import { storage } from './json/storage';

let mainWindow: BrowserWindow | null;

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true';

const store = new Store({
    accessPropertiesByDotNotation: true,
    schema: storage,
});

protocol.registerSchemesAsPrivileged([
    {
        scheme: 'http',
        privileges: {
            standard: true,
            bypassCSP: true,
            allowServiceWorkers: true,
            supportFetchAPI: true,
            corsEnabled: true,
            stream: true,
        },
    },
    {
        scheme: 'https',
        privileges: {
            standard: true,
            bypassCSP: true,
            allowServiceWorkers: true,
            supportFetchAPI: true,
            corsEnabled: true,
            stream: true,
        },
    },
    { scheme: 'mailto', privileges: { standard: true } },
]);

function createWindow() {
    mainWindow = new BrowserWindow({
        // icon: path.join(assetsPath, 'assets', 'icon.png'),
        width: 1066,
        height: 685.69,
        transparent: false,
        frame: false,
        backgroundColor: '#14121c',
        roundedCorners: true,
        thickFrame: true,
        resizable: false,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
            webSecurity: false,
        },
    });

    mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

async function registerListeners() {
    ipcMain.on('message', () => {});

    ipcMain.on('getEnvironment', (event) => {
        if (!process.env.NODE_ENV) {
            event.returnValue = undefined;
            return;
        }

        event.returnValue = ENVIRONMENTS[process.env.NODE_ENV as keyof typeof ENVIRONMENTS];
    });

    ipcMain.on('setStorage', (_, key, value) => {
        store.set(key, value);
    });

    ipcMain.on('getStorage', (event, key) => {
        event.returnValue = store.get(key);
    });

    ipcMain.on('removeStorage', (_, key) => {
        store.delete(key);
    });

    ipcMain.on('clearStorage', () => {
        store.clear();
    });
}

app.on('ready', createWindow)
    .whenReady()
    .then(registerListeners)
    .catch((e) => {
        throw new Error(e);
    });

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

if (require('electron-squirrel-startup')) app.quit();

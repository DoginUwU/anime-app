import { app, ipcMain, protocol, session } from 'electron';
import { BrowserWindow } from 'electron-acrylic-window';

let mainWindow: BrowserWindow | null;

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true';

// const assetsPath =
//   process.env.NODE_ENV === 'production'
//     ? process.resourcesPath
//     : app.getAppPath()

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
        width: 1100,
        height: 700,
        transparent: true,
        frame: false,
        backgroundColor: '#14121c',
        roundedCorners: true,
        thickFrame: true,
        vibrancy: {
            theme: 'dark',
            effect: 'acrylic',
        },
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
    /**
     * This comes from bridge integration, check bridge.ts
     */
    ipcMain.on('message', (_, message) => {
        console.log(message);
    });
}

app.on('ready', createWindow)
    .whenReady()
    .then(registerListeners)
    .catch((e) => console.error(e));

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

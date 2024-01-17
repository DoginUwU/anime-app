import { IpcRenderer } from 'electron'

declare global {
  // eslint-disable-next-line
  interface Window {
    ipcRenderer: any
  }
}

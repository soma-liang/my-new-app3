// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  setTitle: (title: any) => ipcRenderer.send("set-title", title),
  login: (user: any) => ipcRenderer.send("set-user", user),
});

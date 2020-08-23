import GmWindow from "./gm/Window";
import TvWindow from "./tv/Window";

let gmWindow = null;
let tvWindow = null;

import {app, BrowserWindow} from "electron";

export default async function initFrontend() {

    app.whenReady().then(() => {

        gmWindow = new GmWindow(app);
        tvWindow = new TvWindow(app);

        createWindows();

        // Quit when all windows are closed, except on macOS. There, it's common
        // for applications and their menu bar to stay active until the user quits
        // explicitly with Cmd + Q.
        app.on('window-all-closed', function () {
            if (process.platform !== 'darwin') app.quit();
        });

        app.on('activate', function () {
            // On macOS it's common to re-create a window in the app when the
            // dock icon is clicked and there are no other windows open.
            if (BrowserWindow.getAllWindows().length === 0) createWindows();
        });
    });

}

function createWindows() {
    gmWindow.create();
    tvWindow.create();
}
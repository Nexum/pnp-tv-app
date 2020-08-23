import {BrowserWindow} from "electron";

export default class BaseWindow {

    app = null;
    window = null;
    debug = false;
    index = "index.html";
    preload = "preload.js";
    width = 800;
    height = 600;

    constructor(app) {
        this.app = app;
    }

    create() {
        this.window = new BrowserWindow({
            width: this.width,
            height: this.height,
            webPreferences: {
                preload: this.preload,
            },
        });

        this.window.loadFile(this.index);

        if (this.debug) {
            this.window.webContents.openDevTools();
        }
    }


}
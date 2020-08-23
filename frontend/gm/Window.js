import BaseWindow from "./../lib/BaseWindow";
import path from "path";

export default class GmWindow extends BaseWindow {

    debug = false;
    index = path.join(__dirname, "index.html");
    preload = path.join(__dirname, "preload.js");

}
require("@babel/register");

const initBackend = require("./backend/index").default;
const initFrontend = require("./frontend/index").default;

(async function () {
    await initBackend();
    await initFrontend();
})();
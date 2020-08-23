const path = require("path");

module.exports = {
    entry: {
        tv: "./frontend/tv/src/index",
        gm: "./frontend/gm/src/index",
    },
    output: {
        path: __dirname + '/frontend/dist/',
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
};
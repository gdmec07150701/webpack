'use strict';
const webpack = require("webpack");

module.exports = {
    context: __dirname,
    entry: {
        app: "./app.js"
    },
    output: {
        path: __dirname,
        filename: "[name].bundle.js",
        publicPath: "/assets"
    },
    devServer: {
        contentBase: __dirname
    }
};
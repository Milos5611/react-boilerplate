// production config
const {resolve} = require("path");
const commonConfig = require("./common");
const merge = require("webpack-merge");
const webpack = require("webpack");

module.exports = merge(commonConfig, {
    entry: [
        "babel-polyfill",
        "../src/app/app.js"
    ],
    output: {
        filename: "bundle.[hash].min.js",
        path: resolve(__dirname, "../build"),
        publicPath: "/"
    },
    devtool: "source-map",
    plugins: [
        new webpack.DefinePlugin({
            "window.com.cogent": {
                NODE_ENV: JSON.stringify("production"),
                BASE_URL: JSON.stringify("https://api.foursquare.com/v2/venues")
            }
        })
    ]
});

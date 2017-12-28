const merge = require("webpack-merge");
const webpack = require("webpack");
const commonConfig = require("./common");

module.exports = merge(commonConfig, {
    entry: [
        "react-hot-loader/patch", // activate HMR for React
        "webpack-dev-server/client?http://localhost:8080",
        "webpack/hot/only-dev-server",
        "babel-polyfill",
        "../src/app/app.js"
    ],
    devServer: {
        hot: true, // enable HMR on the server
    },
    devtool: "cheap-module-source-map",
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // enable HMR globally
        new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates,
        new webpack.DefinePlugin({
            "window.com.cogent": {
                NODE_ENV: JSON.stringify("development"),
                BASE_URL: JSON.stringify("https://api.foursquare.com/v2/venues")
            }
        })
    ]
});

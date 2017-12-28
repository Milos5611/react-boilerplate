// shared config (dev and prod)
const {resolve} = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const TransferWebpackPlugin = require("transfer-webpack-plugin");

module.exports = {
    resolve: {
        extensions: [".js", ".jsx"]
    },
    context: resolve(__dirname, "../src"),
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {
                    failOnError: false,
                    emitWarning: true
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    cacheDirectory: true,
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", {loader: "css-loader", options: {importLoaders: 1}}, "postcss-loader"]
            },
            {
                test: /\.(scss|sass)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "postcss-loader", "sass-loader"]
                })
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    "file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]",
                    "image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false"
                ]
            }
        ]
    },
    plugins: [
        // Extract sass then postcss to css
        new ExtractTextPlugin({
            filename: "app.[hash].css",
            allChunks: true
        }),
        // Moves files
        new TransferWebpackPlugin([
            {from: "www"},
        ], resolve(__dirname, "../src")),
        new HtmlWebpackPlugin(
            {
                template: "www/index.ejs",
                inject: true
            })
    ],
    performance: {
        hints: false
    }
};

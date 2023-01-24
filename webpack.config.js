const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

module.exports = {
    entry: "./src/index.tsx",
    output: { path: path.join(__dirname, "build"), filename: "index.bundle.js", clean: true },
    mode: process.env.NODE_ENV || "development",
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, "/"),
        },
        open: true,
        compress: true,
        hot: true,
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"],
            },
            // {
            //     test: /\.(svg|png|jp(e*)g|gif)$/,
            //     use: [{
            //         loader: "file-loader",
            //         options: {
            //             name: "[name].[hash].[ext]",
            //             outputPath: "img",
            //         }
            //     }]
            // },
            {
                test: /\.(scss|css|sass)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                type: "asset",
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
    ],
};
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/bundle.[contentHash].js"
    },

    devServer: {
        contentBase: "dist"
    },

    plugins: [

        new htmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html"
        })
    ],

    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    "html-loader"
                ]
            },

            {
                test: /\.sass$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },

            {
                test: /\.(svg|jpg|jpeg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "images"
                    }
                }
            }
        ]
    }
}
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const host = process.env.HOST || "localhost";

var config = {
    entry: './src/index.js',
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(__dirname, "public/index.html"),
        }),
    ],
    devServer: {

        compress: true,
        hot: true,
        host,
        port: 3000,
        open: true,


    },
};

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.devtool = 'source-map';
    }

    if (argv.mode === 'production') {
        //...
    }

    return config;
};
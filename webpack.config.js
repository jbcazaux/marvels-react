var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');
var path = require('path');

module.exports = {
    entry: {
        app: "./src/index.tsx"
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/'
    },

    devtool: "source-map",

    devServer: {
        historyApiFallback: true
    },

    context: path.resolve(__dirname, './'),

    resolve: {
        extensions: [".webpack.js", ".ts", ".tsx", ".js"],
        modules: [
            path.resolve('./src'),
            path.resolve('./node_modules')
        ]
    },

    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: "source-map-loader",
                exclude: [/node_modules/]
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: "style-loader",
                    loader: "css-loader"
                })
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[hash].[ext]'
                }
            },
            {
                test: /\.ico$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]'
                }
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development'),
                'SERVER': JSON.stringify('local')
            }
        }),
        new HtmlWebpackPlugin({
            title: 'Marvels',
            filename: 'index.html',
            template: './src/index.html',
            inject: 'body'
        }),
        new ExtractTextPlugin("[name].css"),
        new CleanWebpackPlugin(['dist', 'target'], {
            verbose: true
        })
    ],

    externals: {
        'react': 'React',
        "react-dom": "ReactDOM"
    }
};
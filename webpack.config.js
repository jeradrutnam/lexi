var webpack = require('webpack');
var path = require('path');

var ROOT_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'src/public');

var config = {
    entry: ROOT_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module : {
        loaders : [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: ['es2015', 'react']
                        }
                    }
                ]
            },
            {
                test : /\.jsx?/,
                exclude: /node_modules/,
                include : ROOT_DIR,
                loader : 'babel-loader'
            }
        ]
    },
    devtool: 'source-map',
};

module.exports = config;

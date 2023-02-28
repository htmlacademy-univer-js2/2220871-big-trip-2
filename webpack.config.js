const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/main.js'),
    },
output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
	clean: true
    },
devtool: 'source-map',
plugins: [
        
        new CleanWebpackPlugin(),
	new webpack.SourceMapDevToolPlugin(),
	new CopyPlugin({
      		patterns: [
        		{ from: "./public", to: "./build" },
      		],
    	}),

    ],
module: {
    rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: ['babel-loader']
        }
    ]
  }
}
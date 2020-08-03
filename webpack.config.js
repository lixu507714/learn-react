const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

 module.exports = {
    devtool: 'inline-source-map',
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        
        rules: [{
            test: /\.css$/,
            use:ExtractTextPlugin.extract({
                fallback:"style-loader",
                use:"css-loader"
            })
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract({
                fallback:"style-loader",
                use:"css-loader!sass-loader"
            })
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: 'img/[name].[hash:7].[ext]'
            }
        }, {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    devServer: {
        contentBase: './build',
        port: 8081,
        inline: true,
        hot: true
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPlugin({
            template: 'src/index.html'
        })
    ]
}
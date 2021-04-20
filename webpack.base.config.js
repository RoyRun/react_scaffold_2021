
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        print: './src/print.js',
        main: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'images/[hash][ext][query]',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'] // 从左到右
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource' // 配合assetModuleFilename使用，along with Asset Module in webpack5 取代file-loader
            }, {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource' // 自定义loader 可用type: 'javescript/auto'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'my page',
            template: path.resolve(__dirname, 'build/index.html'),
            favicon: path.resolve(__dirname, 'build/favicon.ico'),
        })
    ]
}

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        print: './src/print.js',
        main: './src/index.js'
        // main: {
        //     import : './src/index.js',
        //     dependOn: 'shared' // 多文件入口共享模块
        // }
    },
    output: {
        filename: '[name].[contenthash:5].js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'images/[hash][ext][query]',
        clean: true,
        publicPath: '/', // 引入js文件前缀路径
        // library: { // 发布包时的名称和支持的方式：commonJS, AMD, script
        //     name: 'reactScaffold',
        //     type: 'umd'
        // }
    },
    // externals: {
    //     lodash 
    // },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                     'css-loader']
                      // 从左到右
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
        new MiniCssExtractPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
        new HtmlWebpackPlugin({
            title: 'my page',
            template: path.resolve(__dirname, 'build/index.html'),
            favicon: path.resolve(__dirname, 'build/favicon.ico'),
        })
    ]
}
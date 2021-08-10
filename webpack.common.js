
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LodashModuleReplaceMentPlugin = require('lodash-webpack-plugin')
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const devMode = process.env.NODE_ENV !== 'production';

const myPlugin = [
    // new BundleAnalyzerPlugin(),
    new LodashModuleReplaceMentPlugin,
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new HtmlWebpackPlugin({
        title: 'my page',
        minify: false,
        template: path.resolve(__dirname, 'build/index.html'),
        favicon: path.resolve(__dirname, 'build/favicon.ico'),
    })
]
module.exports = {
    entry: './src/index.js',
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
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/i,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        
                        cacheDirectory: true // speed up bable-loader 
                    }
                }]
            },
            {
                test: /\.md$/i,
                exclude: /node_modules/,
                use: ['html-loader','markdown-loader']
            },
            {
                test: /\.less$/i,
                exclude: /node_modules/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true
                        } 
                    },
                    'postcss-loader'
                ] 
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                     'css-loader',
                     'postcss-loader'
                    ]
            },
            {
                test: /\.(jpg|png|jpeg|gif)$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024*8 // 8k
                        }
                    }
                ]
            },
            // {
            //     test: /\.(png|svg|jpg|jpeg|gif)$/i,
            //     type: 'asset/resource' // 配合assetModuleFilename使用，along with Asset Module in webpack5 取代file-loader
            // }, 
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                exclude: /node_modules/,
                type: 'asset/resource' // 自定义loader 可用type: 'javescript/auto'
            }
        ]
    },
    plugins: devMode ?  myPlugin : [new MiniCssExtractPlugin(), ...myPlugin],
    resolveLoader: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'loaders')
        ]
    }
}
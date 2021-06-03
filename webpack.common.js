
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const { loader } = require('mini-css-extract-plugin');

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
    // externals: {
    //     lodash 
    // },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [[
                            '@babel/preset-env', // 包含所有es 最新特性
                            {
                                useBuiltIns:  'usage' // polifill 按需加载
                            }
                        ],[
                            '@babel/preset-react',
                        ]],
                        plugins: [
                            [
                                '@babel/plugin-transform-runtime',
                                {
                                    'corejs': 3
                                }
                            ]
                        ],
                        cacheDirectory: true // speed up bable-loader 
                    }
                }
            },
            {
                test: /\.less$/i,
                use: [
                    MiniCssExtractPlugin.loader,
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
                use: [
                    MiniCssExtractPlugin.loader,
                     'css-loader',
                     'postcss-loader'
                    ]
            },
            {
                test: /\.(jpg|png|jpeg|gif)$/i,
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
                type: 'asset/resource' // 自定义loader 可用type: 'javescript/auto'
            }, {
                test: /.html$/,
                use: {
                  loader: 'html-loader', // TODO:
                  options: {
                    sources: {
                        list: [
                            '...',
                            {
                            tag: 'img',
                            attribute: 'src',
                            type: 'src'
                        }]
                    }
                  }
                }
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
            minify: false,
            template: path.resolve(__dirname, 'build/index.html'),
            favicon: path.resolve(__dirname, 'build/favicon.ico'),
        })
    ]
}
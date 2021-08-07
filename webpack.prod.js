
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'hidden-source-map', // 隐藏源码信息
    optimization: {
        minimize: true,
        moduleIds: 'deterministic', // 只有内容改变的模块hashid会改变
        runtimeChunk: 'single', // 单独提取运行时代码到一个js 文件中
        splitChunks: { // splitChunkPlugin
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                }
            }
        },
    },// 自动加载TerserPlugin
    
});
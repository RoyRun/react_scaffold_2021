
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimize: false,
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
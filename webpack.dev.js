
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')

const smp = new SpeedMeasurePlugin({
    // outputFormat: 'humanVerbose',
    // loaderTopFiles: 10
});

module.exports = smp.wrap(merge(common, {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: './dist' // dev server serve from dist
        // http://[devServer.host]:[devServer.port]/[output.publicPath]/[output.filename]
        // webpack-dev-server = webpack-dev-middle + express 
    },
  
}));

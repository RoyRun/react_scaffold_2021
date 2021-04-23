
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist' // dev server serve from dist
        // http://[devServer.host]:[devServer.port]/[output.publicPath]/[output.filename]
        // webpack-dev-server = webpack-dev-middle + express 
    },
  
});
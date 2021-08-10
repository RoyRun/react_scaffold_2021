const LoaderUtils = require('loader-utils');
const marked = require('marked')
module.exports = function foorLoader(source) {
    var options = LoaderUtils.getOptions(this);
    // source = source.replace(/\[name\]/g,options.name);
    source = marked(source)
    console.log(typeof source)
    return source

}
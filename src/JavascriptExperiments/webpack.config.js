var webpack = require("webpack");
var merge = require("merge");
var releaseConfig = require("./webpack.debug.config");

var objToMerge = {
    
    plugins: [
        //new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            compress: {
                warnings:false
            }
        }),
        //new webpack.optimize.AggressiveMergingPlugin()
    ]
};

module.exports = merge(true, objToMerge, releaseConfig);

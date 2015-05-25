var webpack = require("webpack");
module.exports =
{
    
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
          {
              test: /\.css$/,
              loader: 'style!css'
          },
          {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel?stage=0&optional=runtime&cacheDirectory=true'
          },

        ],

    },
    devtool: "source-map",
    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath:"/Lib/"
    }
};
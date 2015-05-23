var webpack = require("webpack");
module.exports =
{
    watch: true,
    module: {
        loaders: [
          {
              test: /\.css$/,
              loader: 'style!css'
          },
          {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel?stage=1&optional=runtime&cacheDirectory=true'
          },

        ],
        plugins: [
            //new webpack.optimize.DedupePlugin(),
            //new webpack.optimize.UglifyJsPlugin(),
            //new webpack.optimize.AggressiveMergingPlugin()
        ]
    },
    devtool: "source-map",
    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath:"/Lib/"
    }
};
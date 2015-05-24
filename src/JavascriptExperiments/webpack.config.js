var webpack = require("webpack");
module.exports =
{
    watch: true,
    plugins: [
        //new webpack.optimize.DedupePlugin(),
        //new webpack.optimize.UglifyJsPlugin({
        //    mangle: true,
        //    compress: {
        //        warnings:false
        //    }
        //}),
        //new webpack.optimize.AggressiveMergingPlugin()
    ],
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
              loader: 'babel?stage=1&optional=runtime&cacheDirectory=true'
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
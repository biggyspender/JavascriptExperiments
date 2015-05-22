var gulp = require('gulp');
var gutil = require("gulp-util");
var clean = require("gulp-clean");
var webpack = require("gulp-webpack");
var fs = require("fs");

eval("var project = " + fs.readFileSync("./project.json"));
var paths = {
    bower: "./bower_components/",
    lib: "./" + project.webroot + "/lib/"
};

gulp.task('clean', function () {
    gulp.src(paths.lib + "**/*").pipe(clean());
});

gulp.task("webpack", function () {
    return gulp.src('Scripts/entry.js')
        .pipe(webpack({
            //watch: true,
            module: {
                loaders: [
                  { test: /\.css$/, loader: 'style!css' },
                  {
                      test: /\.jsx?$/,
                      exclude: /(node_modules|bower_components)/,
                      loader: 'babel?stage=1&optional=runtime'
                  }
        
                ]
            },
            devtool: "eval-source-map",
            output: {
                path: __dirname,
                filename: 'bundle.js'
            }
        }))
        .pipe(gulp.dest(paths.lib));
});
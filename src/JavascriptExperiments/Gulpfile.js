var gulp = require('gulp');
var gutil = require("gulp-util");
var clean = require("gulp-clean");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config");
var webpackDebugConfig = require("./webpack.debug.config");
var gulpWebpack = require("gulp-webpack");
var fs = require("fs");
var merge = require("merge");


eval("var project = " + fs.readFileSync("./project.json"));

var paths = {
    bower: "./bower_components/",
    lib: "./" + project.webroot + "/lib/"
};

gulp.task('clean', function () {
    gulp.src(paths.lib + "**/*").pipe(clean());
});

gulp.task("webpack", function () {
    return runWebpack(webpackConfig);
});

gulp.task("webpackDebug", function () {
   
    return runWebpack(webpackDebugConfig);
});
gulp.task("webpack-watch", function () {
    return runWebpack(merge(true, { watch: true }, webpackConfig));
});

gulp.task("webpackDebug-watch", function () {
    return runWebpack(merge(true, { watch: true }, webpackDebugConfig));
});

function runWebpack(config) {
    return gulp.src('./Scripts/entry.js')
        .pipe(gulpWebpack(config, webpack))
        .pipe(gulp.dest(paths.lib));
}


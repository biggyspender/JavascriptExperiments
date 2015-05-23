var gulp = require('gulp');
var gutil = require("gulp-util");
var clean = require("gulp-clean");
var uglify = require("gulp-uglify");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config");
var gulpWebpack = require("gulp-webpack");
var closure = require('gulp-closure-compiler-service');
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
    return gulp.src('./Scripts/entry.js')
        .pipe(gulpWebpack(webpackConfig, webpack))
        .pipe(gulp.dest(paths.lib));
});


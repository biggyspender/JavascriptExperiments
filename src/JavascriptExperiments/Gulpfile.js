var gulp = require('gulp');
var gutil = require("gulp-util");
var webpack = require("gulp-webpack");
var fs = require("fs");

eval("var project = " + fs.readFileSync("./project.json"));
var paths = {
    bower: "./bower_components/",
    lib: "./" + project.webroot + "/lib/"
};

gulp.task('default', function () {
    // place code for your default task here
});

gulp.task("webpack", function () {
    return gulp.src('Scripts/entry.js')
        .pipe(webpack({ /* webpack configuration */ }))
        .pipe(gulp.dest(paths.lib));
});
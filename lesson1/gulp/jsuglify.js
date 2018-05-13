'use strict';
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const filesort = require('gulp-angular-filesort');
const babel = require('gulp-babel');
const gutil = require('gulp-util');

gulp.task('jsuglify', function () {
    const jspath = gulp.src(['src/**/*.js', 'src/*.js']);
    return jspath
    .pipe(filesort())
    // .pipe(babel({
    //     presets:['env']//es6 语法需要编译为es5语法才能被jsuglify丑化
    // }))
    // .pipe(uglify())
    .on('error', function (err) {
        gutil.log(gutil.colors.red('[Error]'), err.toString());
    })
    .pipe(concat('all.min.js'))
    .pipe(gulp.dest('./dest/scripts'))
});

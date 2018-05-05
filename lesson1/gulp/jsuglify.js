'use strict';
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const filesort = require('gulp-angular-filesort');
const babel = require('gulp-babel');

gulp.task('jsuglify', function () {
    const jspath = gulp.src(['src/**/*.js', 'src/*.js']);
    return jspath
    .pipe(filesort())
    .pipe(babel({
        presets:['env']
    }))
    // .pipe(uglify())
    .on('error', function (err) {
        gutil.log(gutil.colors.red('[Error]'), err.toString());
    })
    .pipe(concat('all.min.js'))
    .pipe(gulp.dest('./dest/scripts'))
});
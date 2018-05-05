'use strict';
const gulp = require('gulp');
const bower = require('gulp-wiredep');
const useref = require('gulp-useref');

gulp.task('bower', function () {
    return gulp.src('src/index.html')
    .pipe(bower({
        optional: 'configuration',
        goes: 'here',
        // ignorePath: '../'
    }))
    .pipe(useref())
    .pipe(gulp.dest('./dest'));
});

// gulp.task('bowerMove',function () {
//     return gulp.src('bower_components/**')
//     .pipe(gulp.dest('./dest/bower_components'));
// });

// gulp.task('indexMove', function () {
//     return gulp.src('src/index.html')
//     .pipe(gulp.dest('./dest/'));
// });
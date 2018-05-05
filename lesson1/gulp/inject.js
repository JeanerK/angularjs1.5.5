'use strict';
const gulp = require('gulp');
const inject = require('gulp-inject');

gulp.task('inject',['jsuglify','bower'], function () {
    const target = gulp.src('dest/index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    const sources = gulp.src(['dest/scripts/*.js','dest/css/*.css', '!dest/scripts/vendor.min.js','!dest/style/style.css'], {read: false});

    return target.pipe(inject(sources, {relative: true, ignorePath: '/dest'}))
    .pipe(gulp.dest('./dest'));
});
'use strict';

const gulp = require('gulp');

const browserSync = require('browser-sync');

const gulpBrowserSync = require('gulp-browser-sync');

const reload = browserSync.reload;

function isOnlyChange(event) {
    return event.type === 'changed';
}

gulp.task('watch', ['inject'], function () {
    gulp.watch(['src/**'], function(event) {
        gulp.start('inject-reload');
    });
});

gulp.task('inject-reload', ['inject'], function() {
    browserSync.reload();
});
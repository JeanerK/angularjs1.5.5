'use strict';
const gulp = require('gulp');
const inject = require('gulp-inject');

gulp.task('inject',['jsuglify','bower','template'], function () {
    const target = gulp.src('dest/index.html');

    const templates = gulp.src('dest/template/*.js');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    const jsresource = gulp.src(['dest/scripts/*.js','dest/css/*.css', '!dest/scripts/vendor.min.js','!dest/style/style.css'], {read: false});

    const cssresource = gulp.src(['src/style.css']);

    return target
    .pipe(inject(jsresource, {relative: true, ignorePath: '/dest'}))
    .pipe(inject(cssresource, {relative: true, ignorePath: '/dest'}))
    .pipe(inject(templates, {relative:true, ignorePath:'/dest', starttag: '<!-- inject:partials -->', addRootSlash: false}))
    .pipe(gulp.dest('./dest'));
});
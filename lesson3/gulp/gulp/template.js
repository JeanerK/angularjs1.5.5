const template = require('gulp-angular-templatecache');
const gulp = require('gulp');

gulp.task('template', function () {
    return gulp.src(['src/**/*.html','!src/index.html']).pipe(template({
        module: 'MemoList'
    })).pipe(gulp.dest('dest/template'));
});
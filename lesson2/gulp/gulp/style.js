const gulp = require('gulp');

gulp.task('style', function () {
    return gulp.src('src/style.css').pipe(gulp.dest('./dest/style'));
});
const browserSync = require('browser-sync');
const browserSyncSpa = require('browser-sync-spa');
const gulp = require('gulp');

function browserSyncInit(baseDir, browser) {
    browser = browser === undefined ? 'default' : browser;

    var server = {
        baseDir: './dest'
    };

    browserSync.instance = browserSync.init({
        startPath: '/',
        server: server,
        browser: browser,
        port: 3003
    });
}

browserSync.use(browserSyncSpa({
    selector: '[ng-app]'// Only needed for angular apps
}));

gulp.task('serve', ['inject'], function () {
    browserSyncInit();
});
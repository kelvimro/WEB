var jshint = require('gulp-jshint'),
  gulp = require('gulp'),
  img = require('gulp-imagemin'),
  uglify = require('gulp-uglify'),
  usemin = require('gulp-usemin');
cssmin = require('gulp-cssmin'),
browserSync = require('browser-sync'),
nodemon = require('gulp-nodemon');

// we'd need a slight delay to reload browsers
// connected to browser-sync after restarting nodemon
var BROWSER_SYNC_RELOAD_DELAY = 500;

gulp.task('lint', function () {
  return gulp.src('public/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('build-img', function () {
  gulp.src('public/img/*')
    .pipe(img())
    .pipe(gulp.dest('dist/img'));
});

gulp.task('usemin', function () {
  return gulp.src('public/**/*.html')
    .pipe(usemin({
      js: [uglify],
      css: [cssmin]
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['lint', 'build-img', 'usemin']);


//tarefas para startar server e auto atualizar o navegador
gulp.task('nodemon', function (cb) {
  var called = false;
  return nodemon({
    script: 'server.js',
    env: { 'NODE_ENV': 'development' },
    watch: ['*']
  })
    .on('start', function onStart () {
      if (!called) { cb(); }
      called = true;
    })
    .on('restart', function onRestart () {
      // reload connected browsers after a slight delay
      setTimeout(function reload () {
        browserSync.reload({
          stream: false
        });
      }, BROWSER_SYNC_RELOAD_DELAY);
    });
});

gulp.task('browser-sync', ['nodemon'], function () {
  // for more browser-sync config options: http://www.browsersync.io/docs/options/
  browserSync({
    // informs browser-sync to proxy our expressjs app which would run at the following location
    proxy: 'http://localhost:3000',
    // informs browser-sync to use the following port for the proxied app
    // notice that the default port is 3000, which would clash with our expressjs
    port: 4000
  });
});

gulp.task('js', function () {
  return gulp.src('public/**/*.js');
});

gulp.task('css', function () {
  return gulp.src('public/**/*.css')
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});
//rodar comando gulp start
gulp.task('start', ['browser-sync'], function () {
  gulp.watch('public/**/*.js', ['js', browserSync.reload]);
  gulp.watch('public/**/*.css', ['css']);
  gulp.watch('public/**/*.html', ['bs-reload']);
});

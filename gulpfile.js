'use strict';

const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');

const del = require('del');

gulp.task('clean', () => {
  return del([
    'dist/**/*'
  ]);
});

const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

gulp.task('es2015', () => {
  return gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015'],
      plugins: ['transform-es2015-modules-amd']
    }))
    //.pipe(concat('main.js'))
    //.pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});


const sass = require('gulp-sass');

gulp.task('sass', () => {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});


gulp.task('templates', () => {
  return gulp.src('./src/templates/**/*.html')
    .pipe(gulp.dest('dist/templates'));
});


const Server = require('karma').Server;

gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('default', ['test', 'clean', 'es2015', 'sass', 'templates']);

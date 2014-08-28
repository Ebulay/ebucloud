
var gulp = require('gulp');

var browserify = require('gulp-browserify');
var connect = require('gulp-connect');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var uglify = require('gulp-uglifyjs');
var watch = require('gulp-watch');

var exec = require('child_process').exec;


gulp.task('compilejs', function() {
  gulp.src('./src/v-plangular.js')
    .pipe(browserify())
    .pipe(gulp.dest('./'))
    .pipe(uglify())
    .pipe(rename('v-plangular.min.js'))
    .pipe(gulp.dest('./'));
  gulp.src('./src/ng-plangular.js')
    .pipe(gulp.dest('./'))
    .pipe(uglify())
    .pipe(rename('ng-plangular.min.js'))
    .pipe(gulp.dest('./'));
});


gulp.task('sass', function() {
  gulp.src('./site/style.scss')
    .pipe(sass({ options: { outputStyle: 'compressed' } }))
    .pipe(gulp.dest('./site'));
});


gulp.task('server', function() {
  connect.server({});
});


gulp.task('default', ['compilejs', 'sass', 'server'], function() {
  gulp.watch(['./src/**/*', './site/**/*'], ['compilejs', 'sass']);
});


'use strict';

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    path = require('path'),
    browserSync = require('browser-sync'),    
    stylus = require('gulp-stylus'); 


/*gulp.task('sass', function() {
  return gulp.src('app/sass/main.scss')
    .pipe(sass({ style: 'compressed' }))
//    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('app/css'));
});*/
gulp.task('css', function () {
  //gulp.src('app/**/*.css').pipe(refresh(server));
});

gulp.task('js', function () {
  //gulp.src('app/**/*.js').pipe(refresh(server));
});

gulp.task('stylus', function () {
  return gulp.src('_layouts/**/*.styl')  
    .pipe(stylus({            
            use: ['nib'],
            compress: true
        }))
    .pipe(gulp.dest('_layouts/css'));
});

gulp.task('default',['browser-sync'], function () {
  
  //gulp.watch('app/sass/*.scss',['sass']);
  gulp.watch('_layouts/**/*.styl',['stylus']);
});

gulp.task('browser-sync', function() {
    browserSync.init(["_layouts/**/*.css" ,"**/*.html"], {
        server: {
            baseDir: "./_layouts/"
        }
    });
});

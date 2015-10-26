var	gulp = require("gulp"),
	connect = require("gulp-connect"),
	opn	= require("opn");
/*
// Gulp minify CSS
var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
 
gulp.task('minify-css', function() {
  return gulp.src('./app/css/main.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/'));
});  
*/ 

// Gulp connect Запуск локального сервера с Livereload
var gulp = require('gulp'),
  connect = require('gulp-connect'); 
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true,
    port: 8888
  });
  //  Запуск плгина opn (открываем браузер)
  opn("http://localhost:8888");
});
 
 // Работа с html
gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});
 
 // Работа с css
gulp.task('css', function () {
  gulp.src('./app/css/*.css')
    .pipe(connect.reload());
});

// Работа с js
gulp.task('js', function () {
  gulp.src('./app/js/*.js')
    .pipe(connect.reload());
});

 // Следим за файлами
gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
  gulp.watch(['./app/css/*.css'], ['css']);
  gulp.watch(['./app/js/*.html'], ['js']);
});


 // Задача по умолчанию
 gulp.task('default', ['connect', 'watch']);
// gulp.task('default', ['minify-css']);


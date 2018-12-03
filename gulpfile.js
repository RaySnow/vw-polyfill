/**
 * Create by hupo@fanhaoyue.com
 * On Nov 2018
 **/

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),    //js 压缩
    stripDebug = require('gulp-strip-debug'),    // 删除文件中的 log 和 debug
    rename = require('gulp-rename'),
    header = require('gulp-header');

var js = "index.js";
var DIST = "./";

// js处理, 压缩
gulp.task('min_js', function () {
  return gulp.src([js])
    .pipe(uglify())
    .pipe(stripDebug())
    .pipe(header('/** vw-polyfill[https://github.com/RaySnow/vw-polyfill] by hupo@fanhaoyue.com MIT **/'))
    .pipe(rename("vw-polyfill.min.js"))
    .pipe(gulp.dest(DIST));
});

gulp.task('default',
  [
    'min_js'
  ]);

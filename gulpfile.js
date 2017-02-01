var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var concat = require ('gulp-concat');

var assets = 'assets/';

var paths = {
  scripts: [assets+'js/*.js'],
  js: [assets+'js', assets+'compiled-js'],
  sass: [assets+'sass/*.scss'],
  css: [assets+'css']
};

gulp.task('concat', function(){
  return gulp.src(paths.scripts)
    .pipe(plumber())
    .pipe(concat('all.js'))
    .pipe(gulp.dest(paths.js[1]));
});

gulp.task('sass', function () {
  return gulp.src(paths.sass)
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
    .pipe(gulp.dest(paths.css[0]));
});

gulp.task('watch', function(){
  gulp.watch(paths.scripts, ['concat']);
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('default', ['watch']);

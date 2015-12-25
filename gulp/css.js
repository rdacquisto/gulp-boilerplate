var gulp = require('gulp');
var gutil = require('gulp-util');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sass = require('gulp-sass');

function handleErrors () {
	var args = Array.prototype.slice.call(arguments);
  	gutil.log('Compile Error: ', args);
	this.emit('end');
};

gulp.task('css', ['csslint'], function () {
	gutil.log(gutil.colors.bgBlue('CSS Task'));

	return gulp.src(global.sourcePath + 'styles/**/*.scss')
		.pipe(sass())
		.on('error', handleErrors)
		.pipe(autoprefixer({ browsers: ['> 5%'] }))
		.on('error', handleErrors)
		.pipe(gulp.dest(global.buildPath + 'css/'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(minifycss())
		.pipe(gulp.dest(global.buildPath + 'css/'));
});

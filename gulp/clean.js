var clean = require('del');
var gulp = require('gulp');
var gutil = require('gulp-util');

gulp.task('clean', function () {
	gutil.log(gutil.colors.bgBlue('Clean Task'));
	return clean([global.buildPath]);
});

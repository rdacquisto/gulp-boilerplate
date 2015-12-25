var gulp = require('gulp');
var gutil = require('gulp-util');

gulp.task('watch', ['default'], function () {
	gutil.log(gutil.colors.bgBlue('Watch Task'));

	gulp.watch(global.sourcePath + '**/*.htm', ['html']);
	gulp.watch(global.sourcePath + '**/*.js', ['js']);
	gulp.watch(global.sourcePath + '**/*.scss', ['css']);
});

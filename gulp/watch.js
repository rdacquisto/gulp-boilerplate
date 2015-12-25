var gulp = require('gulp');
var gutil = require('gulp-util');
var foreach = require('gulp-foreach');
var runSequence = require('run-sequence');

gulp.task('watch', ['default'], function () {
	gutil.log(gutil.colors.bgBlue('Watch Task'));

	gulp.watch(global.sourcePath + '**/*.htm', ['reload_html']);
	gulp.watch(global.sourcePath + '**/*.js', ['js']);
	gulp.watch(global.sourcePath + '**/*.scss', ['reload_css']);

	runSequence('webserver');
});

gulp.task('reload_html', ['html'], function() {
	if (global.tinylr !== null) {
	return gulp.src(global.buildPath + '**/*.htm*')
		.pipe(foreach(function(stream, file) {
			global.notifyLR(file);
		}));
	 }
});

gulp.task('reload_css', ['css'], function() {
	if (global.tinylr !== null) {
		gulp.src(global.buildPath + '**/*.css')
			.pipe(foreach(function(stream, file) {
				global.notifyLR(file);
			}));
	}
});

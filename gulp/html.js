var gulp = require('gulp');
var gutil = require('gulp-util');
var htmlmin = require('gulp-htmlmin');

gulp.task('html', function () {
	gutil.log(gutil.colors.bgBlue('HTML Task'));

	gulp.src(global.sourcePath + '**/*.htm*')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest(global.buildPath));
});

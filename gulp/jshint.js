var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');

var jshint_config = {
	bitwise: true,
	browser: true,
	curly: true,
	eqeqeq: true,
	forin: true,
	immed: true,
	indent: 4,
	noarg: true,
	node: true,
	noempty: true,
	nonbsp: true,
	quotmark: 'single',
	strict: true,
	undef: true,
	unused: true
};

gulp.task('jshint', function () {
	gutil.log(gutil.colors.bgBlue('JS Hint Task'));

	return gulp.src(global.sourcePath + 'scripts/**/*.js')
		.pipe(jshint(jshint_config))
		.pipe(jshint.reporter('jshint-stylish'));
});

var gulp = require('gulp');
var gutil = require('gulp-util');
var scsslint = require('gulp-scss-lint');
var scssLintStylish = require('gulp-scss-lint-stylish');

gulp.task('csslint', function () {
	gutil.log(gutil.colors.bgBlue('CSS Lint Task'));

	return gulp.src(global.sourcePath + 'styles/**/*.scss')
		.pipe(scsslint({
			config: './gulp/scss-lint.yaml',
			customReport: scssLintStylish
		}));
});

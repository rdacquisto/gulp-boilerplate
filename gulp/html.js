var gulp = require('gulp');
var gutil = require('gulp-util');
var minifyHTML = require('gulp-minify-html');

gulp.task('html', function () {
	gutil.log(gutil.colors.bgBlue('HTML Task'));

	gulp.src(global.sourcePath + '**/*.htm*')
		.pipe(minifyHTML({empty:true,conditionals:true}))
		.pipe(gulp.dest(global.buildPath));
});

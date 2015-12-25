var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');

gulp.task('js', ['jshint'], function () {
	gutil.log(gutil.colors.bgBlue('JS Task'));

	webpack({
		entry: global.sourcePath + 'scripts/app.js',
		output: {
			path: global.buildPath + 'js/',
			filename: 'app.js'
		},
		plugins: [
			new webpack.optimize.UglifyJsPlugin(),
			new webpack.SourceMapDevToolPlugin({
				filename: '[name].js.map'
			})
		]
	}, function(err, stats) {
		if (err) {
			console.error('Webpack Error:', err);
		}
	});
});

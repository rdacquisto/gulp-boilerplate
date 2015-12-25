var gulp = require('gulp');
var gutil = require('gulp-util');
var express = require('express');
var p = require('path');

// Concept from https://community.nitrous.io/tutorials/setting-up-gulp-with-livereload-sass-and-other-tasks
global.tinylr = null;
global.notifyLR = function (file) {
	var fileName = require('path').relative(__dirname, file.path);

	tinylr.changed({
		body: {
			files: [fileName]
		}
	});
};

gulp.task('webserver', function () {
	gutil.log(gutil.colors.bgBlue('Web Server Task'));

	var port_web = 3000;
	var port_lr = 3001;

	var options = {
		setHeaders: function (res, path, stat) {
			res.set('Access-Control-Allow-Origin', '*');
		}
	};

	var app = express();
	app.use(require('connect-livereload')({ port: port_lr }));
	app.use(express.static(global.buildPath, options));
	app.listen(port_web);

	global.tinylr = require('tiny-lr')();
	global.tinylr.listen(port_lr);

	gutil.log(gutil.colors.green('Server running at http://localhost:' + port_web));
});

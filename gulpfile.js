var gulp = require('gulp');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');

var path_tasks = './gulp/';
requireDir(path_tasks, { recurse: true });

gulp.task('default', ['clean'], function () {
	runSequence('html', 'css', 'js');
});

global.buildPath = './build/';
global.sourcePath = './src/';

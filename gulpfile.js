'use strict';
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({
    pattern: ['gulp-*']
});

gulp.task('templates', function() {
    var YOUR_LOCALS = {};
    gulp.src('src/views/*.jade')
    	.pipe(plugins.jade({
        	locals: YOUR_LOCALS
    	}))
    	.pipe(gulp.dest('dist'))
});

gulp.task('styles', function() {
    gulp.src('src/styles/*.scss')
    	.pipe(plugins.sass())
    	.pipe(gulp.dest('dist/styles'));
});

gulp.task('js', function() {
    gulp.src('src/scripts/*.js')
    	.pipe(gulp.dest('dist/scripts'));
})

gulp.task('server', function() {
    plugins.connect.server({
        root: ['dist', '.'],
        port: 8000,
        livereload: true
    });
});

gulp.task('build', ['templates', 'styles', 'js']);
gulp.task('default', ['build']);

gulp.task('watch', function() {
    gulp.watch([
    	'src/views/*.jade',
    	'src/styles/*.scss',
    	'src/scripts/*.js'
	],['build']);
});
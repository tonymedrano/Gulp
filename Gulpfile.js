
var gulp = require('gulp'),
coffee = require('gulp-coffee'),
	connect = require('gulp-connect'),
	historyApiFallback = require('connect-history-api-fallback'),
	stylus = require('gulp-stylus'),
	less = require('gulp-less'),
    nib = require('nib');
	
gulp.task('server', function() {
	connect.server({
	root: './app',
	hostname: '0.0.0.0',
	port: 8080,
	livereload: true,
		middleware: function(connect, opt) {
		  return [ historyApiFallback ];
		}
	});
});

gulp.task('coffee', function() {
  gulp.src('./app/js/*.coffee')
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('./app/js'));
});

gulp.task('css', function() {
	gulp.src('./app/stylesheets/main.styl')
	.pipe(stylus({ use: nib() }))
	.pipe(gulp.dest('./app/stylesheets'))
	.pipe(connect.reload());
});

gulp.task('less', function() {
	gulp.src('./app/stylesheets/*.less')
	.pipe(less({ use: nib() }))
	.pipe(gulp.dest('./app/stylesheets'))
	.pipe(connect.reload());
});

gulp.task('html', function() {
	gulp.src('./app/**/*.html')
	.pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch(['./app/**/*.html'], ['html']);
	gulp.watch(['./app/stylesheets/**/*.styl'], ['css']);
	gulp.watch(['./app/stylesheets/**/*.less'], ['less']);
	gulp.watch(['./app/js/*.coffee'], ['coffee']);
});

gulp.task('default', ['server', 'watch']);
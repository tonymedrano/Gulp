
// Created by: Tony Medrano.
// Date: November 2014.
// GulpJs Built System setup
// Feel free to add more functionality



var gulp = require('gulp'), // Loading framework through variables
coffee = require('gulp-coffee'),
	connect = require('gulp-connect'),
	historyApiFallback = require('connect-history-api-fallback'),
	stylus = require('gulp-stylus'),
	less = require('gulp-less'),
	browserSync = require('browser-sync'),
    watch = require("gulp-watch"),
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

gulp.task('coffee', function() { // Compile all CoffeeScript to Javascript
  gulp.src('./app/js/*.coffee')
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('./app/js'));
});

gulp.task('css', function() { // Compile all Stylus to Css
	gulp.src('./app/stylesheets/main.styl')
	.pipe(stylus({ use: nib() }))
	.pipe(gulp.dest('./app/stylesheets'))
	.pipe(connect.reload());
});

gulp.task('less', function() { // Compile all Less to Css
	gulp.src('./app/stylesheets/*.less')
	.pipe(less({ use: nib() }))
	.pipe(gulp.dest('./app/stylesheets'))
	.pipe(connect.reload());
});

gulp.task('html', function() { // Load the index app file
	gulp.src('./app/**/*.html')
	.pipe(connect.reload());
});

gulp.task('watch', function() { // Watch the compiling
	gulp.watch(['./app/stylesheets/**/*.styl'], ['css']);
	gulp.watch(['./app/stylesheets/**/*.less'], ['less']);
	gulp.watch(['./app/js/*.coffee'], ['coffee']);
	gulp.watch(['./app/**/*.html'], ['html']);
});

gulp.task('browser-sync', function() { // Creates an external or internal link for test apps
    browserSync({
        server: {
            baseDir: "./app"
        }
    });
});

gulp.task('default', ['server', 'browser-sync', 'coffee', 'watch']); // Tracing all...
var gulp = require('gulp'),
    ngCache = require('gulp-angular-templatecache'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    webserver = require('gulp-webserver'),
    watch = require('gulp-watch'),
    sourcemaps = require('gulp-sourcemaps'),
    path = require('path');

gulp.task('default', ['dist'], function() {
  gulp.watch('src/**/*' , ['deploy']);
});

gulp.task('deploy', function() {
  console.log("deploying");
});

gulp.task('dist', ['html-templates'], function(done) {
  return gulp.src(['src/app/app.js', '!src/**/*.spec.js', 'src/**/*.js'])
    .pipe(concat('<%= name %>.js'))
    .pipe(gulp.dest('dist'))
    .pipe(uglify())
    .pipe(rename('<%= name %>.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});

gulp.task('html-templates', ['sass'], function() {
   return gulp.src([ 'src/**/*.html', '!src/index.html' ])
     .pipe(ngCache({
        filename : 'templates.js',
        module : '<%= name %>'
      }))
     .pipe(gulp.dest('src'));
});

gulp.task('html-temp-templates-clean', [ 'html-templates', 'dist' ], function() {
  return gulp.src('src/templates.js')
    .pipe(clean({ force: true }));
});

gulp.task('serve', function() {
  gulp.watch( 'src/**/*' , ['deploy']);
  return gulp.src('src')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('sass', function () {
  var src = 'src/**/**.scss';
    return gulp.src('src')
        .pipe(sass())
        .pipe(concat('css' + '.css'))
        .pipe(gulp.dest('dist'));
});

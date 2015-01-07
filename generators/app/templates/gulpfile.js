var gulp = require('gulp'),
    ngCache = require('gulp-angular-templatecache'),
    inject = require('gulp-inject'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    webserver = require('gulp-webserver'),
    watch = require('gulp-watch'),
    sourcemaps = require('gulp-sourcemaps'),
    mainBowerFiles = require('main-bower-files'),
    path = require('path');

gulp.task('default', ['deploy', 'dist','serve'], function() {
  gulp.watch(['src/**/*','!src/index.html'] , ['deploy', 'dist']);
});

gulp.task('deploy', function() {
  console.log("deploying TODO: ");
});

gulp.task('index', function () {

  var target = gulp.src('./src/index.html');
  var sources = gulp.src(['./src/app/app.js', '!./src/bower_components/**/*', './src/**/*.js', './src/**/*.css'], {read: false});
  target.pipe(inject(sources, {ignorePath: 'src', addRootSlash: false }))
  .pipe(inject(gulp.src(mainBowerFiles(), {read: false}), {ignorePath: 'src', addRootSlash: false, name: 'bower'}))
  .pipe(gulp.dest('./src'));

});

gulp.task('dist', ['index'], function(done) {
  return gulp.src(['src/app/app.js', '!src/**/*.spec.js', 'src/**/*.js'])
    .pipe(concat('<%= config.get("name") %>.js'))
    .pipe(gulp.dest('dist'))
    .pipe(uglify())
    .pipe(rename('<%= config.get("name") %>.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});

gulp.task('html-templates', ['sass'], function() {
   return gulp.src([ 'src/**/*.html', '!src/index.html' ])
     .pipe(ngCache({
        filename : 'templates.js',
        module : '<%= config.get("name") %>'
      }))
     .pipe(gulp.dest('src'));
});

gulp.task('html-temp-templates-clean', [ 'html-templates', 'dist' ], function() {
  return gulp.src('src/templates.js')
    .pipe(clean({ force: true }));
});

gulp.task('serve', ['dist'], function() {
  //gulp.watch( 'src/**/*' , ['dist']);
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

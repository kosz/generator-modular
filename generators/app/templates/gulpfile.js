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
    karma = require('gulp-karma'),
    ngdocs = require('gulp-ngdocs'),
    path = require('path');

gulp.task('ngdocs', function () {
  var options = {
    //scripts: ['src/app.js'],
    html5Mode: true,
    startPage: '/api',
    title: "<%= config.get('name') %>",
    image: "../.tmp/img/yo.png",
    imageLink: "/api",
    titleLink: "/api"
  }
  return gulp.src(['src/**/*.js','!src/ng-docs/**/*', '!src/bower_components/**/*'])
    .pipe(ngdocs.process(options))
    .pipe(gulp.dest('./src/ng-docs'));
});

gulp.task('default', ['deploy', 'serve'], function() {
  gulp.watch(['!src/index.html', '!src/ng-docs/**/*', 'src/**/*'] , ['deploy']);
});

gulp.task('deploy', ['test'], function() {
  console.log("deploying TODO: ");
});

gulp.task('index', function () {

  var target = gulp.src('./src/index.html');
  var sources = gulp.src(['./src/app/app.js', '!./src/ng-docs/**/*', '!./src/bower_components/**/*', '!./src/**/*.spec.js', './src/**/*.js', './src/**/*.css'], {read: false});
  target.pipe(inject(sources, {ignorePath: 'src', addRootSlash: false }))
  .pipe(inject(gulp.src(mainBowerFiles({ filter: /^((?!(angular-mocks.js)).)*$/ }), {read: false}), {ignorePath: 'src', addRootSlash: false, name: 'bower'}))
  .pipe(gulp.dest('./src'));

});

gulp.task('test', ['karma-inject'], function () {
 return gulp.src('./http://stackoverflow.com/questions/22413767/angular-testing-with-karma-module-is-not-defined :)')
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    })).on('error', function (err) {
      gulp.watch(['src/**/*','!src/index.html'] , ['deploy']); //TODO: warning copy pasted from deploy, workarround for gulp errors
    });
});

gulp.task('karma-inject', ['dist'], function () {
  var sources = gulp.src(['./src/app/app.js', '!./src/ng-docs/**/*', '!./src/bower_components/**/*', './src/**/*.js']);

  return gulp.src('./karma.conf.js')
    .pipe(inject(sources,{starttag: '// gulp-inject:src', endtag: '// gulp-inject:src:end', addRootSlash: false,
      transform: function (filepath, file, i, length) {
        return '  "' + filepath + '"' + (i + 1 < length ? ',' : '');
      }}))
    .pipe(inject(gulp.src(mainBowerFiles({ filter: /.js$/})),{starttag: '// gulp-inject:mainBowerFiles', endtag: '// gulp-inject:mainBowerFiles:end', addRootSlash: false,
      transform: function (filepath, file, i, length) {
        return '  "' + filepath + '",';
      }}))
    .pipe(gulp.dest('./'));
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

gulp.task('serve', ['deploy'], function() {
  //gulp.watch( 'src/**/*' , ['dist']);
  return gulp.src('src')
    .pipe(webserver({
      livereload: true,
      fallback: '/index.html',
      open: true
    }));
});

gulp.task('sass', function () {
  var src = 'src/**/*.scss';
  return gulp.src(src)
      .pipe(sass())
      .pipe(concat('css' + '.css'))
      .pipe(gulp.dest('src/.tmp'));
});

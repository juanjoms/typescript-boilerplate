"use strict";

var gulp = require('gulp'),
  sass = require('gulp-sass'),
  del = require('del'),
  uglify = require('gulp-uglify'),
  cleanCSS = require('gulp-clean-css'),
  rename = require("gulp-rename"),
  htmlreplace = require('gulp-html-replace'),
  autoprefixer = require('gulp-autoprefixer'),
  browserSync = require('browser-sync').create(),
  ts = require('gulp-typescript');

// Compile typescript task
gulp.task('typescript', function () {
  return gulp.src('app/**/*.ts')
    .pipe(ts({
        noImplicitAny: true,
    }))
    .pipe(gulp.dest('app/'));
});


// Clean task
gulp.task('clean', function() {
  return del(['dist', 'assets/css/app.css']);
});

// Copy font-awesome from node_modules into /fonts
gulp.task('vendor:fonts', function() {
  return  gulp.src([
    './node_modules/font-awesome/**/*',
    '!./node_modules/font-awesome/{less,less/*}',
    '!./node_modules/font-awesome/{scss,scss/*}',
    '!./node_modules/font-awesome/.*',
    '!./node_modules/font-awesome/*.{txt,json,md}'
  ])
    .pipe(gulp.dest('./assets/fonts/font-awesome'))
});

// vendor task
gulp.task('vendor', gulp.parallel('vendor:fonts'));

// Copy Bootstrap SCSS(SASS) from node_modules to /assets/scss/bootstrap
gulp.task('bootstrap:scss', function() {
  return gulp.src(['./node_modules/bootstrap/scss/**/*'])
    .pipe(gulp.dest('./assets/scss/bootstrap'));
});

// Compile SCSS(SASS) files
gulp.task('scss', gulp.series('bootstrap:scss', function compileScss() {
  return gulp.src(['./assets/scss/*.scss'])
    .pipe(sass.sync({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./assets/css'))
}));

// Minify CSS
gulp.task('css:minify', gulp.series('scss', function cssMinify() {
  return gulp.src("./assets/css/app.css")
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/assets/css'))
    .pipe(browserSync.stream());
}));

// Minify Js
gulp.task('js:minify', function () {
  return gulp.src([
    './app/**/*.js'
  ])
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/app'))
    .pipe(browserSync.stream());
});

// Replace HTML block for Js and Css file upon build and copy to /dist
gulp.task('replaceHtmlBlock', function () {
  return gulp.src(['*.html'])
    .pipe(htmlreplace({
      'js': 'app/main.min.js',
      'css': 'assets/css/app.min.css'
    }))
    .pipe(gulp.dest('dist/'));
});

// Configure the browserSync task and watch file path for change
gulp.task('watch', function browserDev(done) {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  gulp.watch(['assets/scss/*.scss','assets/scss/**/*.scss','!assets/scss/bootstrap/**'], gulp.series('css:minify', function cssBrowserReload (done) {
    browserSync.reload();
    done(); //Async callback for completion.
  }));

  // Reload the browser on Javascript changes
  gulp.watch('app/**/*.js', function jsBrowserReload (done) {
    browserSync.reload();
    done();
  });

  // Watch typescript changes and complile to JS, the wanch in JS files will reload the browser
  gulp.watch('app/**/*.ts', gulp.series('typescript'));

  gulp.watch(['*.html']).on('change', browserSync.reload);
  done();
});

// Dev task
gulp.task("dev", gulp.series('typescript', 'watch'));

// Build task
gulp.task("build", gulp.series(gulp.parallel('css:minify', 'typescript', 'js:minify', 'vendor'), function copyAssets() {
  return gulp.src([
    '*.html',
    'favicon.ico',
    "assets/img/**"
  ], { base: './'})
    .pipe(gulp.dest('dist'));
}));

// Default task
gulp.task("default", gulp.series("clean", 'build', 'replaceHtmlBlock'));

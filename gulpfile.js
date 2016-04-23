var gulp          = require('gulp');
var sass          = require('gulp-sass');
var postcss       = require('gulp-postcss');
var autoprefixer  = require('autoprefixer');
var uglify        = require('gulp-uglify');
var sourcemaps    = require('gulp-sourcemaps');
var browserSync   = require('browser-sync').create();
var browserify    = require('browserify');
var babelify      = require('babelify');
var source        = require('vinyl-source-stream');
var buffer        = require('vinyl-buffer');

var paths = {
  styles: {
    src: './app/src/sass',
    files: './app/src/sass/**/*.scss',
    dest: './app/dist/css'
  },
  js: {
    files: './app/src/js/**/*.js',
    dest: './app/dist/js'
  }
}

gulp.task('sass', function (){
  return gulp.src(paths.styles.files)
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed',
      sourceComments: 'map',
      includePaths : [paths.styles.src]
    }))
    .on('error', sass.logError)
    .pipe(postcss([
      autoprefixer({
        browsers: ['last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']
      })
    ]))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
});

gulp.task('build', function () {
  // app.js is your main JS file with all your module inclusions
  return browserify({entries: './app/src/js/app.js', debug: true})
    .transform("babelify", {
      presets: ["es2015"],
      plugins: ["transform-es3-member-expression-literals", "transform-es3-property-literals"]
    })
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(paths.js.dest))
    .pipe(browserSync.stream());
});

gulp.task('browser-sync', function() {
  browserSync.init({
    // proxy: "something.dev"
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('default', ['browser-sync', 'sass', 'build'], function() {
  gulp.watch(paths.styles.files,  ['sass']);
  gulp.watch(paths.js.files,      ['build']);
  gulp.watch("*.html").on('change', browserSync.reload);
});

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var cssScss = require('gulp-css-scss');
let cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var watch = require('gulp-watch');

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('sass', function () {
  return gulp.src('./comp/comp_scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./stylesheets'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
 
gulp.task('css-scss', () => {
  gulp.src('./comp/comp_scss/*.css')
    .pipe(cssScss())
    .pipe(gulp.dest('./stylesheets/'));
});





gulp.task('minify-css', () => {
  return gulp.src('dist/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/build_css'));

});
 
gulp.task('scripts', function() {
  return gulp.src('./lib/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/build_js'));
});

// gulp.task('compress', function (cb) {
//   pump([
//         gulp.src('lib/*.js'),
//         uglify(),
//         gulp.dest('dist')
//     ],
//     cb
//   );
// });
 
gulp.task('stream', function () {
    // Endless stream mode 
    return watch('css/**/*.css', { ignoreInitial: false })
        .pipe(gulp.dest('build'));
});
 
gulp.task('callback', function () {
    // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event 
    return watch('css/**/*.css', function () {
        gulp.src('css/**/*.css')
            .pipe(gulp.dest('build'));
    });
});
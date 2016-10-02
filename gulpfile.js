const gulp = require('gulp')
const browserify = require('browserify')
const reactify = require('reactify')
const source = require('vinyl-source-stream')

// Initiate gulp task 'bundle'
gulp.task('bundle', function() {
    return browserify({
      entries: "./app/main.jsx",
      debug: true
    })
    .transform(reactify)
      .bundle()
      .pipe(source('main.js'))
      .pipe(gulp.dest('app/dist'))
})

gulp.task('copy', ['bundle'], function() {
  return gulp.src(['app/index.html', 'app/lib/bootstrap-css/css/bootstrap.min.css', 'app/style.css'])
    .pipe(gulp.dest('app/dist'))
})

gulp.task('watch', function() {
  gulp.watch('app/components/*.js', ['copy'])
  gulp.watch('app/*.jsx', ['copy'])
})

gulp.task('default', ['copy'], function() {
  console.log('Gulp Completed')
})
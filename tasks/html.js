
const tasks = (gulp, options, plugins) => {

  gulp.task('html:dev', () => {
    return gulp.src('index.html')
      .pipe(gulp.dest(options.dest))
  })
}

module.exports = tasks
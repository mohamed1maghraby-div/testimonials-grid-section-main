var gulp = require('gulp'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload');

gulp.task('html', function(){
    return gulp.src('project/index.pug')
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest('dist'))
    .pipe(livereload())
});

gulp.task('css', function(){
    return gulp.src('project/style.scss')
    .pipe(sass())
    .pipe(prefix('last 2 versions'))
    .pipe(gulp.dest('dist'))
    .pipe(livereload())
});

gulp.task('watch', function(){
    livereload.listen();
    gulp.watch('project/index.pug', gulp.series('html'));
    gulp.watch('project/style.scss', gulp.series('css'));
});

/* this site created by Mohamed Maghraby */
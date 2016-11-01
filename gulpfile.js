var gulp = require('gulp'),
    rename = require("gulp-rename"),
    cleanCss = require("gulp-clean-css"),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint');


gulp.task('jshint', function () {
    return gulp.src('src/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
});
gulp.task('js', function () {
    return gulp.src('src/*.js')
        .pipe(uglify())
        .pipe(rename({extname: ".min.js"}))
        .pipe(gulp.dest('dist/'));
});

gulp.task('css', function () {
    return gulp.src(['src/*.css'])
        .pipe(cleanCss())
        .pipe(rename({extname: ".min.css"}))
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['jshint', 'js', 'css']);

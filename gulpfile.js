const gulp = require('gulp')
const { src,dest } = require('gulp')
const htmlmin = require('gulp-htmlmin')
const minifyCss = require('gulp-clean-css')


// Html

const html = () => {
    return gulp.src('dist/**/*.html')
        .pipe(htmlmin({
            removeComments: true,
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('dist'));
}

exports.html = html


// Styles

const styles = () => {
    return src('dist/styles/**/*.css')
        .pipe(minifyCss())
        .pipe(dest('dist/styles/'))
}

exports.styles = styles
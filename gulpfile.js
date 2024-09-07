// Підключаємо gulp


import gulp from 'gulp';
//import sass from 'gulp-sass';
import cssnano from 'gulp-cssnano';
import autoprefixer from 'gulp-autoprefixer';
import imagemin from 'gulp-imagemin';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import browserSync from 'browser-sync'; // Add BrowserSync
import {rimraf} from 'rimraf'; // Add Rimraf

//import * as sassCompiler from 'sass';
//const compileSass = sass(sassCompiler);

//Use Rimraf to clean dist directory
//gulp.task('clean', function (cb) {
//    rimraf('dist', { glob: false }).then(() => cb()).catch(cb);});


gulp.task('html', function () {
    return gulp.src('app/*.html')
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream())
});

gulp.task('sass', function () {
    return gulp.src('app/sass/*.sass')
        .pipe(concat('styles.sass'))
        //.pipe(compileSass().on('error', compileSass.logError))
        .pipe(autoprefixer({
            //overrideBrowserslist: ['last 2 versions'],
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/css'));
});

gulp.task('scripts', function () {
    return gulp.src('app/js/*.js')
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist1/js'))
        .pipe(browserSync.stream())
});

gulp.task('imgs', function () {
    return gulp.src('app/img/*.+(jpg|jpeg|png|gif|PNG)')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            interlaced: true
        }))
        .pipe(gulp.dest('dist/images'));
});

gulp.task('watch', function () {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    })
    gulp.watch('app/*.html', gulp.series('html')).on('change',browserSync.reload);
    gulp.watch('app/js/*.js', gulp.series('scripts'));
    gulp.watch('app/sass/*.sass', gulp.series('sass'));
    gulp.watch('app/img/*.+(jpg|jpeg|png|gif)', gulp.series('imgs'));
});

//+clean -> + ) in the end
gulp.task('default',/*gulp.series('clean', */gulp.series( 'html', 'sass', 'scripts', 'imgs' , 'watch'));
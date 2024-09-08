// Підключаємо gulp


import gulp from 'gulp';
//import scss from 'gulp-scss';
import cssnano from 'gulp-cssnano';
import autoprefixer from 'gulp-autoprefixer';
import imagemin from 'gulp-imagemin';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import browserSync from 'browser-sync'; // Add BrowserSync
//import {rimraf} from 'rimraf'; // Add Rimraf

//import * as sassCompiler from 'scss';
//const compileSass = scss(sassCompiler);

//Use Rimraf to clean dist directory
//gulp.task('clean', function (cb) {
//    rimraf('dist', { glob: false }).then(() => cb()).catch(cb);});


gulp.task('html', function () {
    return gulp.src('app/*.html')
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream())
});

gulp.task('scss', function () {
    return gulp.src('app/scss/*.scss')
        .pipe(concat('styles.scss'))
        //.pipe(compileSass().on('error', compileSass.logError))
        .pipe(autoprefixer({
            //overrideBrowserslist: ['last 2 versions'],
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream())

});

gulp.task('scripts', function () {
    return gulp.src('app/js/*.js')
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream())
});

gulp.task('imgs', function () {
    return gulp.src('app/img/*.+(jpg|jpeg|png|gif|PNG)')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            interlaced: true
        }))
        .pipe(gulp.dest('dist/imgs'));
});

gulp.task('watch', function () {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    })
    gulp.watch('app/*.html', gulp.series('html')).on('change',browserSync.reload);
    gulp.watch('app/js/*.js', gulp.series('scripts'));
    gulp.watch('app/scss/*.scss', gulp.series('scss')).on('change',browserSync.reload);
    gulp.watch('app/img/*.+(jpg|jpeg|png|gif)', gulp.series('imgs'));
});

//+clean -> + ) in the end
gulp.task('default',/*gulp.series('clean', */gulp.series( 'html', 'scss', 'scripts', 'imgs' , 'watch'));
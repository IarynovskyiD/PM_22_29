// Підключаємо gulp
let gulp = require("gulp");
// Створюємо тестовий таск
gulp.task('testTask', function (done) {
    console.log('This is a test task!');
    done(); // Завершуємо таск викликом функції done
});
//додаткові плагіни Gulp
let sass = require ("gulp-sass"), //конвертує SASS в CSS
    cssnano = require ("gulp-cssnano"), //мінімізація CSS
    autoprefixer = require ('gulp-autoprefixer'), //додавання префіксів в
    //CSS для підтримки
    //старих браузерів
    imagemin = require ('gulp-imagemin'), //стиснення зображень
    concat = require ("gulp-concat"), //об'єднання файлів - конкатенація
    uglify = require ("gulp-uglify"), //мінімізація javascript
    rename = require ("gulp-rename"); //перейменування файлів
// Запуск тасків за замовчуванням
gulp.task('default', gulp.series('testTask'));
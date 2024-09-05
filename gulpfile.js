// Підключаємо gulp
var gulp = require("gulp");
// Створюємо тестовий таск
gulp.task('testTask', function (done) {
    console.log('This is a test task!');
    done(); // Завершуємо таск викликом функції done
});
// Запуск тасків за замовчуванням
gulp.task('default', gulp.series('testTask'));
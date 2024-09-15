// script.js
// script.js

/*document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.progress-circle');

    circles.forEach(circle => {
        const percent = circle.getAttribute('data-percent');
        const percentageText = `${percent}%`;

        // Set the initial background
        circle.style.background = `conic-gradient(#5a9996 0% ${percent}%, #ffffff ${percent}% )`;

        // Update percentage text
        circle.innerHTML = `${percentageText}<br>${circle.textContent.split('<br>')[1]}`;
    });
});*/

document.addEventListener('DOMContentLoaded', function() {
    const contactLinks = document.querySelectorAll('.contact-link');
    contactLinks.forEach(link => {
        link.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            if (url) {
                if (url.startsWith('tel:')) {
                    window.location.href = url;
                } else {
                    window.open(url, '_blank');
                }
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const skillSection = document.querySelector('.pb');
    const progressBars = document.querySelectorAll('.progress-bar');

    skillSection.addEventListener('mouseover', function() {
        progressBars.forEach(bar => {
            // Отримуємо ширину, встановлену в стилях
            const width = bar.getAttribute('data-width');
            if (width) {
                bar.style.width = width; // Задаємо ширину
                bar.style.backgroundColor = '$primary-color'; // Змінюємо колір на зелений
            }
        });
    });
    skillSection.addEventListener('mouseout', function() {
        progressBars.forEach(bar => {
            bar.style.width = '0'; // Скидаємо ширину до 0
            bar.style.backgroundColor = ''; // Скидаємо колір
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const progressCircles = document.querySelectorAll('.progress-circle');

    progressCircles.forEach(circle => {
        const progress = circle.getAttribute('data-progress');

        // Встановлюємо значення відсотка як CSS змінну
        circle.style.setProperty('--progress', `${progress}%`);

        // Додаємо клас 'fill' при наведенні
        circle.addEventListener('mouseenter', function() {
            this.classList.add('fill');
        });

        // Видаляємо клас 'fill' при виході
        circle.addEventListener('mouseleave', function() {
            this.classList.remove('fill');
        });
    });
});



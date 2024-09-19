
document.addEventListener('DOMContentLoaded', function() {
    const contactLinks = document.querySelectorAll('.contact-item');
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
    const skillSections = document.querySelectorAll('.pb');

    skillSections.forEach(section => {
        const progressBars = section.querySelectorAll('.progress-bar');

        progressBars.forEach(bar => {
            // Встановлюємо початкову ширину з атрибуту data-width
            const width = bar.getAttribute('data-width');
            if (width) {
                bar.style.width = width;
            }
        });

        section.addEventListener('mouseover', function() {
            progressBars.forEach(bar => {
                // Встановлюємо анімацію заповнення
                const width = bar.getAttribute('data-width');
                if (width) {
                    bar.style.width = width; // Задаємо ширину
                }
            });
        });

        section.addEventListener('mouseout', function() {
            progressBars.forEach(bar => {
                // Скидаємо ширину до початкового значення
                const width = bar.getAttribute('data-width');
                if (width) {
                    bar.style.width = '0'; // Скидаємо ширину до 0
                }

            });
        });
    });
});









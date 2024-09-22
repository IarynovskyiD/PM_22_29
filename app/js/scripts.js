
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
    const coll = document.getElementsByClassName('collapsible');

    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener('click',function () {
            this.classList.toggle('active');
            const content = this.parentElement.nextElementSibling;
            const progressBars = content.querySelectorAll('.progress-bar');
            progressBars.forEach(bar => {
                bar.style.transition = 'none';
                bar.style.width = '0';
            });
            if (content) {
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + 'px';
                    const progressBars = content.querySelectorAll('.progress-bar');
                    progressBars.forEach(bar => {
                        const width = bar.getAttribute('data-width');
                        if (width) {
                            bar.style.transition = 'width 0.5s ease';
                            bar.style.width = width;
                        }
                    });
                }
            } else {
                console.error("No content element found.");
            }
        });
    }
});

/*
document.addEventListener('DOMContentLoaded', function() {
    let skillSections = document.querySelectorAll('.pb');
    skillSections.forEach(section => {
        let progressBars = section.querySelectorAll('.progress-bar');
        progressBars.forEach(bar => {
            // Встановлюємо початкову ширину з атрибуту data-width
            let width = bar.getAttribute('data-width');
            if (width) {
                bar.style.width = width;
            }
        });

                section.addEventListener('mouseover', function() {
                    progressBars.forEach(bar => {
                        // Встановлюємо анімацію заповнення
                        const width = bar.getAttribute('data-width');
                        if (width) {
                            bar.style.width = '0'; // Скидаємо ширину до 0
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
});*/
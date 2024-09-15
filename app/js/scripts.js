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
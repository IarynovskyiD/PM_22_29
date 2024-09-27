
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

    // Функція для перевірки доступності сервера
    async function checkServer() {
        try {
            const response = await fetch('http://localhost:4000/data', { method: 'HEAD' });
            return response.ok;
        } catch(error) {
            console.error('Error fetching the server:', error);
            return false;
        }
    }

    // Обробник натискання на кнопки
    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener('click', async function () {
            const content = this.parentElement.nextElementSibling;
            const hasContent = content && content.children.length > 0; // Перевіряємо наявність інформації

            if (hasContent) {
                this.classList.toggle('active');
                const progressBars = content.querySelectorAll('.progress-bar');
                progressBars.forEach(bar => {
                    bar.style.transition = 'none';
                    bar.style.width = '0';
                });

                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + 'px';
                    progressBars.forEach(bar => {
                        const width = bar.getAttribute('data-width');
                        if (width) {
                            bar.style.transition = 'width 0.5s ease';
                            bar.style.width = width;
                        }
                    });
                }
            } else {
                const serverIsAlive = await checkServer();

                if (serverIsAlive) {
                    alert("Сервер не повернув жодних даних."); // Можна змінити на вивід інформації
                } else {
                    alert("Сервер недоступний. Спробуйте пізніше."); // Альтернативне повідомлення
                }
            }
        });
    }
});


$(document).ready(function() {
    // Ініціалізація easyPieChart
    function initPieCharts() {
        $('.progress-circle').each(function() {
            var $this = $(this);
            var language = $this.data('text'); // Отримуємо назву мови з атрибуту data-text
            var percent = $this.data('percent'); // Отримуємо відсоток з атрибуту data-percent

            $this.easyPieChart({
                barColor: '#5a9996', // Колір заповнення
                trackColor: '#f5f5f5', // Колір фону
                scaleColor: false, // Вимкнути шкалу
                lineWidth: 7, // Ширина лінії
                size: 94, // Розмір круга
                animate: 1000, // Час анімації в мілісекундах
                onStep: function(from, to, percent) {
                    // Оновлюємо текст всередині кола з відсотками та мовою
                    $(this.el).find('.circle-content span').html(Math.round(percent) + '%<br>' + language);
                }
            });
        });
    }

    // Ініціалізуємо графіки при завантаженні сторінки
    initPieCharts();

    // Додаємо обробник події на кнопку з класом .animateButton
    $('.collapsible.triggerAnimation').on('click', function() {

        // Для кожного графіка спочатку скидаємо на 0%, а потім анімуємо до реального відсотка
        $('.progress-circle').each(function() {
            var $this = $(this);
            var percent = $this.data('percent'); // Отримуємо відсоток

            // Оновлюємо до 0, щоб перезапустити анімацію
            $this.data('easyPieChart').update(0);

            // Використовуємо setTimeout для паузи між скиданням і перезапуском
            setTimeout(function() {
                $this.data('easyPieChart').update(percent); // Оновлюємо на реальний відсоток
            }, 1); // Пауза на 200 мс між оновленням
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:4000/data')
        .then(response => response.json())
        .then(data => {
            // Populate Education
            const educationContainer = document.getElementById('education');
            const educationHTML = data.education.map(edu => `
                    <div class="education-item">
                        <div class="dot-line"></div>
                        <div class="d-flex mb-4">
                            <div class="text-muted col-md-3 me-3">
                                <div class="fw-bold fst-italic">${edu.institution}</div>
                                <div class="fw-bold" style="color: #5a9996">${edu.year}</div>
                            </div>
                            <div class="col-md-8">
                                <h5><p>${edu.degree}</p></h5>
                                <p>${edu.description}</p>
                            </div>
                        </div>
                    </div>
                `).join('');
            educationContainer.innerHTML = educationHTML;

            // Populate Job Experience
            const jobExperienceContainer = document.getElementById('job-experience');
            const jobExperienceHTML = data.jobExperience.map(job => `
                    <div class="education-item">
                        <div class="dot-line"></div>
                        <div class="d-flex mb-4">
                            <div class="text-muted col-md-3 me-3">
                                <div class="fw-bold fst-italic">${job.company}</div>
                                <div class="fst-italic">${job.location}</div>
                                <div class="fw-bold" style="color: #5a9996">${job.year}</div>
                            </div>
                            <div class="col-md-8">
                                <h5><p>${job.position}</p></h5>
                                <p>${job.description}</p>
                            </div>
                        </div>
                    </div>
                `).join('');
            jobExperienceContainer.innerHTML = jobExperienceHTML;

            // Populate Skills
            const skillsContainer = document.getElementById('skills');
            const skillsHTML = data.skills.map(skill => `
                    <div class="d-flex align-items-center mb-3">
                        <p class="skill-name">${skill.name}</p>
                        <div class="progress flex-grow-1">
                            <div class="progress-bar" role="progressbar" data-width="${skill.level}"></div>
                        </div>
                    </div>
                `).join('');
            skillsContainer.innerHTML = skillsHTML;

            // Populate Hobbies
            const hobbiesContainer = document.getElementById('hobbies');
            const hobbiesHTML = data.hobbies.map(hobby => `
                    <div class="d-flex align-items-center mb-3">
                        <p class="skill-name">${hobby.name}</p>
                        <div class="progress flex-grow-1">
                            <div class="progress-bar" role="progressbar" data-width="${hobby.level}"></div>
                        </div>
                    </div>
                `).join('');
            hobbiesContainer.innerHTML = hobbiesHTML;

            // Populate Languages
            /*const languagesContainer = document.getElementById('languages');
            const languagesHTML = data.languages.map(lang => `
                    <div class="progress-circle" data-target="circle1" data-percent="${lang.level}" data-text="${lang.name}">
                        <div class="circle-content">
                            <span>${lang.level}%<br>${lang.name}</span>
                        </div>
                    </div>
                `).join('');
            languagesContainer.innerHTML = languagesHTML;*/

            // Populate References
            const referencesContainer = document.getElementById('references');
            const referencesHTML = data.references.map(ref => `
                    <div class="education-item">
                        <div class="dot-line"></div>
                        <div>
                            <strong>${ref.name}</strong><br>
                            <div style="color: #5a9996"><strong>${ref.address}</strong><br></div>
                            Tel: ${ref.phone}<br>
                            <p>Email: ${ref.email}</p>
                        </div>
                    </div>
                `).join('');
            referencesContainer.innerHTML = referencesHTML;
        })
        .catch(error => console.error('Error fetching JSON :) :', error));
});


const phrases = [
    "Привіт, світ!",
    "JavaScript — це чудово!",
    "Як справи?",
    "Це безкінечний цикл!",
    "Завжди готовий до нових викликів!"
];

function getRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
}

function startLoop() {
    setInterval(() => {
        console.log(getRandomPhrase());
    }, 1000); // Виводити кожну секунду
}

startLoop();

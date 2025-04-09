const player = document.getElementById('player');
const letraContainer = document.getElementById('letra-container');
const playBtn = document.getElementById('playBtn');
const progressBar = document.getElementById('progress-bar');
const progressContainer = document.getElementById('progress-container');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');

const letras = [
    { time: 27, text: "E eu vou dançar onde ninguém possa me olhar", duration: 7 },
    { time: 34, text: "Resido em mim, sou meu lar", duration: 5 },
    { time: 35, text: "E ninguém pode cantar minha canção", duration: 5 },
    { time: 40, text: "Um abrigo, um amigo", duration: 5 },
    { time: 45, text: "Um acorde suspenso, invertido", duration: 5 },
    { time: 50, text: "O silêncio da voz da razão", duration: 5 },
    { time: 55, text: "É que às vezes o tempo para", duration: 5 },
    { time: 60, text: "Às vezes o tempo para", duration: 5 },
    { time: 65, text: "Às vezes o tempo", duration: 5 },
    { time: 70, text: "É que às vezes o tempo para", duration: 5 },
    { time: 75, text: "Às vezes o tempo para", duration: 5 },
    { time: 80, text: "Às vezes o tempo", duration: 5 },
    { time: 85, text: "Eu não vou deixar que o tempo se esconda pra mim", duration: 5 },
    { time: 90, text: "E enquanto ele corre, enfim, tudo possa voltar", duration: 5 },
    { time: 95, text: "Pro seu lugar", duration: 5 },
    { time: 100, text: "O reinado em sigilo das notas que digo", duration: 5 },
    { time: 105, text: "E ecoam distantes de toda atenção", duration: 5 },
    { time: 110, text: "O reinado em sigilo das notas que digo", duration: 5 },
    { time: 115, text: "E ecoam distantes de toda atenção", duration: 5 },
    { time: 120, text: "É que às vezes o tempo para", duration: 5 },
    { time: 125, text: "Às vezes o tempo para", duration: 5 },
    { time: 130, text: "Às vezes o tempo", duration: 5 },
    { time: 135, text: "É que às vezes o tempo para", duration: 5 },
    { time: 140, text: "Às vezes o tempo para", duration: 5 },
    { time: 145, text: "Às vezes o tempo", duration: 5 },
    { time: 150, text: "É que às vezes o tempo para", duration: 5 },
    { time: 155, text: "Às vezes o tempo para", duration: 5 },
    { time: 160, text: "Às vezes o tempo", duration: 5 }
];

let currentIndex = 0;
let intervalId;

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

function updateProgressBar() {
    const progressPercent = (player.currentTime / player.duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
    currentTimeEl.textContent = formatTime(player.currentTime);
    durationEl.textContent = formatTime(player.duration || 0);
}

function updateLyrics() {
    letraContainer.innerHTML = letras
        .map((letra, index) => {
            const isActive = index === currentIndex ? "active" : "";
            return `<p class="${isActive}" data-time="${letra.time}">${letra.text}</p>`;
        })
        .join("");

    // Adiciona evento de clique para cada frase
    const phrases = letraContainer.querySelectorAll('p');
    phrases.forEach(phrase => {
        phrase.addEventListener('click', (e) => {
            const time = parseFloat(e.target.getAttribute('data-time'));
            player.currentTime = time;
            currentIndex = letras.findIndex(letra => letra.time === time);
            updateLyrics();
        });
    });
}

function startLyricsScroll() {
    updateLyrics(); // Atualiza as letras imediatamente
    intervalId = setInterval(() => {
        if (currentIndex < letras.length && player.currentTime >= letras[currentIndex].time) {
            currentIndex++;
            updateLyrics();
        }
    }, 100);
}

function stopLyricsScroll() {
    clearInterval(intervalId);
}

player.addEventListener('timeupdate', () => {
    updateProgressBar();
});

playBtn.addEventListener('click', () => {
    if (player.paused) {
        player.play();
        playBtn.classList.remove('paused');
        startLyricsScroll();
    } else {
        player.pause();
        playBtn.classList.add('paused');
        stopLyricsScroll();
    }
});

progressContainer.addEventListener('click', (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = player.duration;

    player.currentTime = (clickX / width) * duration;
    currentIndex = letras.findIndex(letra => player.currentTime < letra.time) - 1;
    updateLyrics();
});
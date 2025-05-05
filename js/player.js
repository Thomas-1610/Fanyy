const player = document.getElementById('player');
const letraContainer = document.getElementById('letra-container');
const playBtn = document.getElementById('playBtn');
const progressBar = document.getElementById('progress-bar');
const progressContainer = document.getElementById('progress-container');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');

const letras = [
    { time: 27, text: "E eu vou dançar onde ninguém possa me olhar", duration: 6 }, // 0:27 to 0:33
    { time: 33, text: "Resido em mim, sou meu lar", duration: 5 }, // 0:33 to 0:38
    { time: 38, text: "E ninguém pode cantar minha canção", duration: 7 }, // 0:38 to 0:43
    { time: 45, text: "Um abrigo, um amigo", duration: 5 }, // 0:43 to 0:48
    { time: 48, text: "Um acorde suspenso, invertido", duration: 6 }, // 0:48 to 0:53
    { time: 54, text: "O silêncio da voz da razão", duration: 10 }, // 0:53 to 1:00

    { time: 64, text: "É que às vezes o tempo para", duration: 5 }, // 1:00 to 1:05
    { time: 69, text: "Às vezes o tempo para", duration: 4 }, // 1:05 to 1:10
    { time: 73, text: "Às vezes o tempo", duration: 7 }, // 1:10 to 1:15

    { time: 80, text: "É que às vezes o tempo para", duration: 5 }, // 1:15 to 1:20
    { time: 85, text: "Às vezes o tempo para", duration: 4 }, // 1:20 to 1:25
    { time: 89, text: "Às vezes o tempo", duration: 5 }, // 1:25 to 1:30

    { time: 94, text: "Eu não vou deixar que o tempo se esconda pra mim", duration: 7 }, // 1:30 to 1:35
    { time: 101, text: "E enquanto ele corre, enfim, tudo possa voltar", duration: 8 }, // 1:35 to 1:40
    { time: 109, text: "Pro seu lugar", duration: 5 }, // 1:40 to 1:45

    { time: 114, text: "O reinado em sigilo das notas que digo", duration: 8 }, // 1:45 to 1:50
    { time: 122, text: "E ecoam distantes de toda atenção", duration: 8 }, // 1:50 to 1:55

    { time: 130, text: "O reinado em sigilo das notas que digo", duration: 8 }, // 1:55 to 2:00
    { time: 138, text: "E ecoam distantes de toda atenção", duration: 10 }, // 2:00 to 2:05

    { time: 148, text: "É que às vezes o tempo para", duration: 5 }, // 2:05 to 2:10
    { time: 153, text: "Às vezes o tempo para", duration: 4 }, // 2:10 to 2:15
    { time: 157, text: "Às vezes o tempo", duration: 7 }, // 2:15 to 2:20

    { time: 164, text: "É que às vezes o tempo para", duration: 5 }, // 2:20 to 2:25
    { time: 169, text: "Às vezes o tempo para", duration: 4 }, // 2:25 to 2:30
    { time: 173, text: "Às vezes o tempo", duration: 7 }, // 2:30 to 2:35

    { time: 180, text: "É que às vezes o tempo para", duration: 4 }, // 2:35 to 2:40
    { time: 184, text: "Às vezes o tempo para", duration: 4 }, // 2:40 to 2:45
    { time: 189, text: "Às vezes o tempo", duration: 7 } // 2:45 to 2:50
];
const letras2 = [
    { time: 27, text: "oo", duration: 6 }, // 0:27 to 0:33
    { time: 33, text: "Resido em mim, sou meu lar", duration: 5 }, // 0:33 to 0:38
    { time: 38, text: "E ninguém pode cantar minha canção", duration: 7 }, // 0:38 to 0:43
    { time: 45, text: "Um abrigo, um amigo", duration: 5 }, // 0:43 to 0:48
    { time: 48, text: "Um acorde suspenso, invertido", duration: 6 }, // 0:48 to 0:53
    { time: 54, text: "O silêncio da voz da razão", duration: 10 }, // 0:53 to 1:00

    { time: 64, text: "É que às vezes o tempo para", duration: 5 }, // 1:00 to 1:05
    { time: 69, text: "Às vezes o tempo para", duration: 4 }, // 1:05 to 1:10
    { time: 73, text: "Às vezes o tempo", duration: 7 }, // 1:10 to 1:15

    { time: 80, text: "É que às vezes o tempo para", duration: 5 }, // 1:15 to 1:20
    { time: 85, text: "Às vezes o tempo para", duration: 4 }, // 1:20 to 1:25
    { time: 89, text: "Às vezes o tempo", duration: 5 }, // 1:25 to 1:30

    { time: 94, text: "Eu não vou deixar que o tempo se esconda pra mim", duration: 7 }, // 1:30 to 1:35
    { time: 101, text: "E enquanto ele corre, enfim, tudo possa voltar", duration: 8 }, // 1:35 to 1:40
    { time: 109, text: "Pro seu lugar", duration: 5 }, // 1:40 to 1:45

    { time: 114, text: "O reinado em sigilo das notas que digo", duration: 8 }, // 1:45 to 1:50
    { time: 122, text: "E ecoam distantes de toda atenção", duration: 8 }, // 1:50 to 1:55

    { time: 130, text: "O reinado em sigilo das notas que digo", duration: 8 }, // 1:55 to 2:00
    { time: 138, text: "E ecoam distantes de toda atenção", duration: 10 }, // 2:00 to 2:05

    { time: 148, text: "É que às vezes o tempo para", duration: 5 }, // 2:05 to 2:10
    { time: 153, text: "Às vezes o tempo para", duration: 4 }, // 2:10 to 2:15
    { time: 157, text: "Às vezes o tempo", duration: 7 }, // 2:15 to 2:20

    { time: 164, text: "É que às vezes o tempo para", duration: 5 }, // 2:20 to 2:25
    { time: 169, text: "Às vezes o tempo para", duration: 4 }, // 2:25 to 2:30
    { time: 173, text: "Às vezes o tempo", duration: 7 }, // 2:30 to 2:35

    { time: 180, text: "É que às vezes o tempo para", duration: 4 }, // 2:35 to 2:40
    { time: 184, text: "Às vezes o tempo para", duration: 4 }, // 2:40 to 2:45
    { time: 189, text: "Às vezes o tempo", duration: 7 } // 2:45 to 2:50
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
    currentTimeEl.textContent = formatTime(player.currentTime); // Continuously updates current time
    if (!isNaN(player.duration)) {
        durationEl.textContent = formatTime(player.duration); // Displays total duration
    }
}

// Function to determine which lyrics to use based on the song
function getLyrics() {
    const songId = player.getAttribute('data-song-id'); // Get the song ID from the audio element
    return songId === 'letras2' ? letras2 : letras; // Default to 'letras' if no match
}

// Update the lyrics dynamically
function updateLyrics() {
    const currentLyrics = getLyrics(); // Get the appropriate lyrics
    letraContainer.innerHTML = currentLyrics
        .map((letra, index) => {
            const isActive = index === currentIndex ? "active" : "";
            return `<p class="${isActive}" data-time="${letra.time}">${letra.text}</p>`;
        })
        .join("");

    // Scroll the active lyric into view
    const activeLyric = letraContainer.querySelector('.active');
    if (activeLyric) {
        activeLyric.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Add click event to each phrase
    const phrases = letraContainer.querySelectorAll('p');
    phrases.forEach(phrase => {
        phrase.addEventListener('click', (e) => {
            const time = parseFloat(e.target.getAttribute('data-time'));
            player.currentTime = time;
            currentIndex = currentLyrics.findIndex(letra => letra.time === time);
            updateLyrics();
        });
    });
}

function startLyricsScroll() {
    updateLyrics(); // Atualiza as letras imediatamente
    intervalId = setInterval(() => {
        if (
            currentIndex < getLyrics().length &&
            player.currentTime >= getLyrics()[currentIndex].time + getLyrics()[currentIndex].duration
        ) {
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
    currentIndex = getLyrics().findIndex(letra => player.currentTime < letra.time) - 1;
    updateLyrics();
});
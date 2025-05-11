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
    { time: 0, text: "Oh-ohh, oh", duration: 13 },

    { time: 14, text: "It must be more than I need you", duration: 8 }, 
    { time: 21, text: "More than I love you", duration: 8 }, 
    { time: 29, text: "Be more than wishes on stars", duration: 6 }, 
    { time: 35, text: "High above you", duration: 8 }, 

    { time: 43, text: "If words could just hold you", duration: 4 }, // 1:00 to 1:05
    { time: 47, text: "Tell me you feel me", duration: 4 }, // 1:05 to 1:10
    { time: 51, text: "Oh, just to know you", duration: 3 }, // 1:10 to 1:15
    { time: 54, text: "Tell me you see me", duration: 4 }, // 1:15 to 1:20
    { time: 58, text: "I couldn't have said it", duration: 3 }, // 1:20 to 1:25
    { time: 61, text: "You must have just read it", duration: 5 }, // 1:25 to 1:30
    { time: 66, text: "In my eyes", duration: 3 }, // 1:30 to 1:35
    { time: 69, text: "Darling, please", duration: 3 }, // 1:35 to 1:40

    { time: 72, text: "Let it be more", duration: 4 }, // 1:40 to 1:45
    { time: 76, text: "Be more", duration: 4 }, // 1:45 to 1:50
    { time: 80, text: "Be more", duration: 7 }, // 1:50 to 1:55

    { time: 87, text: "It must be more than I want you", duration: 8 }, // 1:55 to 2:00
    { time: 95, text: "More than I caught you", duration: 8 }, // 2:00 to 2:05
    { time: 103, text: "Be more than dancing in raindrops", duration: 6 }, // 2:05 to 2:10
    { time: 109, text: "Falling to touch you", duration: 3 }, // 2:10 to 2:15
    { time: 112, text: "Oh, just to touch you", duration: 3 }, // 2:15 to 2:20
    { time: 115, text: "Oh-oh", duration: 1 }, 

    { time: 116, text: "If words could just hold you", duration: 4 }, // 2:25 to 2:30
    { time: 120, text: "Tell me you feel me", duration: 4 }, // 2:30 to 2:35
    { time: 124, text: "Oh, just to know you", duration: 3 }, 
    { time: 127, text: "Tell me you see me, yeah", duration: 4 }, 
    { time: 131, text: "I couldn't have said it", duration: 3 },
    { time: 134, text: "You must have just read it", duration: 5 },
    { time: 139, text: "In my eyes", duration: 7 },

    { time: 146, text: "Let it be more", duration: 4 },
    { time: 150, text: "Be more", duration: 4 },
    { time: 154, text: "Be more", duration: 5 },

    { time: 159, text: "Darling, let it be more", duration: 5 },
    { time: 164, text: "Be more", duration: 4 },
    { time: 168, text: "Be more", duration: 21 },

    { time: 189, text: "If words could just hold you", duration: 4 }, // 2:25 to 2:30
    { time: 193, text: "Tell me you feel me", duration: 4 }, // 2:30 to 2:35
    { time: 197, text: "Oh, just to know you", duration: 4 }, 
    { time: 201, text: "Tell me you see me", duration: 3 }, 
    { time: 204, text: "I couldn't have said it", duration: 3 },
    { time: 207, text: "You must have just read it", duration: 4 },
    { time: 211, text: "In my eyes", duration: 4 },
    { time: 215, text: "Darling, please", duration: 3 },

    { time: 218, text: "Let it be more", duration: 7 }
];
const letras3 = [
    { time: 0, text: "poxa", duration: 13 },

    { time: 14, text: "It must be more than I need you", duration: 8 }, 
    { time: 21, text: "More than I love you", duration: 8 }, 
    { time: 29, text: "Be more than wishes on stars", duration: 6 }, 
    { time: 35, text: "High above you", duration: 8 }, 

    { time: 43, text: "If words could just hold you", duration: 4 }, // 1:00 to 1:05
    { time: 47, text: "Tell me you feel me", duration: 4 }, // 1:05 to 1:10
    { time: 51, text: "Oh, just to know you", duration: 3 }, // 1:10 to 1:15
    { time: 54, text: "Tell me you see me", duration: 4 }, // 1:15 to 1:20
    { time: 58, text: "I couldn't have said it", duration: 3 }, // 1:20 to 1:25
    { time: 61, text: "You must have just read it", duration: 5 }, // 1:25 to 1:30
    { time: 66, text: "In my eyes", duration: 3 }, // 1:30 to 1:35
    { time: 69, text: "Darling, please", duration: 3 }, // 1:35 to 1:40

    { time: 72, text: "Let it be more", duration: 4 }, // 1:40 to 1:45
    { time: 76, text: "Be more", duration: 4 }, // 1:45 to 1:50
    { time: 80, text: "Be more", duration: 7 }, // 1:50 to 1:55

    { time: 87, text: "It must be more than I want you", duration: 8 }, // 1:55 to 2:00
    { time: 95, text: "More than I caught you", duration: 8 }, // 2:00 to 2:05
    { time: 103, text: "Be more than dancing in raindrops", duration: 6 }, // 2:05 to 2:10
    { time: 109, text: "Falling to touch you", duration: 3 }, // 2:10 to 2:15
    { time: 112, text: "Oh, just to touch you", duration: 3 }, // 2:15 to 2:20
    { time: 115, text: "Oh-oh", duration: 1 }, 

    { time: 116, text: "If words could just hold you", duration: 4 }, // 2:25 to 2:30
    { time: 120, text: "Tell me you feel me", duration: 4 }, // 2:30 to 2:35
    { time: 124, text: "Oh, just to know you", duration: 3 }, 
    { time: 127, text: "Tell me you see me, yeah", duration: 4 }, 
    { time: 131, text: "I couldn't have said it", duration: 3 },
    { time: 134, text: "You must have just read it", duration: 5 },
    { time: 139, text: "In my eyes", duration: 7 },

    { time: 146, text: "Let it be more", duration: 4 },
    { time: 150, text: "Be more", duration: 4 },
    { time: 154, text: "Be more", duration: 5 },

    { time: 159, text: "Darling, let it be more", duration: 5 },
    { time: 164, text: "Be more", duration: 4 },
    { time: 168, text: "Be more", duration: 21 },

    { time: 189, text: "If words could just hold you", duration: 4 }, // 2:25 to 2:30
    { time: 193, text: "Tell me you feel me", duration: 4 }, // 2:30 to 2:35
    { time: 197, text: "Oh, just to know you", duration: 4 }, 
    { time: 201, text: "Tell me you see me", duration: 3 }, 
    { time: 204, text: "I couldn't have said it", duration: 3 },
    { time: 207, text: "You must have just read it", duration: 4 },
    { time: 211, text: "In my eyes", duration: 4 },
    { time: 215, text: "Darling, please", duration: 3 },

    { time: 218, text: "Let it be more", duration: 7 }
];
const letras4 = [
    { time: 0, text: "Atravessando o mar com uma", duration: 3 },
    { time: 3, text: "Mutirão de pessoa comuns", duration: 2 },
    { time: 5, text: "Uma moeda pra entrar", duration: 3 },
    { time: 8, text: "Nesse mar onde não pode nadar", duration: 2 },
    { time: 10, text: "Eu procuro alguém do meu sangue", duration: 3 },
    { time: 13, text: "Se perdeu? Eu te acho", duration: 2 },
    { time: 15, text: "Eu procuro alguém do meu sangue", duration: 3 },
    { time: 18, text: "Se perdeu? Eu te trago pro meu barco", duration: 2 },

    { time: 20, text: "Atravessando o mar com uma", duration: 3 },
    { time: 23, text: "Mutirão de fantasmas", duration: 2 },
    { time: 25, text: "Eu sou só uma alma penada que brotou pra cá", duration: 4 },
    { time: 29, text: "(Que brotou pra cá)", duration: 1 },
    { time: 30, text: "Te procuro no raso do mar", duration: 2 },
    { time: 32, text: "Na beira da praia", duration: 3 },
    { time: 35, text: "Se perdeu? Eu te arrasto pro mar", duration: 2 },
    { time: 37, text: "Pra dentro do meu barco", duration: 4 },
    { time: 41, text: "Sou só um menino sem olhos", duration: 4 },
    { time: 45, text: "Procurando você, ó Anabel", duration: 5 },
    { time: 50, text: "O Caronte levou o meu horizonte", duration: 5 },
    { time: 55, text: "O Caronte levou o meu horizonte", duration: 7 },
    { time: 62, text: "Horizonte", duration: 6 },
    { time: 68, text: "Atravessando o mar com uma", duration: 3 },
    { time: 71, text: "Mutirão de pessoa comuns", duration: 3 },
    { time: 74, text: "Uma moeda pra entrar", duration: 2 },
    { time: 76, text: "Nesse mar onde não pode nadar", duration: 2 },
    { time: 78, text: "Eu procuro alguém do meu sangue", duration: 3 },
    { time: 81, text: "Se perdeu? Eu te acho", duration: 2 },
    { time: 83, text: "Eu procuro alguém do meu sangue", duration: 3 },
    { time: 86, text: "Se perdeu? Eu te trago pro meu barco", duration: 2 },
    { time: 88, text: "Atravessando o mar com uma", duration: 2 },
    { time: 90, text: "Mutirão de fantasmas", duration: 3 },

    { time: 93, text: "Eu sou só uma alma penada que brotou pra cá", duration: 4 },
    { time: 97, text: "(Que brotou pra cá)", duration: 2 },
    { time: 99, text: "Te procuro no raso do mar", duration: 3 },
    
    { time: 103, text: "Na beira da praia", duration: 2 },
    { time: 105, text: "Se perdeu? Eu te arrasto pro mar", duration: 3 },
    { time: 108, text: "Pra dentro do meu barco", duration: 2 },
    { time: 110, text: "Sou só um menino sem olhos", duration: 3 },
    { time: 113, text: "Procurando você, ó Anabel", duration: 3 },
    { time: 116, text: "O Caronte levou o meu horizonte", duration: 3 },
    { time: 119, text: "O Caronte levou o meu horizonte", duration: 3 },
    { time: 122, text: "Sou só um menino sem olhos", duration: 3 },
    { time: 125, text: "Procurando você, ó Anabel", duration: 3 },
    { time: 128, text: "O Caronte levou o meu horizonte", duration: 3 },
    { time: 131, text: "O Caronte levou o meu horizonte", duration: 3 },
    { time: 134, text: "Horizonte", duration: 2 },
    { time: 136, text: "Horizonte", duration: 2 },
    { time: 138, text: "Horizonte", duration: 2 }
];
const letras5 = [
    { time: 0, text: "Atravessando o mar com uma", duration: 3 },
    { time: 3, text: "Mutirão de pessoa comuns", duration: 3 },
    { time: 6, text: "Uma moeda pra entrar", duration: 3 },
    { time: 9, text: "Nesse mar onde não pode nadar", duration: 4 },
    { time: 13, text: "Eu procuro alguém do meu sangue", duration: 3 },
    { time: 16, text: "Se perdeu? Eu te acho", duration: 2 },
    { time: 18, text: "Eu procuro alguém do meu sangue", duration: 3 },
    { time: 21, text: "Se perdeu? Eu te trago pro meu barco", duration: 4 },
    { time: 25, text: "Atravessando o mar com uma", duration: 3 },
    { time: 28, text: "Mutirão de fantasmas", duration: 3 },
    { time: 31, text: "Eu sou só uma alma penada que brotou pra cá", duration: 5 },
    { time: 36, text: "(Que brotou pra cá)", duration: 2 },
    { time: 38, text: "Te procuro no raso do mar", duration: 3 },
    { time: 41, text: "Na beira da praia", duration: 2 },
    { time: 43, text: "Se perdeu? Eu te arrasto pro mar", duration: 3 },
    { time: 46, text: "Pra dentro do meu barco", duration: 2 },
    { time: 48, text: "Sou só um menino sem olhos", duration: 3 },
    { time: 51, text: "Procurando você, ó Anabel", duration: 3 },
    { time: 54, text: "O Caronte levou o meu horizonte", duration: 3 },
    { time: 57, text: "O Caronte levou o meu horizonte", duration: 3 },
    { time: 60, text: "Horizonte", duration: 2 },
    { time: 62, text: "Atravessando o mar com uma", duration: 3 },
    { time: 65, text: "Mutirão de pessoa comuns", duration: 3 },
    { time: 68, text: "Uma moeda pra entrar", duration: 3 },
    { time: 71, text: "Nesse mar onde não pode nadar", duration: 4 },
    { time: 75, text: "Eu procuro alguém do meu sangue", duration: 3 },
    { time: 78, text: "Se perdeu? Eu te acho", duration: 2 },
    { time: 80, text: "Eu procuro alguém do meu sangue", duration: 3 },
    { time: 83, text: "Se perdeu? Eu te trago pro meu barco", duration: 4 },
    { time: 87, text: "Atravessando o mar com uma", duration: 3 },
    { time: 90, text: "Mutirão de fantasmas", duration: 3 },
    { time: 93, text: "Eu sou só uma alma penada que brotou pra cá", duration: 5 },
    { time: 98, text: "(Que brotou pra cá)", duration: 2 },
    { time: 100, text: "Te procuro no raso do mar", duration: 3 },
    { time: 103, text: "Na beira da praia", duration: 2 },
    { time: 105, text: "Se perdeu? Eu te arrasto pro mar", duration: 3 },
    { time: 108, text: "Pra dentro do meu barco", duration: 2 },
    { time: 110, text: "Sou só um menino sem olhos", duration: 3 },
    { time: 113, text: "Procurando você, ó Anabel", duration: 3 },
    { time: 116, text: "O Caronte levou o meu horizonte", duration: 3 },
    { time: 119, text: "O Caronte levou o meu horizonte", duration: 3 },
    { time: 122, text: "Sou só um menino sem olhos", duration: 3 },
    { time: 125, text: "Procurando você, ó Anabel", duration: 3 },
    { time: 128, text: "O Caronte levou o meu horizonte", duration: 3 },
    { time: 131, text: "O Caronte levou o meu horizonte", duration: 3 },
    { time: 134, text: "Horizonte", duration: 2 },
    { time: 136, text: "Horizonte", duration: 2 },
    { time: 138, text: "Horizonte", duration: 2 }
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
    if (songId === 'letras2') return letras2;
    if (songId === 'letras3') return letras3;
    if (songId === 'letras4') return letras4;
    if (songId === 'letras5') return letras5;
    return letras; // Default to 'letras' if no match
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

player.addEventListener('ended', () => {
    player.currentTime = 0;
    currentIndex = 0;
    updateLyrics();
    player.play();
    startLyricsScroll();
});

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
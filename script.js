const music = document.getElementById('bgMusic');

// Fungsi sakti buat maksa lagu jalan di iPhone
function playMusic() {
    if (music && localStorage.getItem('musicPlaying') === 'true') {
        music.play().catch(() => {
            // Jika diblokir, kita tunggu user klik apa saja di layar
            document.addEventListener('click', () => {
                music.play();
            }, { once: true });
        });
    }
}

// Cek musik setiap kali pindah halaman
window.addEventListener('load', () => {
    if (localStorage.getItem('musicPlaying') === 'true' && music) {
        const savedTime = localStorage.getItem('musicTime');
        if (savedTime) music.currentTime = savedTime;
        playMusic();
    }
});

// Simpan detik lagu biar nyambung terus
setInterval(() => {
    if (music && !music.paused) {
        localStorage.setItem('musicTime', music.currentTime);
    }
}, 500);

function startSurprise() {
    localStorage.setItem('musicPlaying', 'true');
    if (music) {
        music.play().then(() => {
            window.location.href = 'halaman1.html';
        }).catch(() => {
            // Kalau gagal play di awal, tetep pindah halaman
            window.location.href = 'halaman1.html';
        });
    }
}

function nextHalaman(namaFile) {
    window.location.href = namaFile;
}

// --- EFEK PARTIKEL ---
function createFallingEffect() {
    const symbols = ['🌸', '💗', '✨', '💖', '⭐', '🎀'];
    const el = document.createElement('div');
    el.classList.add('flower-love');
    el.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
    el.style.left = Math.random() * 100 + 'vw';
    el.style.fontSize = Math.random() * 20 + 10 + 'px';
    const duration = Math.random() * 3 + 4; 
    el.style.animationDuration = duration + 's';
    document.body.appendChild(el);
    setTimeout(() => { el.remove(); }, duration * 1000);
}
setInterval(createFallingEffect, 400);

function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    const size = Math.random() * 5 + 2 + 'px';
    sparkle.style.width = size;
    sparkle.style.height = size;
    sparkle.style.top = Math.random() * 100 + 'vh';
    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.setProperty('--d', Math.random() * 2 + 1 + 's');
    document.body.appendChild(sparkle);
    setTimeout(() => { sparkle.remove(); }, 3000);
}
setInterval(createSparkle, 150);

// script.js

// 1. Efek Elemen Jatuh (Falling Particles)
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

// 2. Efek Kelap Kelip (Sparkle Stars)
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

// 3. Logika Musik & Navigasi
const music = document.getElementById('bgMusic');

window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('musicPlaying') === 'true' && music) {
        const savedTime = localStorage.getItem('musicTime');
        if (savedTime) music.currentTime = savedTime;
        music.play().catch(() => console.log("Menunggu interaksi layar..."));
    }
});

setInterval(() => {
    if (music && !music.paused) {
        localStorage.setItem('musicTime', music.currentTime);
    }
}, 500);

function startSurprise() {
    localStorage.setItem('musicPlaying', 'true');
    
    if (music) {
        // iPhone butuh trigger play yang kuat sebelum pindah halaman
        music.play(); 
        
        // Kasih jeda 300ms (sekejap mata) biar Safari sempet proses lagunya
        setTimeout(() => {
            window.location.href = 'halaman1.html';
        }, 300);
    } else {
        window.location.href = 'halaman1.html';
    }
}

function nextHalaman(namaFile) {
    document.querySelector('.container').style.opacity = '0';
    document.querySelector('.container').style.transition = '0.4s';
    setTimeout(() => {
        window.location.href = namaFile;
    }, 400);
}

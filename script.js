function createEffect() {
    const symbols = ['🌸', '💗', '🎀', '✨', '💖', '⭐', '🐈'];
    const el = document.createElement('div');
    el.classList.add('flower-love');
    el.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
    el.style.left = Math.random() * 100 + 'vw';
    el.style.fontSize = Math.random() * 20 + 15 + 'px';
    const duration = Math.random() * 3 + 3; 
    el.style.animationDuration = duration + 's';
    document.body.appendChild(el);
    setTimeout(() => { el.remove(); }, duration * 1000);
}
setInterval(createEffect, 300);

function addKitty() {
    const kitty = document.createElement('img');
    kitty.src = "https://i.pinimg.com/originals/f3/f5/00/f3f50059374092b1ec3c58b4ec282061.png"; 
    kitty.classList.add('hello-kitty');
    document.body.appendChild(kitty);
}
window.onload = addKitty;

const music = document.getElementById('bgMusic');

window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('musicPlaying') === 'true' && music) {
        const savedTime = localStorage.getItem('musicTime');
        if (savedTime) music.currentTime = savedTime;
        music.play().catch(() => console.log("User interaction needed"));
    }
});

setInterval(() => {
    if (music && !music.paused) {
        localStorage.setItem('musicTime', music.currentTime);
    }
}, 500);

function startSurprise() {
    localStorage.setItem('musicPlaying', 'true');
    if (music) music.play();
    window.location.href = 'halaman1.html';
}

function nextHalaman(namaFile) {
    document.querySelector('.container').style.opacity = '0';
    setTimeout(() => { window.location.href = namaFile; }, 400);
}
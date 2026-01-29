const music = document.getElementById('bgMusic');

function mulaiWeb() {
    if (music) music.play();
    tampilHal('hal-1');
}

function tampilHal(idHal) {
    // Sembunyikan semua halaman
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Tampilkan halaman yang dituju
    const target = document.getElementById(idHal);
    target.classList.add('active');
}

// EFEK PARTIKEL (Tetap Ada)
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

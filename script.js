const music = document.getElementById('bgMusic');
const cornerEmojis = ['🌸', '🎀', '🎈', '💖', '✨', '🧸', '🌈', '🧁', '⭐', '🦋'];

function updateCorners() {
    ['corner-tl', 'corner-tr', 'corner-bl', 'corner-br'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.style.opacity = '0';
            setTimeout(() => {
                el.innerHTML = cornerEmojis[Math.floor(Math.random() * cornerEmojis.length)];
                el.style.opacity = '1';
            }, 500);
        }
    });
}

function mulaiWeb() {
    if (music) music.play().catch(() => {});
    updateCorners();
    tampilHal('hal-1');
}

function tampilHal(idHal) {
    // Sembunyikan semua dulu
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Tampilkan yang dipilih
    const target = document.getElementById(idHal);
    if (target) {
        target.classList.add('active');
        updateCorners();
    }
}

// Efek Partikel
function createParticle(symbol, className) {
    const el = document.createElement('div');
    el.innerHTML = symbol;
    el.style.cssText = `position:fixed; top:-50px; left:${Math.random()*100}vw; font-size:${Math.random()*20+15}px; z-index:1; pointer-events:none; animation: falling ${Math.random()*3+4}s linear forwards;`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 5000);
}

setInterval(() => createParticle('🌸', 'flower'), 700);
setInterval(() => createParticle('✨', 'glow'), 1000);

const style = document.createElement('style');
style.innerHTML = `@keyframes falling { to { transform: translateY(110vh) rotate(360deg); } }`;
document.head.appendChild(style);

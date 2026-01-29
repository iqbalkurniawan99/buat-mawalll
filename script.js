const music = document.getElementById('bgMusic');

// Daftar emoji lucu untuk hiasan sudut
const cornerEmojis = ['🌸', '🎀', '🎈', '💖', '✨', '🧸', '🍬', '🍭', '🌈', '🍦', '🍓', '🧁', '⭐', '🦋', '🐱', '🐰'];

function updateCorners() {
    const corners = ['corner-tl', 'corner-tr', 'corner-bl', 'corner-br'];
    corners.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            // Animasi menghilang dulu sebentar
            el.style.opacity = '0';
            setTimeout(() => {
                el.innerHTML = cornerEmojis[Math.floor(Math.random() * cornerEmojis.length)];
                el.style.opacity = '1';
            }, 500);
        }
    });
}

function mulaiWeb() {
    if (music) music.play();
    updateCorners(); // Ganti hiasan saat mulai
    tampilHal('hal-1');
}

function tampilHal(idHal) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none';
    });
    
    const target = document.getElementById(idHal);
    target.style.display = 'flex';
    setTimeout(() => { 
        target.classList.add('active'); 
        updateCorners(); // Ganti hiasan SETIAP ganti halaman
    }, 50);
}

// 1. Partikel Jatuh (🌸, dll)
function createFlower() {
    const symbols = ['🌸', '💗', '✨', '💖', '🎀'];
    const el = document.createElement('div');
    el.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
    el.style.cssText = `position:fixed; top:-50px; left:${Math.random()*100}vw; font-size:${Math.random()*20+15}px; z-index:5; pointer-events:none; animation: falling ${Math.random()*3+4}s linear forwards;`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 5000);
}

// 2. Partikel Glow Pink
function createGlowParticle() {
    const p = document.createElement('div');
    p.classList.add('particle');
    const size = Math.random() * 8 + 4 + 'px';
    const color = ['#ff4d6d', '#ff85a1', '#ffb3c1'][Math.floor(Math.random()*3)];
    p.style.cssText = `width:${size}; height:${size}; background:${color}; box-shadow:0 0 10px ${color}; left:${Math.random()*100}vw; top:-20px; opacity:${Math.random()*0.5+0.5}; animation-duration:${Math.random()*2+4}s;`;
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 5000);
}

// 3. Sticker Muncul Acak
function createRandomSticker() {
    const stickers = ['💖', '🌟', '🥳', '🎁', '🎀', '🎈'];
    const s = document.createElement('div');
    s.classList.add('random-sticker');
    s.innerHTML = stickers[Math.floor(Math.random()*stickers.length)];
    s.style.left = Math.random() * 90 + 'vw';
    s.style.top = Math.random() * 90 + 'vh';
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 5000);
}

// Jalankan animasi
setInterval(createFlower, 600);
setInterval(createGlowParticle, 300);
setInterval(createRandomSticker, 2000);
setInterval(updateCorners, 8000); // Otomatis ganti sudut tiap 8 detik kalau mawar diem aja

// Animasi jatuh (Global)
const style = document.createElement('style');
style.innerHTML = `@keyframes falling { to { transform: translateY(110vh) rotate(360deg); } }`;
document.head.appendChild(style);

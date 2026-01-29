const music = document.getElementById('bgMusic');
const cornerEmojis = ['🌸', '🎀', '🧸', '💖', '✨', '🌈', '🍦', '🍓', '🧁', '🦋'];

function kejutanDuar() {
    const overlay = document.getElementById('surprise-overlay');
    const rect = document.querySelector('.btn-utama').getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Putar musik
    if (music) music.play().catch(() => {});

    // Bikin partikel "18" DUAR
    for (let i = 0; i < 20; i++) {
        const p = document.createElement('div');
        p.classList.add('duar-particle');
        p.innerHTML = Math.random() > 0.5 ? "18" : "💥";
        p.style.left = centerX + 'px';
        p.style.top = centerY + 'px';
        
        // Arah ledakan acak
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 200 + 100;
        p.style.setProperty('--tx', Math.cos(angle) * velocity + 'px');
        p.style.setProperty('--ty', Math.sin(angle) * velocity + 'px');
        p.style.setProperty('--tr', Math.random() * 360 + 'deg');
        
        overlay.appendChild(p);
        setTimeout(() => p.remove(), 1000);
    }

    // Pindah halaman setelah jeda ledakan dikit
    setTimeout(() => {
        tampilHal('hal-1');
    }, 400);
}

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

function tampilHal(idHal) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    const target = document.getElementById(idHal);
    if (target) {
        target.classList.add('active');
        updateCorners();
    }
}

// Partikel Latar Belakang
setInterval(() => {
    const el = document.createElement('div');
    el.innerHTML = ['🌸', '✨', '💗'][Math.floor(Math.random() * 3)];
    el.style.cssText = `position:fixed; top:-50px; left:${Math.random()*100}vw; font-size:${Math.random()*20+15}px; z-index:1; pointer-events:none; animation: falling ${Math.random()*3+4}s linear forwards;`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 5000);
}, 600);

const style = document.createElement('style');
style.innerHTML = `@keyframes falling { to { transform: translateY(110vh) rotate(360deg); } }`;
document.head.appendChild(style);

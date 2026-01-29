const music = document.getElementById('bgMusic');
const cornerEmojis = ['🌸', '🎀', '🎈', '💖', '✨', '🧸', '🍬', '🌈', '🧁', '⭐', '🦋', '🍓'];

function updateCorners() {
    const corners = ['corner-tl', 'corner-tr', 'corner-bl', 'corner-br'];
    corners.forEach(id => {
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
    if (music) music.play().catch(() => console.log("Lagu butuh klik user"));
    updateCorners();
    tampilHal('hal-1');
}

function tampilHal(idHal) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none';
    });
    
    const target = document.getElementById(idHal);
    if (target) {
        target.style.display = 'flex';
        setTimeout(() => { 
            target.classList.add('active'); 
            updateCorners();
        }, 50);
    }
}

function createFlower() {
    const symbols = ['🌸', '💗', '✨', '💖', '🎀'];
    const el = document.createElement('div');
    el.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
    el.style.cssText = `position:fixed; top:-50px; left:${Math.random()*100}vw; font-size:${Math.random()*20+15}px; z-index:5; pointer-events:none; animation: falling ${Math.random()*3+4}s linear forwards;`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 5000);
}

function createGlowParticle() {
    const p = document.createElement('div');
    p.classList.add('particle');
    const size = Math.random() * 8 + 4 + 'px';
    const color = ['#ff4d6d', '#ff85a1', '#ffb3c1'][Math.floor(Math.random()*3)];
    p.style.cssText = `width:${size}; height:${size}; background:${color}; box-shadow:0 0 10px ${color}; left:${Math.random()*100}vw; top:-20px; opacity:${Math.random()*0.5+0.5}; animation-duration:${Math.random()*2+4}s;`;
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 5000);
}

setInterval(createFlower, 600);
setInterval(createGlowParticle, 300);
setInterval(updateCorners, 10000);

const style = document.createElement('style');
style.innerHTML = `@keyframes falling { to { transform: translateY(110vh) rotate(360deg); } }`;
document.head.appendChild(style);

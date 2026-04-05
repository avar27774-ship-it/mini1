document.addEventListener('DOMContentLoaded', () => {
    // Tabs
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.dataset.tab;
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(targetId).classList.add('active');
        });
    });
    
    // Close button
    document.getElementById('closeMenu').addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('closeMenu'));
    });
    
    // Aimbot FOV
    const fovSlider = document.getElementById('aimbotFov');
    const fovValue = document.getElementById('fovValue');
    if (fovSlider) {
        fovSlider.addEventListener('input', () => {
            fovValue.textContent = fovSlider.value + '°';
        });
    }
    
    // Money button
    document.getElementById('moneyBtn')?.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('cheatAction', { detail: { action: 'addMoney' } }));
    });
    
    // God mode buttons
    document.getElementById('stopTimeBtn')?.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('cheatAction', { detail: { action: 'stopTime' } }));
    });
    
    document.getElementById('resumeTimeBtn')?.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('cheatAction', { detail: { action: 'resumeTime' } }));
    });
    
    document.getElementById('lightningBtn')?.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('cheatAction', { detail: { action: 'lightning' } }));
    });
    
    document.getElementById('meteorBtn')?.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('cheatAction', { detail: { action: 'meteor' } }));
    });
    
    document.getElementById('flyBtn')?.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('cheatAction', { detail: { action: 'fly' } }));
    });
    
    document.getElementById('ghostBtn')?.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('cheatAction', { detail: { action: 'ghost' } }));
    });
    
    // FPS counter
    let fps = 0;
    let frameCount = 0;
    let lastTime = performance.now();
    
    function updateFPS() {
        frameCount++;
        const now = performance.now();
        if (now - lastTime >= 1000) {
            fps = frameCount;
            document.getElementById('fps').textContent = fps;
            frameCount = 0;
            lastTime = now;
        }
        requestAnimationFrame(updateFPS);
    }
    requestAnimationFrame(updateFPS);
    
    // Players counter simulation
    setInterval(() => {
        const randomPlayers = Math.floor(Math.random() * 50) + 20;
        document.getElementById('players').textContent = randomPlayers;
    }, 3000);
});

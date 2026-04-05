document.addEventListener('DOMContentLoaded', () => {
    const statusEl = document.querySelector('.status');
    const progressFill = document.querySelector('.progress-fill');
    const injectBtn = document.getElementById('injectBtn');
    
    const stages = [
        { text: "LOADING MODULES...", progress: 20 },
        { text: "CONNECTING TO KERNEL...", progress: 40 },
        { text: "BYPASSING ANTICHEAT...", progress: 60 },
        { text: "INJECTING CHEAT...", progress: 80 },
        { text: "READY! PRESS INSERT", progress: 100 }
    ];
    
    let stage = 0;
    
    function updateStatus() {
        if (stage < stages.length) {
            statusEl.textContent = stages[stage].text;
            progressFill.style.width = stages[stage].progress + '%';
            stage++;
            setTimeout(updateStatus, 800);
        } else {
            injectBtn.disabled = false;
            injectBtn.style.opacity = '1';
        }
    }
    
    updateStatus();
    
    injectBtn.addEventListener('click', () => {
        statusEl.textContent = "INJECTING...";
        injectBtn.textContent = "INJECTING...";
        setTimeout(() => {
            statusEl.textContent = "INJECTION SUCCESSFUL!";
            injectBtn.textContent = "INJECTED";
            injectBtn.style.background = "rgba(0,255,0,0.3)";
            injectBtn.style.borderColor = "#00ff00";
        }, 2000);
    });
    
    // Particle effect
    const canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '0';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    for (let i = 0; i < 100; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2,
            speed: Math.random() * 2 + 1
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (const p of particles) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = '#00ffff';
            ctx.fill();
            p.y += p.speed;
            if (p.y > canvas.height) p.y = 0;
        }
        requestAnimationFrame(animate);
    }
    
    animate();
});

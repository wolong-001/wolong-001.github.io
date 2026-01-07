// 樱花飘落效果
function fallingCherryBlossoms() {
    const particles = [];
    for (let i = 0; i < 100; i++) {
        const particle = {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            size: Math.random() * 5 + 2,
            speed: Math.random() * 2 + 1,
            direction: {
                x: (Math.random() - 0.5) * 10,
                y: Math.random() * 10 - 5
            }
        };
        particles.push(particle);
    }

    function animate() {
        requestAnimationFrame(animate);
        particles.forEach(particle => {
            particle.x += particle.direction.x;
            particle.y += particle.direction.y;
            particle.y += particle.speed;

            if (particle.y > window.innerHeight) {
                particle.y = -particle.size;
                particle.x = Math.random() * window.innerWidth;
            }
        });

        const canvas = document.createElement('canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.fill();
        });

        document.body.appendChild(canvas);
    }

    animate();
}

fallingCherryBlossoms();
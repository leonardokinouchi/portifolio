const container = document.getElementById('particle-container2');

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    

    // Tamanho e posição iniciais aleatórios
    const size = Math.random() * 2 + 2; // Tamanho entre 2px e 6px
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 95}vw`; // Posição horizontal aleatória
    particle.style.top = `${Math.random() * 270}vh`; // Posição vertical aleatória

    // Movimento aleatório
    const moveX = Math.random() * 200 - 100; // Movimento horizontal entre -100px e 100px
    const moveY = Math.random() * 200 - 100; // Movimento vertical entre -100px e 100px
    const duration = Math.random() * 10 + 3; // Duração entre 2s e 7s

    // Animação usando CSS `transform`
    particle.style.transition = `transform ${duration}s linear`;
    container.appendChild(particle);

    // Aplica a transformação após um curto intervalo
    setTimeout(() => {
        particle.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }, 50);

    // Remove a partícula após o término da animação para não acumular na memória
    setTimeout(() => {
        container.removeChild(particle);
    }, duration * 500);
}

// Cria partículas continuamente
setInterval(createParticle, 50);
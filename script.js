function showHearts() {
    const container = document.getElementById('heartsContainer');
    container.innerHTML = '';
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 90 + 'vw';
        heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
        container.appendChild(heart);
    }
}


function shootHearts() {
  const container = document.querySelector('.hearts');
  container.innerHTML = ""; // reset each click

  for (let i = 0; i < 50; i++) {
    let heart = document.createElement('div');
    heart.className = 'falling-heart';

    // Random scatter horizontally
    const scatterX = (window.innerWidth / 2) + (Math.random() * 800 - 500) + "px";
    heart.style.setProperty("--scatter-x", scatterX);

    // Random size scaling
    const scale = (Math.random() * 1.5 + 0.5).toFixed(2);
    heart.style.setProperty("--scale", scale);

    // Random rotation
    const rotate = Math.floor(Math.random() * 360) + "deg";
    heart.style.setProperty("--rotate", rotate);

    // Staggered animation delay (like butterfly code)
    heart.style.animationDelay = (i * 0.05) + "s";

    container.appendChild(heart);

    // Remove after animation ends
    setTimeout(() => {
      heart.remove();
    }, 3500);
  }
}
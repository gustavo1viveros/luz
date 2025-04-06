const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

// Ajuste del tamaño del canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Estrellas
const stars = [];
const numStars = 200;

function createStar() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2 + 1, // Tamaño de las estrellas
    speed: Math.random() * 0.5 + 0.2 // Velocidad de parpadeo
  };
}

// Crear estrellas
for (let i = 0; i < numStars; i++) {
  stars.push(createStar());
}

// Dibujar estrellas
function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar canvas
  
  for (const star of stars) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
  }
}

// Mover estrellas (efecto parpadeo)
function updateStars() {
  for (const star of stars) {
    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0; // Reinicia la estrella cuando sale de la pantalla
    }
  }
}

// Animación
function animate() {
  drawStars();
  updateStars();
  requestAnimationFrame(animate);
}

animate();

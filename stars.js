// Aseguramos que el script se ejecuta una vez que la página está completamente cargada
window.addEventListener('load', function () {
    const canvas = document.getElementById('stars');
    const ctx = canvas.getContext('2d');
    let stars = [];
  
    // Ajustamos el tamaño del canvas al tamaño de la ventana
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  
    // Llamamos la función de redimensionado cuando la ventana cambia de tamaño
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();  // Ejecutamos la redimensión al cargar la página
  
    // Función para crear las estrellas
    function createStars(count) {
      stars = [];
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.2,  // Aseguramos que el radio de las estrellas sea mayor a 0.2
          alpha: Math.random(),
          delta: Math.random() * 0.02
        });
      }
    }
  
    // Animamos las estrellas
    function animateStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);  // Limpiamos el canvas en cada cuadro
      for (let star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
        star.alpha += star.delta;
        if (star.alpha <= 0 || star.alpha >= 1) star.delta = -star.delta;  // Hacemos que las estrellas parpadeen
      }
      requestAnimationFrame(animateStars);  // Volvemos a llamar a la función para el siguiente cuadro
    }
  
    createStars(150);  // Creamos 150 estrellas
    animateStars();  // Comenzamos la animación
  });  
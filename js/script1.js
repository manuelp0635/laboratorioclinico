// script.js
const slider = document.querySelector('.video-slider');
const videos = document.querySelectorAll('.video-item video');
let currentIndex = 0;

// Función para actualizar la posición del slider
function updateSlider() {
  const width = slider.offsetWidth;
  slider.style.transform = `translateX(-${currentIndex * width}px)`;
}

// Función para avanzar automáticamente al siguiente video
function playNextVideo() {
  videos[currentIndex].pause(); // Pausa el video actual
  currentIndex = (currentIndex + 1) % videos.length; // Avanza al siguiente índice (cíclico)
  updateSlider();
  videos[currentIndex].play(); // Reproduce el siguiente video
}

// Configurar eventos para cada video
videos.forEach((video, index) => {
  video.addEventListener('ended', playNextVideo); // Avanzar al siguiente video cuando termine
});

// Iniciar la reproducción del primer video
videos[currentIndex].play();

// Ajustar el slider al redimensionar la ventana
window.addEventListener('resize', updateSlider);

// ===============================
// JS Asesor
// ===============================
const asesorBtn = document.getElementById("asesorBtn");
const container = document.querySelector(".asesor-container");
const cerrarMsg = document.getElementById("cerrarMsg");
const mensajeMovil = document.getElementById("mensajeMovil");

if (asesorBtn) {
  asesorBtn.addEventListener("click", () => {
    container.classList.toggle("active");
  });
}

if (cerrarMsg) {
  cerrarMsg.addEventListener("click", () => {
    mensajeMovil.classList.add("oculto");
  });
}

// ===============================
// Navbar toggle
// ===============================
const navbarShowBtn = document.querySelector(".navbar-show-btn");
const navbarCollapseDiv = document.querySelector(".navbar-collapse");
const navbarHideBtn = document.querySelector(".navbar-hide-btn");

if (navbarShowBtn && navbarCollapseDiv && navbarHideBtn) {
  navbarShowBtn.addEventListener("click", () => {
    navbarCollapseDiv.classList.add("navbar-show");
  });
  navbarHideBtn.addEventListener("click", () => {
    navbarCollapseDiv.classList.remove("navbar-show");
  });
}

// ===============================
// Cambio de ícono de búsqueda según tamaño
// ===============================
function changeSearchIcon() {
  const winSize = window.matchMedia("(min-width: 1200px)");
  const searchIcon = document.querySelector(".search-icon img");
  if (searchIcon) {
    searchIcon.src = winSize.matches
      ? "images/search-icon.png"
      : "images/search-icon-dark.png";
  }
}

window.addEventListener("resize", changeSearchIcon);
changeSearchIcon();

// ===============================
// Evitar animaciones durante resize
// ===============================
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

// OPINION CLIENTES
document.getElementById("formOpinion").addEventListener("submit", function(e) {
  e.preventDefault();

  let nombre = document.getElementById("nombreOpinion").value;
  let calificacion = document.querySelector("input[name='calificacion']:checked").value;
  let opinion = document.getElementById("opinion").value;
  let mejorar = document.getElementById("mejorar").value;

  let mensaje = `📝 *Nueva Opinión de Cliente*%0A
  *Nombre:* ${nombre}%0A
  *Calificación:* ${calificacion} estrellas%0A
  *Opinión:* ${opinion}%0A
  *Puntos a mejorar:* ${mejorar}`;

  let url = `https://wa.me/573113212221?text=${mensaje}`;
  window.open(url, "_blank");

  this.reset();
});

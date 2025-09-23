// Aquí puedes manejar cosas como efectos, animaciones o extras
document.addEventListener("DOMContentLoaded", () => {
  console.log("JS cargado correctamente ✅");
});

// JS Asesor
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
// JS Asesor

// navbar toggling
const navbarShowBtn = document.querySelector('.navbar-show-btn');
const navbarCollapseDiv = document.querySelector('.navbar-collapse');
const navbarHideBtn = document.querySelector('.navbar-hide-btn');

navbarShowBtn.addEventListener('click', function(){
    navbarCollapseDiv.classList.add('navbar-show');
});
navbarHideBtn.addEventListener('click', function(){
    navbarCollapseDiv.classList.remove('navbar-show');
});

// changing search icon image on window resize
window.addEventListener('resize', changeSearchIcon);
function changeSearchIcon(){
    let winSize = window.matchMedia("(min-width: 1200px)");
    if(winSize.matches){
        document.querySelector('.search-icon img').src = "images/search-icon.png";
    } else {
        document.querySelector('.search-icon img').src = "images/search-icon-dark.png";
    }
}
changeSearchIcon();

// stopping all animation and transition
let resizeTimer;
window.addEventListener('resize', () =>{
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});

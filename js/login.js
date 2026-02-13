function login(){

const nombre = document.getElementById("user").value;
const rol = document.getElementById("rol").value;
const lab = "Lab Central";

const user = {nombre, rol, lab};

localStorage.setItem("user", JSON.stringify(user));

redirigirPorRol(rol);
}

function redirigirPorRol(rol){

const rutas = {
  admin:"layouts/admin.html",
  staff:"layouts/staff.html",
  paciente:"layouts/paciente.html"
};

window.location.replace(rutas[rol]);
}
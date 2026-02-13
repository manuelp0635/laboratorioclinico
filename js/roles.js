function generarMenu(){

const user = validarSesion();
const sidebar = document.querySelector(".sidebar");

sidebar.innerHTML = `<h4 class="text-center py-4">🔬 Plus Lab</h4>`;

const menus = {

admin:[
["📊 Dashboard","dashboard"],
["👥 Usuarios","usuarios"],
["📊 Reportes","reportes"],
["⚙️ Configuración","config"]
],

staff:[
["📊 Dashboard","dashboard"],
["📅 Citas","citas"],
["🧪 Pruebas","pruebas"],
["📊 Reportes","reportes"]
],

paciente:[
["📄 Mis Resultados","misResultados"]
]

};

menus[user.rol].forEach(item=>{

const a = document.createElement("a");
a.innerText = item[0];

a.onclick = ()=>showSection(item[1], a);

sidebar.appendChild(a);
});

/* LOGOUT GLOBAL */
const logoutBtn = document.createElement("a");
logoutBtn.innerText="🚪 Cerrar sesión";
logoutBtn.style.marginTop="auto";
logoutBtn.onclick=logout;

sidebar.appendChild(logoutBtn);
}
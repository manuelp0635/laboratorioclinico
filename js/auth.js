function validarSesion(){

const user = localStorage.getItem("user");

if(!user){
  window.location.replace("../login.html");
  return null;
}

return JSON.parse(user);
}
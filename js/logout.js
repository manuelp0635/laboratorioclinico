function logout(){

localStorage.removeItem("user");
sessionStorage.clear();

window.location.replace("../login.html");
}
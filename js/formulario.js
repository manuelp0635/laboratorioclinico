document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('labForm');
  const mensaje = document.getElementById('mensaje');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (!form.checkValidity()) {
      mensaje.textContent = "⚠️ Todos los campos son obligatorios y deben ser válidos.";
      mensaje.className = "mensaje error";
      return;
    }

    // Capturar datos
    const nombre = document.getElementById('nombre').value.trim();
    const cedula = document.getElementById('cedula').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const fecha = document.getElementById('fecha').value;
    const genero = document.getElementById('genero').value;
    const examen = document.getElementById('examen').value;
    const domicilio = document.getElementById('domicilio').value;

    // Mensaje para WhatsApp
    let texto = `Hola, nuevo registro en Plus Laboratorio Clínico:%0A
👤 Nombre: ${nombre}%0A
🆔 Cédula: ${cedula}%0A
📧 Correo: ${correo}%0A
📞 Teléfono: ${telefono}%0A
🎂 Fecha de nacimiento: ${fecha}%0A
⚧ Género: ${genero}%0A
🧪 Examen: ${examen}%0A
🚚 Servicio a domicilio: ${domicilio}`;

    // Número destino
    const telefonoWhatsApp = "573113212221";
    const url = `https://api.whatsapp.com/send?phone=${telefonoWhatsApp}&text=${texto}`;

    // Redirigir a WhatsApp
    window.open(url, "_blank");

    mensaje.textContent = "✅ Datos enviados correctamente. Se abrió WhatsApp para confirmar.";
    mensaje.className = "mensaje exito";

    form.reset();
  });
});

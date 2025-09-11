document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("labForm");
  const mensajeDiv = document.getElementById("mensaje");

  // Número de WhatsApp del laboratorio
  const numeroLaboratorio = "573113212221"; // <- cámbialo por el real

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Obtener valores del formulario
    const nombre = document.getElementById("nombre").value;
    const cedula = document.getElementById("cedula").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const fecha = document.getElementById("fecha").value;
    const genero = document.getElementById("genero").value;
    const examen = document.getElementById("examen").value;
    const domicilio = document.getElementById("domicilio").value;
    const fechaDomicilio = document.getElementById("fecha_domicilio").value || "No aplica";
    const direccion = document.getElementById("direccion").value || "No aplica";
    const referencia = document.getElementById("referencia").value || "No aplica";

    // Crear mensaje
    const mensaje = `🧾 *Nuevo servicio registrado* 🧾%0A
👤 Nombre: ${nombre}%0A
🪪 Cédula: ${cedula}%0A
📧 Correo: ${correo}%0A
📱 Teléfono: ${telefono}%0A
📅 Fecha de nacimiento: ${fecha}%0A
⚧ Género: ${genero}%0A
🧪 Examen: ${examen}%0A
🏠 Servicio domicilio: ${domicilio}%0A
📅 Fecha domicilio: ${fechaDomicilio}%0A
📍 Dirección: ${direccion}%0A
🗺️ Referencia: ${referencia}`;

    // Enlace a WhatsApp
    const url = `https://api.whatsapp.com/send?phone=${numeroLaboratorio}&text=${mensaje}`;

    // Abrir WhatsApp
    window.open(url, "_blank");

    // Confirmación en pantalla
    mensajeDiv.textContent = "✅ Preregistro enviado. El laboratorio recibirá tu solicitud por WhatsApp.";
    mensajeDiv.classList.add("exito");

    // Resetear formulario
    form.reset();
  });

  // Mostrar campos domicilio dinámicamente
  const domicilioSelect = document.getElementById("domicilio");
  const direccionField = document.getElementById("direccion-field");
  const referenciaField = document.getElementById("referencia-field");
  const fechaDomicilioField = document.getElementById("fecha-domicilio-field");

  domicilioSelect.addEventListener("change", () => {
    if (domicilioSelect.value === "Sí") {
      direccionField.style.display = "block";
      referenciaField.style.display = "block";
      fechaDomicilioField.style.display = "block";
    } else {
      direccionField.style.display = "none";
      referenciaField.style.display = "none";
      fechaDomicilioField.style.display = "none";
    }
  });
});

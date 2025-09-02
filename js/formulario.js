document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('labForm');
  const mensaje = document.getElementById('mensaje');
  const domicilioSelect = document.getElementById('domicilio');
  const direccionField = document.getElementById('direccion-field');
  const referenciaField = document.getElementById('referencia-field');
  const direccionInput = document.getElementById('direccion');
  const referenciaInput = document.getElementById('referencia');

  // Mostrar/ocultar campos dirección y referencia
  domicilioSelect.addEventListener("change", () => {
    if (domicilioSelect.value === "Sí") {
      direccionField.style.display = "block";
      referenciaField.style.display = "block";
      direccionInput.required = true;
      referenciaInput.required = true;
    } else {
      direccionField.style.display = "none";
      referenciaField.style.display = "none";
      direccionInput.required = false;
      referenciaInput.required = false;
      direccionInput.value = "";
      referenciaInput.value = "";
    }
  });

  // Envío de formulario
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
    const domicilio = domicilioSelect.value;
    const direccion = domicilio === "Sí" ? direccionInput.value.trim() : "N/A";
    const referencia = domicilio === "Sí" ? referenciaInput.value.trim() : "N/A";

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

    if (domicilio === "Sí") {
      texto += `%0A🏠 Dirección: ${direccion}%0A📍 Punto de referencia: ${referencia}`;
    }

    // Enviar a WhatsApp
    const telefonoWhatsApp = "573113212221";
    const url = `https://api.whatsapp.com/send?phone=${telefonoWhatsApp}&text=${texto}`;
    window.open(url, "_blank");

    // Mensaje en pantalla
    mensaje.textContent = "✅ Datos enviados correctamente. Se abrió WhatsApp para confirmar.";
    mensaje.className = "mensaje exito";

    // Resetear formulario
    form.reset();
    direccionField.style.display = "none";
    referenciaField.style.display = "none";
  });
});


/* Oculta y mostrar direccion + punto de referencia */

document.addEventListener("DOMContentLoaded", () => {
  const domicilioSelect = document.getElementById('domicilio');
  const direccionField = document.getElementById('direccion-field');
  const referenciaField = document.getElementById('referencia-field');
  const direccionInput = document.getElementById('direccion');
  const referenciaInput = document.getElementById('referencia');

  domicilioSelect.addEventListener("change", () => {
    if (domicilioSelect.value === "Sí") {
      direccionField.style.display = "block";
      referenciaField.style.display = "block";
      direccionInput.required = true;
      referenciaInput.required = true;
    } else {
      direccionField.style.display = "none";
      referenciaField.style.display = "none";
      direccionInput.required = false;
      referenciaInput.required = false;
      direccionInput.value = "";
      referenciaInput.value = "";
    }
  });
});

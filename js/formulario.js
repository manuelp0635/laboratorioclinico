/* Script que cierra el modal y redirige a WhatsApp después de 3 segundos */
document.addEventListener("DOMContentLoaded", function () {
  const modalEl = document.getElementById("preregistroModal");

  modalEl.addEventListener("shown.bs.modal", function () {
    setTimeout(() => {
      // Cerrar modal
      const modal = bootstrap.Modal.getInstance(modalEl);
      modal.hide();

      // Redirección a WhatsApp
      window.location.href = "https://wa.me/+573113212221";
    }, 3000); // 3 segundos
  });
});



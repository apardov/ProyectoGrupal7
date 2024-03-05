document.addEventListener("DOMContentLoaded", function () {
  // Obtener el formulario y el botón de confirmación
  let shippingForm = document.getElementById("shipping-form");
  let confirmButton = document.getElementById("confirm-button");

  shippingForm.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  confirmButton.addEventListener("click", function () {
    let confirmationModal = new bootstrap.Modal(
      document.getElementById("confirmationModal")
    );
    confirmationModal.show();

    setTimeout(function () {
      confirmationModal.hide();
      window.location.href = "./products.html";
    }, 5000);
  });
});

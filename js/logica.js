const emailUserFake = "prueba01@gmail.com";
const passwordUserFake = "Prueba01";

const form = document.querySelector("#loginForm");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValue = email.value;
  const passwordValue = password.value;

  if (emailValue === emailUserFake && passwordValue === passwordUserFake) {
    window.location.href = "./pages/products.html";
  } else {
    const alert = document.createElement("div");
    alert.classList.add(
      "alert",
      "alert-danger",
      "pt-2",
      "pb-2",
      "mt-2",
      "mb-2",
      "text-center",
      "w-100",
      "text-dark"
    );
    alert.textContent = "Email o Password Incorrectos";
    password.parentNode.insertBefore(alert, password.nextSibling);
  }
});

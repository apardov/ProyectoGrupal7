let plusButtons = document.querySelectorAll(".plus");
let minusButtons = document.querySelectorAll(".minus");
let quantityInputs = document.querySelectorAll(".quantity");

console.log("plusButtons:", plusButtons);
console.log("minusButtons:", minusButtons);
console.log("quantityInputs:", quantityInputs);

plusButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    quantityInputs[index].value = parseInt(quantityInputs[index].value) + 1;
    updateCart();
  });
});

minusButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (parseInt(quantityInputs[index].value) > 0) {
      quantityInputs[index].value = parseInt(quantityInputs[index].value) - 1;
      updateCart();
    }
  });
});

function updateCart() {
  let total = 0;
  let totalQuantity = 0;
  let cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  quantityInputs.forEach((input, index) => {
    let quantity = parseInt(input.value);
    totalQuantity += quantity;
    if (quantity > 0) {
      let product = input.closest(".card-body");
      let productName = product.querySelector(".card-title").innerText;
      let productPriceElement = product.querySelector(".price");
      // Se cambió el método 'slice(1)' por 'replace("$", "")' para obtener el precio sin el símbolo '$'
      let productPrice = productPriceElement
        ? parseFloat(productPriceElement.innerText.replace("$", ""))
        : 0; // Se elimina el símbolo '$' para obtener solo el número
      let itemTotal = quantity * productPrice;
      total += itemTotal;
      cartItems.innerHTML += `
        <li class="list-group-item">
          ${quantity} x ${productName}: $${itemTotal.toFixed(2)}
        </li>
      `;
    }
  });

  document.getElementById(
    "cart-summary"
  ).innerText = `${totalQuantity} Producto${totalQuantity !== 1 ? "s" : ""}`;
  document.getElementById("cart-total").innerText = `Total: $${total.toFixed(
    2
  )}`;
}

updateCart();
































// let cartProds = [];

// function addToCart() {
//     let prod = {
//         id: "",
//         name: "",
//         price: "",
//         quantity: 5

//     }
//     let checkProdInCart = cartProds.find(function (cartProd) {
//         return cartProd.id === prod.id;
//     });
//     if (checkProdInCart) {
//         checkProdInCart.quantity++;
//     } else {
//         cartProds.push(prod);
//     }
//     displayCart()
// }
// function upQuantity(productId, quantity) {
//     let prod = cartProds.find(function (cartProd) {
//       return cartProd.id === productId;
//     });
  
//     if (prod) {
//       prod.quantity = quantity;
//     }
//     displayCart();
// }

// function moveProd(productId) {
//     cartProds = cartItems.filter(function (cartProd) {
//       return cartProd.id !== productId;
//     });
//     displayCart();
// }


// // Function to display the cart
// function displayCart() {
//     let cartComponent = document.getElementById("cart-prods");
//     cartComponent.innerHTML = "";
  
//     if (cartProds.length === 0) {
//       cartComponent.innerHTML = "<tr><td colspan='3'>Add Products To Your Cart.</td></tr>";
//       return;
//     }
  
//     for (let i = 0; i < cartProds.length; i++) {
//       let item = cartProds[i];
  
//       var row = document.createElement("tr");
  
//       var nameCell = document.createElement("td");
//       nameCell.innerHTML = prod.name;
//       row.appendChild(nameCell);
  
//       var priceCell = document.createElement("td");
//       priceCell.innerHTML = "$" + prod.price;
//       row.appendChild(priceCell);
  
//       var quantityCell = document.createElement("td");
//       var quantityInput = document.createElement("input");
//       quantityInput.type = "number";
//       quantityInput.min = 1;
//       quantityInput.value = prod.quantity;
//       quantityInput.addEventListener("change", function (event) {
//         var productId = prod.id;
//         var newQuantity = parseInt(event.target.value);
//         updateQuantity(productId, newQuantity);
//       });
//       quantityCell.classList.add("quantity");
//       quantityCell.appendChild(quantityInput);
//       row.appendChild(quantityCell);
  
//       var removeCell = document.createElement("td");
//       var removeButton = document.createElement("button");
//       removeButton.textContent = "Remove";
//       removeButton.addEventListener("click", function () {
//         var productId = prod.id;
//         removeItem(productId);
//       });
//       removeCell.appendChild(removeButton);
//       row.appendChild(removeCell);
  
//       cartElement.appendChild(row);
//     }
//   }

  
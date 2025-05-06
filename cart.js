document.addEventListener("DOMContentLoaded", function () {
  var cart = JSON.parse(localStorage.getItem("cart")) || {};
  var productList = JSON.parse(localStorage.getItem("productList")) || [];
  var cartContainer = document.getElementById("cart-items");
  var totalItemsEl = document.getElementById("total-items");
  var totalPriceEl = document.getElementById("total-price");
  var confirmBtn = document.getElementById("confirm-btn");
  var clearBtn = document.getElementById("clear-btn");

  function renderCart() {
    cartContainer.innerHTML = "";
    var totalItems = 0;
    var totalPrice = 0;

    for (var id in cart) {
      var quantity = cart[id];
      var product = productList.find(function (p) {
        return p.id == id;
      });
      if (!product || quantity === 0) continue;

      var div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML =
        "<h3>" + product.name + "</h3>" +
        "<p>Price: ₹" + product.price + "</p>" +
        "<p>Quantity: " + quantity + "</p>" +
        "<p>Subtotal: ₹" + (product.price * quantity) + "</p>";
      cartContainer.appendChild(div);

      totalItems += quantity;
      totalPrice += product.price * quantity;
    }

    totalItemsEl.textContent = totalItems;
    totalPriceEl.textContent = "₹" + totalPrice;
  }

  confirmBtn.addEventListener("click", function () {
    var name = document.getElementById("user-name").value.trim();
    var address = document.getElementById("user-address").value.trim();
    var phone = document.getElementById("user-phone").value.trim();
    var email = document.getElementById("user-email").value.trim();

    if (!name || !address || !phone || !email) {
      alert("Please fill in all your details before confirming.");
      return;
    }

    if (Object.keys(cart).length === 0) {
      alert("Cart is empty!");
      return;
    }

    var totalPrice = 0;
    var receiptNumber = Math.floor(1000000000 + Math.random() * 9000000000);

    var receiptHTML = "<h2>Receipt</h2>" +
      "<p><strong>Receipt No:</strong> " + receiptNumber + "</p>" +
      "<p><strong>Name:</strong> " + name + "</p>" +
      "<p><strong>Address:</strong> " + address + "</p>" +
      "<p><strong>Phone:</strong> " + phone + "</p>" +
      "<p><strong>Email:</strong> " + email + "</p>" +
      "<h3>Items:</h3><ul>";

    for (var id in cart) {
      var quantity = cart[id];
      var product = productList.find(function (p) {
        return p.id == id;
      });
      if (!product) continue;

      var subtotal = product.price * quantity;
      receiptHTML += "<li>" + product.name + " - " + quantity + " x ₹" + product.price + " = ₹" + subtotal + "</li>";
      totalPrice += subtotal;
    }

    receiptHTML += "</ul><p><strong>Total Price: ₹" + totalPrice + "</strong></p>";
    document.getElementById("receipt-container").innerHTML = receiptHTML;

    var successMsg = document.getElementById("purchase-success");
    successMsg.style.display = "block";
    setTimeout(function () {
      successMsg.style.display = "none";
    }, 3000);

    emailjs.send("service_glx45zr", "template_btck0qm", {
      email: email,
      user_name: name,
      message: "Order confirmed for ₹" + totalPrice + ". Receipt No: " + receiptNumber
    }).then(function () {
      console.log("Email sent!");
    }).catch(function (error) {
      console.error("Failed to send email:", error);
    });
  });

  clearBtn.addEventListener("click", function () {
    localStorage.removeItem("cart");
    cart = {};
    renderCart();
    document.getElementById("receipt-container").innerHTML = "";
  });

  renderCart();
});
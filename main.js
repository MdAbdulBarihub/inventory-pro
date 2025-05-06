document.addEventListener("DOMContentLoaded", () => {
  fetch("/products")
    .then(response => response.json())
    .then(products => {
      const productList = document.getElementById("productList");
      if (productList) {
        productList.innerHTML = "";
        products.forEach(product => {
          let li = document.createElement("li");
          li.textContent = product.name;
          productList.appendChild(li);
        });
      }
    })
    .catch(error => console.error("Error fetching products:", error));
});

function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}

document.getElementById("footer-feedback-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for your feedback! We appreciate you.");
  this.reset();
});

const productsContainer = document.getElementById("products");
const totalQtySpan = document.getElementById("totalQty");
const totalPriceSpan = document.getElementById("totalPrice");

const products = [
  { id: 1, name: "processor(cpu)", price: 6800, qty: 0 },
  { id: 2, name: "Motherboard", price: 4500, qty: 0 },
  { id: 3, name: "8GB Ram", price: 1500, qty: 0 },
  { id: 4, name: "SSD 256GB", price: 2200, qty: 0 },
  { id: 5, name: "power supply", price: 1200, qty: 0 },
  { id: 6, name: "graphics card", price: 9800, qty: 0 },
  { id: 7, name: "keyboard", price: 600, qty: 0 },
  { id: 8, name: "cabinet", price: 2000, qty: 0 }
];

function renderProducts() {
  productsContainer.innerHTML = "";
  products.forEach((product, index) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    productDiv.innerHTML = `
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <div class="controls">
        <button onclick="changeQty(${index}, -1)">-</button>
        <span id="qty-${index}">${product.qty}</span>
        <button onclick="changeQty(${index}, 1)">+</button>
      </div>
    `;
    productsContainer.appendChild(productDiv);
  });
}

function changeQty(index, delta) {
  const totalQty = products.reduce((sum, p) => sum + p.qty, 0);
  if (delta === 1 && totalQty >= 200) {
    alert("Maximum 200 items allowed in total!");
    return;
  }

  products[index].qty += delta;
  if (products[index].qty < 0) products[index].qty = 0;

  document.getElementById("qty-" + index).innerText = products[index].qty;
  updateSummary();
}

function updateSummary() {
  const totalQty = products.reduce((sum, p) => sum + p.qty, 0);
  const totalPrice = products.reduce((sum, p) => sum + p.qty * p.price, 0);
  totalQtySpan.innerText = totalQty;
  totalPriceSpan.innerText = totalPrice;
}
renderProducts();
updateSummary();
document.addEventListener('DOMContentLoaded', function () {
  const overlay = document.getElementById('menuOverlay');
  const burger = document.getElementById('burger'); // You missed this line!

  if (burger && overlay) {
    burger.addEventListener('click', () => {
      overlay.style.display = (overlay.style.display === 'flex') ? 'none' : 'flex';
    });
  }

  // ======= IMAGE SLIDER =======
  const sliderImage = document.getElementById('sliderImage');
  let images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
  let currentIndex = 0;

  function showImage(index) {
    if (sliderImage) {
      sliderImage.src = images[index];
    }
  }

  window.prevImage = function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  };

  window.nextImage = function () {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  };

  showImage(currentIndex);

  // ======= STAR RATING =======
  const stars = document.querySelectorAll('.stars span');

  window.rate = function (rating) {
    stars.forEach((star, index) => {
      star.classList.toggle('active', index < rating);
    });
  };
});
document.getElementById("search-input").addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    const query = this.value.trim();
    if (query !== "") {
      // Optional: store the search for use on products page
      localStorage.setItem("searchQuery", query);
      // Redirect no matter what the input is
      window.location.href = "products.html";
    }
  }
});
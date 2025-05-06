
const products = [
  { id: 1, name: "Processor (CPU)", price: 6800 },
  { id: 2, name: "Motherboard", price: 4500 },
  { id: 3, name: "RAM 8GB", price: 2800 },
  { id: 4, name: "SSD 256GB", price: 3200 },
  { id: 5, name: "Graphics Card", price: 9500 },
  { id: 6, name: "Power Supply", price: 2100 },
  { id: 7, name: "Cabinet", price: 1800 },
  { id: 8, name: "Monitor", price: 6200 },
  { id: 9, name: "Keyboard", price: 600 },
  { id: 10, name: "Mouse", price: 400 },
  { id: 11, name: "UPS", price: 2200 },
  { id: 12, name: "Wi-Fi Adapter", price: 700 },
  { id: 13, name: "Speakers", price: 1200 },
  { id: 14, name: "Webcam", price: 1500 },
  { id: 15, name: "Thermal Paste", price: 150 },
  { id: 16, name: "Cooling Fan", price: 800 },
  { id: 17, name: "LED Strip", price: 250 },
  { id: 18, name: "HDD 1TB", price: 3200 },
  { id: 19, name: "NVMe SSD 500GB", price: 4800 },
  { id: 20, name: "Bluetooth Adapter", price: 500 },
  { id: 21, name: "Laptop Stand", price: 900 },
  { id: 22, name: "Cable Organizer", price: 150 },
  { id: 23, name: "HDMI Cable", price: 250 },
  { id: 24, name: "DisplayPort Cable", price: 400 },
  { id: 25, name: "Surge Protector", price: 700 },
  { id: 26, name: "Microphone", price: 1100 },
  { id: 27, name: "Tripod", price: 800 },
  { id: 28, name: "Headphones", price: 2500 },
  { id: 29, name: "Gamepad", price: 1800 },
  { id: 30, name: "VR Headset", price: 14000 },
  { id: 31, name: "Projector", price: 9000 },
  { id: 32, name: "Smart Plug", price: 1200 },
  { id: 33, name: "External HDD", price: 5000 },
  { id: 34, name: "Router", price: 2800 },
  { id: 35, name: "Network Switch", price: 3100 }
];

const productArray = [
    { id: 1, name: "Processor (CPU)", price: 6800, image: "images/linex wallpaper.jpg" },
    { id: 2, name: "Motherboard", price: 4500, image: "images./gun_girl.png" },
    { id: 3, name: "RAM 8GB", price: 2800, image: "images/ram.jpg" },
  { id: 5, name: "Graphics Card", price: 9500 , image: "images/linex wallpaper.jpg" },
  { id: 6, name: "Power Supply", price: 2100 , image: "images/linex wallpaper.jpg" },
  { id: 7, name: "Cabinet", price: 1800 , image: "images/linex wallpaper.jpg" },
  { id: 8, name: "Monitor", price: 6200 , image: "images/linex wallpaper.jpg" },
  { id: 9, name: "Keyboard", price: 600 , image: "images/linex wallpaper.jpg" },
  { id: 10, name: "Mouse", price: 400 , image: "images/linex wallpaper.jpg" },
  { id: 11, name: "UPS", price: 2200 , image: "images/linex wallpaper.jpg" },
  { id: 12, name: "Wi-Fi Adapter", price: 700 , image: "images/linex wallpaper.jpg" },
  { id: 13, name: "Speakers", price: 1200 , image: "images/linex wallpaper.jpg" },
  { id: 14, name: "Webcam", price: 1500 , image: "images/linex wallpaper.jpg" },
  { id: 15, name: "Thermal Paste", price: 150 , image: "images/linex wallpaper.jpg" },
  { id: 16, name: "Cooling Fan", price: 800 , image: "images/linex wallpaper.jpg" },
  { id: 17, name: "LED Strip", price: 250 , image: "images/linex wallpaper.jpg" },
  { id: 18, name: "HDD 1TB", price: 3200 , image: "images/linex wallpaper.jpg" },
  { id: 19, name: "NVMe SSD 500GB", price: 4800 , image: "images/linex wallpaper.jpg" },
  { id: 20, name: "Bluetooth Adapter", price: 500, image: "images/linex wallpaper.jpg" }, 
  { id: 21, name: "Laptop Stand", price: 900 , image: "images/linex wallpaper.jpg" },
  { id: 22, name: "Cable Organizer", price: 150, image: "images/linex wallpaper.jpg" }, 
  { id: 23, name: "HDMI Cable", price: 250, image: "images/linex wallpaper.jpg" }, 
  { id: 24, name: "DisplayPort Cable", price: 400 , image: "images/linex wallpaper.jpg" },
  { id: 25, name: "Surge Protector", price: 700, image: "images/linex wallpaper.jpg" }, 
  { id: 26, name: "Microphone", price: 1100 , image: "images/linex wallpaper.jpg" },
  { id: 27, name: "Tripod", price: 800, image: "images/linex wallpaper.jpg" }, 
  { id: 28, name: "Headphones", price: 2500 , image: "images/linex wallpaper.jpg" },
  { id: 29, name: "Gamepad", price: 1800 , image: "images/linex wallpaper.jpg" },
  { id: 30, name: "VR Headset", price: 14000 , image: "images/linex wallpaper.jpg" },
  { id: 31, name: "Projector", price: 9000, image: "images/linex wallpaper.jpg" }, 
  { id: 32, name: "Smart Plug", price: 1200 , image: "images/linex wallpaper.jpg" },
  { id: 33, name: "External HDD", price: 5000, image: "images/linex wallpaper.jpg" }, 
  { id: 34, name: "Router", price: 2800, image: "images/linex wallpaper.jpg" }, 
  { id: 35, name: "Network Switch", price: 3100, image: "images/linex wallpaper.jpg" }, 
];

localStorage.setItem("productList", JSON.stringify(productArray));
let cart = JSON.parse(localStorage.getItem("cart")) || {};
let totalQty = 0;
let totalPrice = 0;

function renderProducts() {
  const container = document.getElementById("productsContainer");
  container.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const div = document.createElement("div");
    div.className = "product";

    div.innerHTML = `
  <h3>${product.name}</h3>
  <p>₹${product.price}</p>
  <div class="controls">
    <button onclick="changeQty(${product.id}, -1)">-</button>
    <span id="qty-${product.id}">${cart[product.id] || 0}</span>
    <button onclick="changeQty(${product.id}, 1)">+</button>
  </div>
  <div class="detail-hover">Details
    <div class="detail-popup">
      <img src="${product.image}" alt="${product.name}">
    </div>
  </div>
`;

    container.appendChild(div);
  }
}

function changeQty(id, delta) {
  if (!cart[id]) cart[id] = 0;
  cart[id] += delta;
  if (cart[id] < 0) cart[id] = 0;
  localStorage.setItem("cart", JSON.stringify(cart));

  document.getElementById("qty-" + id).textContent = cart[id];

  updateSummary();
  showSuccess();
}

function updateSummary() {
  totalQty = 0;
  totalPrice = 0;

  for (let id in cart) {
    const product = products.find(function (p) {
      return p.id === parseInt(id);
    });
    totalQty += cart[id];
    totalPrice += cart[id] * product.price;
  }

  document.getElementById("totalQty").textContent = totalQty;
  document.getElementById("totalPrice").textContent = totalPrice;
}

function showSuccess() {
  const message = document.getElementById("successMessage");
  message.textContent = "Purchase Successful!";
  message.style.opacity = 1;

  setTimeout(function () {
    message.style.opacity = 0;
  }, 2000);
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  updateSummary(); // This ensures totals also reflect localStorage
});

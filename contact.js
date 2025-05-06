// Generate random captcha
function generateCaptcha() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let captcha = "";
  for (let i = 0; i < 5; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById("captcha-box").textContent = captcha;
  return captcha;
}

let currentCaptcha = generateCaptcha();

document.getElementById("messageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const userInput = document.getElementById("captcha-input").value.trim().toUpperCase();
  const response = document.getElementById("form-response");

  if (userInput !== currentCaptcha) {
    response.textContent = "Incorrect characters. Please match the code above.";
    response.className = "error";
    currentCaptcha = generateCaptcha();
    return;
  }

  response.textContent = "Thank you for contacting us. We will reach out to you within 24 hours.";
  response.className = "success";
  this.reset();
  currentCaptcha = generateCaptcha();
});
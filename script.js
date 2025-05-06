let generatedCode = '';

function generateCode() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  generatedCode = '';
  for (let i = 0; i < 6; i++) {
    generatedCode += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById("codeDisplay").textContent = generatedCode;
  document.getElementById("codeInput").value = "";
  document.getElementById("message").textContent = "";
}

function checkCode() {
  const name = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const userCode = document.getElementById("codeInput").value.trim();
  const message = document.getElementById("message");

  if (!name || !pass || !userCode) {
    message.style.color = "red";
    message.textContent = "Please fill in all fields.";
    return;
  }

  if (userCode === generatedCode) {
    message.style.color = "green";
    message.textContent = "Login successful!";
    setTimeout(() => {
      window.location.href = "main.html"; // Adjust to your next page
    }, 1500);
  } else {
    message.style.color = "red";
    message.textContent = "Incorrect verification code.";
    generateCode();
  }
}

function togglePassword() {
  const pwd = document.getElementById("password");
  pwd.type = pwd.type === "password" ? "text" : "password";
}
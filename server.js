const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Keyboard" },
    { id: 3, name: "Mouse" },
    { id: 4, name: "Monitor" }
];

app.get("/products", (req, res) => {
    res.json(products);
});
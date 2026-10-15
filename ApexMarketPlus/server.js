const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());

// Serve static files from 'public' (CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Dummy products list for API
const products = [
    { id: 1, name: "Wireless Gaming Headset", category: "Audio", price: 89.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80" },
    { id: 2, name: "Mechanical RGB Keyboard", category: "Gaming", price: 129.99, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=500&q=80" },
    { id: 3, name: "Smart Fitness Watch", category: "Wearables", price: 199.99, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80" }
];

// API Routes
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Serve HTML Pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/cart', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'cart.html'));
});

app.get('/product', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'product.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'register.html'));
});

app.listen(PORT, () => {
    console.log(`ApexMarket server running on http://localhost:${PORT}`);
});
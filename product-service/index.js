const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/productServiceDB')
.then(() => console.log('MongoDB connected for Product Service'))
.catch(err => console.error('MongoDB connection error:', err));

// Use product routes
app.use('/products', productRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Product Service running on port ${PORT}`);
});

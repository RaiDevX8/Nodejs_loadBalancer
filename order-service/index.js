const express = require('express');
const mongoose = require('mongoose');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
const PORT = process.env.PORT || 3003;

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/orderServiceDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected for Order Service'))
.catch(err => console.error('MongoDB connection error:', err));

// Use order routes
app.use('/orders', orderRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Order Service running on port ${PORT}`);
});

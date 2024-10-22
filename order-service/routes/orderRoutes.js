const express = require('express');
const {
    getOrders,
    createOrder,
    getOrderById,
    updateOrder,
    deleteOrder,
} = require('../controllers/orderController');

const router = express.Router();

// Define order routes
router.get('/', getOrders); // Get all orders
router.post('/', createOrder); // Create a new order
router.get('/:id', getOrderById); // Get an order by ID
router.put('/:id', updateOrder); // Update an order
router.delete('/:id', deleteOrder); // Delete an order

module.exports = router;

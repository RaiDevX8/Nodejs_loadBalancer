const express = require('express');
const {
    getProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct,
} = require('../controllers/productController');

const router = express.Router();

// Define product routes
router.get('/', getProducts); // Get all products
router.post('/', createProduct); // Create a new product
router.get('/:id', getProductById); // Get a product by ID
router.put('/:id', updateProduct); // Update a product
router.delete('/:id', deleteProduct); // Delete a product

module.exports = router;

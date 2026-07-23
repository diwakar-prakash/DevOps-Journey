const express = require("express");

const route = express.Router();

const {
    getProduct,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/product.controller.js');

route.get('/', getProducts);
route.get('/:id', getProduct);
route.post('/', createProduct);
route.put('/:id', updateProduct);
route.delete('/:id', deleteProduct);

module.exports = route;
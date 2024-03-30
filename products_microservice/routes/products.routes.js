const express = require('express');
const router = express.Router();
const Products = require('../controllers/products.controller');

router
    .route('/all')
    .get(Products.getProducts);

router
    .route('/search')
    .get(Products.searchProducts);

router
    .route('/get/:id')
    .get(Products.getProduct);

module.exports = router;
const express = require('express');
const router = express.Router();
const Orders = require('../controllers/orders.controller');
const Auth = require('../middlewares/auth.middleware');

router
    .route('/')
    .get(Auth.verifyToken, Orders.getOrders)

module.exports = router;
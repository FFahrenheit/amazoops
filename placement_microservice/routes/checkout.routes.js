const express = require('express');
const router = express.Router();
const Checkout = require('../controllers/checkout.controller');
const Auth = require('../middlewares/auth.middleware');

router
    .route('/')
    .post(Auth.verifyToken, Checkout.checkout)

module.exports = router;
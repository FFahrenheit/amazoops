const express = require('express');
const router = express.Router();
const Users = require('../controllers/users.controller');

router
    .route('/')
    .post(Users.createUser)

router
    .route('/login')
    .post(Users.login)

module.exports = router;
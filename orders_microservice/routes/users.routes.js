const express = require('express');
const router = express.Router();
const Users = require('../controllers/users.controller');
const Auth = require('../middlewares/auth.middleware');

router
    .route('/')
    .post(Users.createUser)

router
    .route('/login')
    .post(Users.login)

router
    .route('/session')
    .get(Auth.verifyToken, Users.getSession)

module.exports = router;
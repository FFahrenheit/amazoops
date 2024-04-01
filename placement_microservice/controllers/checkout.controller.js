const db = require('../utils/database');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

exports.checkout = async(req, res) => {
    return res.status(200).send({
        success: true,
        data: 'Funcionando'
    });
}
const db = require('../utils/database');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

exports.createUser = async(req, res) => {
    try {
        const { username, password, name } = req.body;
        const user = {
            type: 'user',
            username, 
            password,
            name
        };
        if (!user['username'] || !user['password']) {
            return res.json(401).send({
                success: false,
                error: 'Username and password are required'
            });
        }
        user['password'] = crypto.createHmac('sha256', process.env.HASH_KEY).update(user['password']).digest('hex');
        const dbUser = await db.insert(user, 'user:' + user['username']);
        user.id = dbUser.id;
        delete user['password'];
        return res.status(200).send({
            success: true,
            data: user
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).send({
            success: false,
            error: error.message || error
        });
    }
}

exports.login = async(req, res) => {
    try {
        const username = req.bodyString('username');
        const password = req.bodyString('password');
        if (!username || !password) {
            return res.json(401).send({
                success: false,
                error: 'Username and password are required'
            });
        }
        const passwordHash = crypto.createHmac('sha256', process.env.HASH_KEY).update(password).digest('hex');
        console.log(username, passwordHash);
        const dbUser = await db.find({
            'type': 'user',
            'username': username, 
            'password': passwordHash
        }, { 
            fields: ['_id', 'username', 'name'] 
        });
        if (dbUser.length !== 1) {
            return res.status(404).send({
                success: false,
                error: 'User could not be found'
            });    
        }
        const token = jwt.sign(dbUser[0], process.env.HASH_KEY);
        dbUser[0].token = token;
        return res.status(200).send({
            success: true,
            data: dbUser[0]
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).send({
            success: false,
            error: error.message || error
        });
    }
}
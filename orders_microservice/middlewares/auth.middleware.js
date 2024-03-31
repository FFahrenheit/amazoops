const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
    try {
        const token = req.headers['authorization']?.split(" ")[1];
        if (!token) {
            return res.status(401).send({
                success: false,
                error: 'Authorization Token is required'
            });
        }
        const user = jwt.verify(token, process.env.HASH_KEY);
        req.user = user;
        next();
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            success: false,
            error: error.message || error
        });
    }
};
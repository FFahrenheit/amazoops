const db = require('../utils/database');

exports.getOrders = async(req, res) => {
    try {
        const username = req.user['username'];
        const orders = await db.find({
            'type': 'order',
            'user': username
        });
        console.log(orders);
        return res.status(200).send({
            success: true,
            data: orders
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).send({
            success: false,
            error: error.message || error
        });
    }
};
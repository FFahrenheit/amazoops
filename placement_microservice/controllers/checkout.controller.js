const db = require('../utils/database');
const Transactions = require('./transactions.producer.controller');

exports.checkout = async(req, res) => {
    try {
        const order = {
            type: 'order',
            status: 'En proceso',
            user: req.user.username,
            products: req.body.products,
            address: req.bodyString('address'),
            date: new Date()
        };
        const payment = req.body.payment;
        let total = 0;
        order.products = order.products.map(product => ({
            _id: product._id,
            name: product.name,
            image: product.image,
            price: product.price,
            seller: product.seller,
            type: product.type
        })).reduce((arr, product) => {
            const index = arr.findIndex(p => p._id == product._id);
            if (index === -1) {
                product.total = product.price;
                product.quantity = 1;
                arr.push(product);
            } else {
                arr[index].total += product.price;
                arr[index].quantity += 1;
            }
            total += product.price;
            return arr;
        }, []);
        order.total = total;

        if (!order['products'] || !payment || !order['address']) {
            return res.json(401).send({
                success: false,
                error: 'Incomplete order'
            });
        }
        const response = await db.insert(order);
        const transaction = {
            order: response.id,
            payment
        };
        Transactions.startTransaction(transaction);
        
        return res.status(200).send({
            success: true,
            data: {
                id: response.id
            }
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            success: false,
            error: error.message || error
        });
    }
}
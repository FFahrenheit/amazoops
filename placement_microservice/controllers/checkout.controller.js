const db = require('../utils/database');

exports.checkout = async(req, res) => {
    try {
        const order = {
            type: 'order',
            user: req.user.username,
            products: req.body.products,
            address: req.bodyString('address')
        };
        const payment = req.body.payment;
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
                arr[index].price += product.price;
                arr[index].quantity += 1;
            }
            return arr;
        }, []);

        if (!order['products'] || !payment || !order['address']) {
            return res.json(401).send({
                success: false,
                error: 'Incomplete order'
            });
        }
        // Insert order -- to be done
        // const response = await db.insert(order);
        console.log(order);
        
        return res.status(200).send({
            success: true,
            data: 'saved'
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            success: false,
            error: error.message || error
        });
    }
}
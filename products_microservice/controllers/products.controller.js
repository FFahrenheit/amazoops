const db = require('../utils/database');

exports.getProducts = async(req, res) => {
    try {
        const products = await db.find({
            'type': 'product'
        });
        return res.status(200).send({
            success: true,
            data: products
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).send({
            success: false,
            error
        });
    }
};

exports.searchProducts = async(req, res) => {
    try {
        // Sanitize query
        const query = req.query['query'].replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        // Get couchdb query
        const params = query.split(' ').reduce((arr, text) => {
            const searchRegex = `(?i).*${text}.*`;
            arr.push({ 'name' : { '$regex': searchRegex } });
            arr.push({ 'description' : { '$regex': searchRegex } })
            arr.push({ 'seller' : { '$regex': searchRegex } })
            return arr;
        }, []);
        const products = await db.find({
            'type': 'product',
            '$or': params
        });
        return res.status(200).send({
            success: true,
            data: products
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).send({
            success: false,
            error
        });
    }
};

exports.getProduct = async(req, res) => {
    try {
        const id = req.params.id;
        const product = await db.get(id);
        if (!product) {
            return res.status(404).send({
                success: false,
                error: 'Not found'
            });
        }
        return res.status(200).send({
            success: true,
            data: product
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).send({
            success: false,
            error
        });
    }
};
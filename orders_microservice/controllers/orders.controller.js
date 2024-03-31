exports.getOrders = (req, res) => {
    // TODO: Query user's orders
    return res.status(200).send({
        success: true,
        data: [ req.user ]
    });
};
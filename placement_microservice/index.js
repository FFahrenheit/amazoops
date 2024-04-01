// docker build . -t node-api-orders:latest
// docker run --env-file=./.env node-api-orders:latest -p 3302:3002

require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT || 3303;

app.use(express.urlencoded( { extended: true }));
app.use(express.json());
app.use(require('sanitize').middleware);
app.set('trust proxy', true);

app.use((req, res, next) => {
    const ip = req.ip.substring(req.ip.lastIndexOf(':') + 1);
    console.table([{ Timestamp: new Date().toLocaleString(), Method: req.method, Request: req.originalUrl, Client: ip }]);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});

const checkoutRoutes = require('./routes/checkout.routes');


app.use('/api/checkout', checkoutRoutes);

app.route('/')
.get((req, res) => {
    return res.json({
        success: true,
        data: new Date().toISOString(),
        message: `Placement microservice running: ${process.env.NODE_ENV}`
    });
});

app.listen(port, () => {
    console.clear();
    console.log(`Placement microservice running in port ${port} in ${process.env.NODE_ENV} mode`);
});
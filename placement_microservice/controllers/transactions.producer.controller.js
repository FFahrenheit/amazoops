const amqp = require('amqplib');

exports.startTransaction = async(body) => {
    try {
        const host = process.env.QUEUE_HOST || 'amqp://localhost:5672';
        const queueName = process.env.QUEUE_NAME || 'amazoops_transactions';
        const connection = await amqp.connect(host);
        const channel = await connection.createChannel();
        channel.assertQueue(queueName, { durable: true });
        channel.sendToQueue(queueName, 
            Buffer.from(
                JSON.stringify(body)
            ), {
                persistent: true
            });

        setTimeout(() => {
            connection.close();
        }, 1000);
    } catch (error) {
        console.error('Error in Message Queue:' + error.message);
        throw error;
    }
}
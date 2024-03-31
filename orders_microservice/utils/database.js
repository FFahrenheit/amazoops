const http = require('http');
const nano = require('nano');

const httpAgent = new http.Agent({
    keepAlive: true,
    maxSockets: 25
});
const DB_URL = process.env.DB_URL || 'localhost:5984'

class Database {
    constructor() {
        const database = nano({
            url: DB_URL,
            requestDefaults: {
                agent: httpAgent
            }
        });
        const databaseName = process.env.DB_NAME || 'amazoops';
        this.db = database.use(databaseName);
        console.log(`Connected to ${databaseName}`);
    }

    async insert(doc) {
        try {
            const response = await this.db.insert(doc);
            console.log(`Doc created with id: ${response.id}`);
            return response;
        } catch(error) {
            console.error('Database error: ', error.message);
            throw error;
        }
    }

    async get(docId) {
        try {
            const doc = await this.db.get(docId);
            return doc;
        } catch (error) {
            console.error('Database error: ', error.message);
        }
    }

    async find(query) {
        try {
            const q = { selector: query };
            const result = await this.db.find(q);
            return result.docs;
        } catch (error) {
            console.error('Database error: ', error.message);
            throw error;
        }
    }
}

module.exports = new Database();
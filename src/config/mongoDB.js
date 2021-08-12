import { MongoClient } from 'mongodb';
import { env } from './environtment.js';

const URI = env.MONGO_URI;

console.log(URI);

export const connectDB = async () => {

    const client = new MongoClient(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    try {
        // connect to the server
        await client.connect();
        // list db
        await listDB(client)

        console.log('connected success');
    } finally {
        // ensure the client will close when finish
        await client.close();
    }
}

const listDB = async (client) => {
    const databaseList = await client.db().admin().listDatabases()
    console.log(databaseList)
    console.log('your db :')
    databaseList.databases.forEach(db => console.log(`-${db.name}`))
};
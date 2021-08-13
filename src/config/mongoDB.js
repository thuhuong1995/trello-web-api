import { MongoClient } from 'mongodb';
import { env } from './environtment.js';

const URI = env.MONGO_URI;

let dbInstance = null;

export const connectDB = async () => {

    const client = new MongoClient(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    // connect to the server
    await client.connect();
    dbInstance = client.db(env.DATABASE_NAME);
}

export const getDB = () => {
    if (!dbInstance) throw new Error('Must connect to DB first');
    return dbInstance;
}
// const listDB = async (client) => {
//     const databaseList = await client.db().admin().listDatabases()
//     console.log(databaseList)
//     console.log('your db :')
//     databaseList.databases.forEach(db => console.log(`-${db.name}`))
// };
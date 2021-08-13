import express from 'express';
import { env } from './config/environtment.js';
import { connectDB } from './config/mongoDB.js';


connectDB()
    .then(() => console.log('Connected success'))
    .then(() => bootServer())
    .catch((err) => {
        console.log(err)
        process.exit();
    })

const bootServer = () => {
    const app = express();

    app.get('/test', async (req, res) => {

        res.end('<h1>Love Mai</h1>');
    });

    app.listen(env.APP_PORT, env.APP_HOST, () => {
        console.log(`Mai in ${env.APP_HOST}: port ${env.APP_PORT}`)
    })
}
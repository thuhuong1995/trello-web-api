import express from 'express';
import { connectDB } from './config/mongoDB.js'
import { env } from './config/environtment.js'

const app = express();

connectDB().catch(console.log)

app.get('/', (req, res) => {
    res.end('<h1>Love Mai</h1>');
});

app.listen(env.PORT, env.HOST, () => {
    console.log(`Mai in ${env.HOST}: port ${env.PORT}`)
})
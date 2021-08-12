import express from 'express';
import { mapOrder } from './utilities/sort.js'

const app = express();

const hostname = 'localhost';

const port = 8081;

app.get('/', (req, res) => {
    res.end('<h1>Love Mai</h1>');
});

app.listen(port, hostname, () => {
    console.log(`Mai in ${hostname}: port ${port}`)
})
import express from 'express';
import mongoose from 'mongoose';


//App Config
const app = express();
const port = process.env.PORT || 8001;

//Middlewares

//Db Config

//Api endpoints
app.get('/', (req, res) => res.status(200).send('Hello world'));
//Listener
app.listen(port, () => console.log('listening on localhost:' + port));
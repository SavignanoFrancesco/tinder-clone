import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';

import Cards from './dbCards.js';


//App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://Francesco:Fr3nzc0r3@cluster0.wikz1.mongodb.net/TinderCloneDb?retryWrites=true&w=majority';

//Middlewares
app.use(Cors());
app.use(express.json());

//Db Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
}).then();

//Api endpoints
app.get('/', (req, res) => res.status(200).send('Hello world'));

app.post('/cards', (req, res) => {

    const dbCard = req.body;
    Cards.create(dbCard, (err, data) => {
        if (err){
            res.status(500).send(err);
        }else{
            res.status(201).send(data);
        }
    });

});

app.get('/cards', (req, res) => {

    Cards.find( (err, data) => {
        if (err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    });

});

//Listener
app.listen(port, () => console.log('listening on localhost:' + port));
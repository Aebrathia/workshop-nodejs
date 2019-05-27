const express = require('express');
const database = require('./database');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});

app.get('/rooms', (req, res) => {
    const response = database.rooms;
    res.status(200).send(response);
});

app.listen(3000, () => {
    console.log('Listening on 3000');
});

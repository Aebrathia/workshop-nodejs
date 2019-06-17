const express = require('express');
const multer = require('multer');
const { get, getOne, create } = require('./database');

const app = express();
const upload = multer();

app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});

app.get('/rooms', (req, res) => {
    const response = get('rooms');
    res.status(200).send(response);
});

app.get('/rooms/:id', (req, res) => {
    const response = getOne('rooms', Number(req.params.id));
    res.status(200).send(response);
});

app.post('/rooms', upload.none(), (req, res) => {
    const { body } = req;
    const newRoom = create('rooms', body);
    res.status(200).send(newRoom);
});

app.listen(3000, () => {
    console.log('Listening on 3000');
});

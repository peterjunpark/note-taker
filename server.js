const express = require('express');
const path = require('path');
const data = require('./db/db.json');

const app = express();
const port = 3333;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
})

app.listen(port, () => console.log(`👂 Server listening on port ${port} 👂`));

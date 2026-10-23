// Import
const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const app = express();
const PORT = 8080;

// Middleware, um JSON-Daten im Request-Body zu parsen
app.use(express.json());

// Listener für express-instanz
app.listen(
    PORT,
    () => console.log(`server ready at http://localhost:${PORT}`)
);

// TEST
app.get('/', (req, res) => {
    res.sendStatus(200);
});

app.get('/api/null', (req, res) => {
    res.sendStatus(200);
});

/** GET */

/* 200 OK */ 
app.get('/api/test', (req, res) => {
    res.sendStatus(200);
});

/* JSON direct */ 
app.get('/api/json1', (req, res) => {
    res.send({ "key": "value" });
});

/* JSON ressource */ 
app.get('/api/json2', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'test.json'));
});

/* HTML */ 
app.get('/api/html', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'boo.html'));
});

/* JPG */ 
app.get('/api/jpg', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', '404.jpg'));
});

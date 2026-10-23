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
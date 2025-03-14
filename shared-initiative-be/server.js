const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../shared-initiative-fe/dist/shared-initiative-fe/browser')));

app.get('/initiative', (req, res) => {
    res.sendFile(path.join(__dirname, '../shared-initiative-fe/dist/shared-initiative-fe/browser/index.html'));
});

app.get('/', (req, res) => {
    res.send('Hello World from Node.js server!');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
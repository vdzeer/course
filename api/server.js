const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/:name', (req, res) => res.send(`Hello, dear ${(req.params.name)[0].toUpperCase() + (req.params.name).slice(1)}!`));

app.listen(port, () => console.log(`Listening on port ${port}!`));
const express = require('express');
const cfg = require('./config');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/user/:name', (req, res) => res.send(`Hello, dear ${(req.params.name)[0].toUpperCase() + (req.params.name).slice(1)}!`));

app.use((req, res) => {
  res.status(404).send('404: Page Not Found');
});

app.use((err, req, res, next) => {
  res.status(500).send('500: Internal Server Error');
});

app.listen(cfg.PORT, () => console.log(`Listening on port ${cfg.PORT}!`));
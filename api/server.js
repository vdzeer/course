const express = require('express');
const cfg = require('./config');
const PORT = cfg.getValue('PORT', 3000);
const app = express();
const postsRouter = require('./routes/posts.router');

app.use('/posts', postsRouter);

app.use((req, res) => {
  res.status(404).send('404: Page Not Found');
});

app.use((err, req, res, next) => {
  res.status(500).send('500: Internal Server Error');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
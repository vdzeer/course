require('dotenv').config();

const express = require('express');
const PORT = process.env.PORT || 3000;

const postsRouter = require('./routes/posts.router');

const app = express();

app.use(express.json());
app.use('/posts', postsRouter);

app.use((req, res) => {
  res.status(404).send('404: Page Not Found');
});

app.use((err, req, res, next) => {
  res.status(500).send('500: Internal Server Error');
});


app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
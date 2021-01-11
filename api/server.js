const express = require('express');
const cfg = require('./config');
const PORT = cfg.getValue('PORT', 3000);
const DI = require('./DI');

const app = express();
app.use(express.json());

for (const name in DI.routes) {
  if (!DI.controllers[name]) 
    console.error(`Controller with name ${name} didn\`t find!`);
  else 
    app.use(`/${name}`, DI.routes[name](DI.controllers[name]));
}

app.use((req, res) => {
  res.status(404).send('404: Page Not Found');
});

app.use((err, req, res, next) => {
  res.status(500).send('500: Internal Server Error');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
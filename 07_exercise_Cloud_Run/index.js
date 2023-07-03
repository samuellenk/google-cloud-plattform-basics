const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
app.get('/', (req, res) => {
  const name = process.env.NAME || 'Welt';
  res.send(`Hallo ${name}!`);
});
app.listen(port, () => {
  console.log(`hallowelt: listening on port ${port}`);
});

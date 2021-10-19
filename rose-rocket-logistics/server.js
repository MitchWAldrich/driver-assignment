const express = require('express');
const app = express();

app.get('/hey', (req, res) => res.send('ho!'))

app.get("/url", (req, res, next) => {
  res.json(["Tony","Lisa","Michael","Ginger","Food"]);
 });

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
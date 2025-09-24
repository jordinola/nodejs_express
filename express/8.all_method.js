const express = require("express");

const app = express();

// Will work with any verb, get, post, put, etc
app.all('/info', (req, res) => {
  res.send(`Infoed through all`)
})

app.get('/search', (req, res) => {
  res.send(`Searched`)
})

app.listen(3000);
console.log(`server on port ${3000}`);

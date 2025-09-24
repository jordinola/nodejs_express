const express = require("express");

const app = express();

app.get('/hello/:username', (req, res) => {
  console.log(req.query.age)
  res.send(`Hello ${req.params.username}`)
})

app.get('/search', (req, res) => {
  console.log(req.query)
  if (req.query.q === 'javascript books') {
    res.send('list of javascript books')
  } else {
    res.send('regular page')
  }
})



app.listen(3000);
console.log(`server on port ${3000}`);

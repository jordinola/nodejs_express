const express = require("express");

const app = express();

// Allows express to deserialize responses in text format
app.use(express.text())

// Allows express to deserialize responses in json format
app.use(express.json())

// Allows express to deserialize responses in form-data
app.use(express.urlencoded({ extended: false }))

app.post('/user', (req, res) => {
  console.log(req.body)
  res.send('New user created')
})

app.listen(3000);
console.log(`server on port ${3000}`);

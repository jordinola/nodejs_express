const express = require("express");

const app = express();

app.get('/hello/:username', (req, res) => {
  console.log(req.params, req.params.username)
  res.send(`Hello ${req.params.username}`)
})

app.get('/add/:x/:y', (req, res) => {
  console.log(req.params.x, req.params.x)
  const {x, y} = req.params;
  const result = Number(x) + Number(y)

  res.send(`Result: ${result}`)
})

app.get('/user/:username/photo', (req, res) => {
  console.log(req.params, req.params.username)
  const { username } = req.params;
  if (username === 'fazt') {
    return res.sendFile('test_image.png', {
      root: __dirname + '/../'
    })
  }

  res.send(`User's ${req.params.username} photo not found`)
})

app.get('/name/:name/age/:age', (req, res) => {
  const { name, age } = req.params;
  console.log(name, age)
  res.send(`User ${name} is ${age} years old`)
})


app.listen(3000);
console.log(`server on port ${3000}`);

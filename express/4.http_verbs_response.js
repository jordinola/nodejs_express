const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("...");
});

app.get("/myfile", (req, res) => {
  res.sendFile("test_image.png", {
    root: __dirname + "/../",
  });
});

app.get("/user", (req, res) => {
  res.json({
    name: "fazt",
    lastname: "ray",
    age: 40,
    points: [1, 2, 3],
  });
});

app.get("/isAlive", (req, res) => {
  res.sendStatus(204);
});

app.listen(3000);
console.log(`server on port ${3000}`);

const express = require("express");
const morgan = require("morgan");

const app = express();

let products = [
  {
    id: 1,
    name: "laptop",
    price: 3000,
  },
];

app.use(morgan("dev"));
app.use(express.json());

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/products", (req, res) => {
  const newProduct = { ...req.body, id: products.length + 1 };
  products.push(newProduct);
  res.json(newProduct);
});

app.put("/products/:id", (req, res) => {
  const product = products.find((prod) => prod.id === Number(req.params.id));

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  products = products.map((prod) =>
    prod.id === Number(req.params.id) ? { ...prod, ...req.body } : prod
  );

  res.json({
    message: 'Product updated successfully'
  });
});

app.delete("/products/:id", (req, res) => {
  const product = products.find((prod) => prod.id === Number(req.params.id));

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  products = products.filter((prod) => prod.id !== Number(req.params.id));
  res.sendStatus(204);
});

app.get("/products/:id", (req, res) => {
  console.log(req.params.id);
  const product = products.find((prod) => prod.id === Number(req.params.id)); // params is string, so a conversion has to be done, otherwise, use only ==

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  res.json(product);
});

app.listen(3000);
console.log(`Server on port ${3000}`);

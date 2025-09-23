const express = require('express')

const app = express()

app.get('/products', (req, res) => {
    res.send('Products list')
})

app.post('/products', (req, res) => {
    res.send('Product created')
})

app.put('/products', (req, res) => {
    res.send('Product updated')
})

app.delete('/products', (req, res) => {
    res.send('Product deleted')
})

app.patch('/products', (req, res) => {
    res.send('Product propery updated')
})

app.listen(3000)
console.log(`server on port ${3000}`)
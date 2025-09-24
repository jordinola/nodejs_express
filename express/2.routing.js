const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('heello world')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/weather', (req, res) => {
    res.send('Current weather is nice')
})

app.use((req, res) => {
    res.send('Page not found')
})

app.listen(3000)
console.log(`server on port ${3000}`)
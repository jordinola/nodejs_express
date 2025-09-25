const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.get('/about', (req, res) => {
    res.send('about')
})

app.post('/about', (req, res) => {
    console.log(req.body)
    res.send('about')
})

app.listen(3000)
console.log(`Server on port ${3000}`)
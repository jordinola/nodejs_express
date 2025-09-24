const express = require('express')

const app = express()

app.use((req, res, next) => {
console.log(`Route: ${req.url} Method: ${req.method}`)
    console.log('went through here')
    next()
})

app.get('/profile', (req, res) => {
    res.send('Profile')
})

app.all('/about', (req, res) => {
    res.send('about')
})

app.listen(3000)
console.log(`Server on port ${3000}`)
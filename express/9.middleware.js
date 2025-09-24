const express = require('express')

const app = express()

// Order of the middlewares matters as they will be applied to all 
// subsequent routes

// Logger middleware
app.use((req, res, next) => {
    console.log(`Route: ${req.url} Method: ${req.method}`)
    console.log('went through here')
    next()
})

app.all('/about', (req, res) => {
    res.send('about')
})

// isAuthenticated middleware
app.use((req, res, next) => {
    if (req.query.login === 'fazt@faztweb.com') {
        next()
    } else {
        res.send('not authorized')
    }
})

app.get('/profile', (req, res) => {
    res.send('Profile')
})

app.listen(3000)
console.log(`Server on port ${3000}`)
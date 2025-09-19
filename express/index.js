const express = require('express')

const app = express()


app.get('/', (req, res) => {
    res.sendFile('index.html', {
        root: __dirname + '/../static'
    })
})

app.listen(3000)
console.log(`server on port ${3000}`)
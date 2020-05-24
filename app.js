const express = require('express')
const app = express()
const port = 3000

app.get('/xxx', (request, response) => response.send('hello!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
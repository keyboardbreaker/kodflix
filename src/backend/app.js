const express = require('express')
const app = express()
const port = 3001
const shows = require('./shows') //imports the array of show objects

app.get('/rest/shows', (req, res) => res.send(shows())) //the url, what to send pack

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
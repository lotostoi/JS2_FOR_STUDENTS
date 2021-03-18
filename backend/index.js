const PORT = 3555

const express = require('express')
const fs = require('fs')
const app = express()

const history = require('connect-history-api-fallback')

app.use(express.json())

app.get('/test/catalog', (req, res) => {
  fs.readFile('./db/catalog.json', 'utf-8', (err, data) => {
    if (err) {
      return res.json({ error: true })
    }
    res.json(JSON.parse(data))
  })
})

app.use(history())

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))

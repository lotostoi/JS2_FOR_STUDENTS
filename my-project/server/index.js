const PORT = 3555

const express = require('express')
const fs = require('fs')
const app = express()

const history = require('connect-history-api-fallback')

app.use(express.json())

const linkToCart = __dirname + '/db/cart.json'
const linkToCatalog = __dirname + '/db/catalog.json'

app.get('/test/catalog', (req, res) => {
  fs.readFile(linkToCatalog, 'utf-8', (err, data) => {
    if (err) {
      return res.json({ result: true })
    }
    res.json(JSON.parse(data))
  })
})

app.get('/test/cart', (req, res) => {
  fs.readFile(linkToCart, 'utf-8', (err, data) => {
    if (err) {
      return res.json({ error: true })
    }
    res.json(JSON.parse(data))
  })
})

app.post('/test/cart/add', (req, res) => {
  fs.readFile(linkToCart, 'utf-8', (err, data) => {
    if (err) {
      return res.json({ result: false })
    }
    const cartItems = JSON.parse(data)
    cartItems.push(req.body)
    fs.writeFile(linkToCart, JSON.stringify(cartItems), (err) => {
      if (err) {
        return res.json({ result: false })
      }
      return res.json({ result: true })
    })
  })
})

app.put('/test/cart/inc/:id', (req, res) => {
  fs.readFile(linkToCart, 'utf-8', (err, data) => {
    if (err) {
      return res.json({ result: false })
    }
    const cartItems = JSON.parse(data)
    const item = cartItems.find(({ id }) => +id === +req.params.id)
    item.amount++
    fs.writeFile(linkToCart, JSON.stringify(cartItems), (err) => {
      if (err) {
        return res.json({ result: false })
      }
      return res.json({ result: true })
    })
  })
})

app.put('/test/cart/dec/:id', (req, res) => {
  fs.readFile(linkToCart, 'utf-8', (err, data) => {
    if (err) {
      return res.json({ result: false })
    }
    const cartItems = JSON.parse(data)
    const item = cartItems.find(({ id }) => +id === +req.params.id)
    item.amount--
    fs.writeFile(linkToCart, JSON.stringify(cartItems), (err) => {
      if (err) {
        return res.json({ result: false })
      }
      return res.json({ result: true })
    })
  })
})

app.delete('/test/cart/delete/:id', (req, res) => {
  fs.readFile(linkToCart, 'utf-8', (err, data) => {
    if (err) {
      return res.json({ result: false })
    }
    const cartItems = JSON.parse(data).filter(({ id }) => +id !== +req.params.id)
    fs.writeFile(linkToCart, JSON.stringify(cartItems), (err) => {
      if (err) {
        return res.json({ result: false })
      }
      return res.json({ result: true })
    })
  })
})

app.use(history())

app.use('/', express.static('./dist'))

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))

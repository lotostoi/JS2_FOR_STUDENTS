const PORT = 3000
const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()

const DB_CATALOG = {
  catalog: path.resolve(__dirname, 'jsons', 'catalog.json'),
}
const DB_CART = {
  cart: path.resolve(__dirname, 'jsons', 'cart.json'),
}

app.use(express.json())
//app.use(express.static(path.join(__dirname, '../frontend')))

/* app.get('/', (req, res) => {
  res.sendFile('index.html')
}) */
// обрабатываем запрос на получение данных каталога
app.get('/catalog', (req, res) => {
  fs.readFile(DB_CATALOG.catalog, 'UTF-8', (err, data) => {
    if (err) {
      res.json({ result: new Error('Error by reading file') })
    } else {
      res.json(JSON.parse(data))
    }
  })
})
// обрабатываем запрос на получение данных корзины
app.get('/cart', (req, res) => {
  fs.readFile(DB_CART.cart, 'UTF-8', (err, data) => {
    if (err) {
      res.json({ result: new Error('Error by reading file') })
    } else {
      res.json(JSON.parse(data))
    }
  })
})
// обрабатываем запрос на увеличение коичества товара(по ID) в корзине
app.put('/incToCart', (req, res) => {
  fs.readFile(DB_CART.cart, 'UTF-8', (err, data) => {
    if (err) res.json({ result: new Error('Error by reading file...') })
    let cart = JSON.parse(data)
    let good = cart.find((good) => good.id_product === req.body.id)
    good.quantity++
    fs.writeFile(DB_CART.cart, JSON.stringify(cart), (err) => {
      if (err) res.json({ result: new Error('Error by writing file...') })
      res.json({ result: 1 })
    })
  })
})
// обрабатываем запрос на добавление нового товара в корзину
app.post('/addToCart', (req, res) => {
  fs.readFile(DB_CART.cart, 'UTF-8', (err, data) => {
    if (err) res.json({ result: new Error('Error by reading file...') })
    let cart = JSON.parse(data)
    delete req.body.product.imgProduct
    cart.push(req.body.product)
    fs.writeFile(DB_CART.cart, JSON.stringify(cart), (err) => {
      if (err) res.json({ result: new Error('Error by writing file...') })
      res.json({ result: 1 })
    })
  })
})
// обрабатываем запрос на уменьшение коичества товара(по ID) в корзине
app.put('/decToCart', (req, res) => {
  fs.readFile(DB_CART.cart, 'UTF-8', (err, data) => {
    if (err) res.json({ result: new Error('Error by reading file...') })
    let cart = JSON.parse(data)
    let good = cart.find((good) => +good.id_product === +req.body.id)
    good.quantity--
    fs.writeFile(DB_CART.cart, JSON.stringify(cart), (err) => {
      if (err) res.json({ result: new Error('Error by writing file...') })
      res.json({ result: 1 })
    })
  })
})
// обрабатываем запрос на удаление товара(по ID) из корзине
app.delete('/delFromCart/:id', (req, res) => {
  fs.readFile(DB_CART.cart, 'UTF-8', (err, data) => {
    if (err) res.json({ result: new Error('Error by reading file...') })
    let cart = JSON.parse(data)
    let idx = cart.findIndex((good) => +good.id_product === +req.params.id)
    cart.splice(idx, 1)
    fs.writeFile(DB_CART.cart, JSON.stringify(cart), (err) => {
      if (err) res.json({ result: new Error('Error by writing file...') })
      res.json({ result: 1 })
    })
  })
})

app.listen(PORT, () => console.log(`Server has been started on http://localhost:${PORT}/`))

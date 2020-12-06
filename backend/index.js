const PORT = 3000
const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()

const DB_CATALOG = {
  catalog: path.resolve(__dirname, 'jsons', 'catalog.json'),
}
console.log(DB_CATALOG.catalog)
const DB_CART = {
  cart: path.resolve(__dirname, 'jsons', 'cart.json'),
}
// пока не обращай внимания на эти строки
app.use(express.json())
app.use(express.static(path.join(__dirname, '../frontend')))

app.get('/', (req, res) => {
  res.sendFile('index.html')
})

// обрабатываем запрос на получение данных каталога
app.get('/catalog', (req, res) => {
  fs.readFile(DB_CATALOG.catalog, 'UTF-8', (err, data) => {
    if (err) {
      res.json({result: new Error('Error by reading file')})
    } else {
      console.log()
      res.json(JSON.parse(data))
    }
  })
})

// написать запрос на чтение файла корзины и отдачу результата на фронтенд 

app.listen(PORT, () => console.log(`Server has been started on http://localhost:${PORT}/`))

// метод получения товаров каталога с сервера
fetch('/catalog')
  .then((data) => data.json())
  .then((data) => console.log(data))

// метод получения товаров корзины с сервера
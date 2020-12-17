const products = [
  { id: 1, title: 'Notebook', img: './src/img/notebook.jpg', price: 2000 },
  { id: 2, title: 'Mouse', img: './src/img/mouse.jpg', price: 20 },
  { id: 3, title: 'Keyboard', img: './src/img/keyboard.jpg', price: 200 },
  { id: 4, title: 'Gamepad', img: './src/img/gamepad.jpg', price: 50 },
]
const wrapperForProducts = document.querySelector('.products')
//Функция для формирования верстки каждого товара
//const renderProduct = (title, img, price) => { // все отлично ниже(строка 10 и 25) приведен вариант альтернативного решения, понимание которого очень полезно будет в будущем   
const renderProduct = ({ title, img, price }) => {
  return `<div class="product-item card" style="width: 21rem;">
                <h3 class="card-title">${title}</h3>
                <img src=${img} alt="...">
                <p class="card-lorem">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, nostrum?</p>
                <p class="card-text">Go somewhere: ${price}</p>               
                <button class="buy-btn btn btn-primary">Купить</button>
            </div>`
}
const renderPage = (list) => {
  // const productsList = list.map(item => renderProduct(item.title, item.img, item.price,))// все абсолютно правильно и круто,
  // ниже привел альтернативное решение с учетом того что функция renderProduct (строка 10) принимает объект товара, и с помощью  
  // деструкторизации  достает из него нужные ключи, здесь это необязательно, и я привожу этот пример потому, что 
  // данная возможность используется в js очень часто , и лучше сразу ее понять и привыкнуть, потому что это очень мощный и удобный 
  // инструмент. 
  const productsList = list.map((item) => renderProduct(item))
  // document.querySelector('.products').innerHTML = productsList.join(""); // все правильно, однако есть
  // более оптимальное по скорости работы решение это
  // функция Element.insertAdjacentHTML()(https://developer.mozilla.org/ru/docs/Web/API/Element/insertAdjacentHTML)
  // вам это будут показывать скорее всего поэтому я тебе ниже(строка 31) привел пример как это можно использовать. 
  // также имеет смысл document.querySelector('.products') сразу вывести в переменную(строка 7), это не обязательно, но все серьезные программисты так делают
  wrapperForProducts.insertAdjacentHTML('beforeend', productsList)
}

renderPage(products)

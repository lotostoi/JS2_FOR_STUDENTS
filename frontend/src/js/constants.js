// ссылка на базовый URL для работы с API магазина
const BASE_URL = 'https://raw.githubusercontent.com/lotostoi/JS2_FOR_STUDENTS/lesson6/apiJsons/'

// создаем объект API корзины
const API_FOR_CART = {
  goodsFromCart: 'cart',
  addToCart: 'addToCart',
  incToCart: 'incToCart',
  decToCart: 'decToCart',
  removeFromCart:'delFromCart',
}
// создаем объект API каталога
const API_FOR_CATALOG = {
  goodsFromCatalog: 'catalog',
}

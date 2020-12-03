
// ссылка на базовый URL для работы с API магазина
const BASE_URL =
  'https://raw.githubusercontent.com/lotostoi/JS2_FOR_STUDENTS/lesson6/apiJsons/'

// создаем объект API корзины
const API_FOR_CART = {
  goodsFromCart: BASE_URL + 'cart.json',
  addToCart: BASE_URL + 'addToCart.json',
  removeFromCart: BASE_URL + 'delFromCart.json',
}
// создаем объект API каталога
const API_FOR_CATALOG = {
  goodsFromCatalog: BASE_URL + 'catalog.json',
}

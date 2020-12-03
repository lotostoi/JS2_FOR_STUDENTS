// общий путь api(к данным о товарах на сервере), если вам не показывали как создать такую ссылку в репозитории напиши, я подскажу.
const BASE_URL = 'https://raw.githubusercontent.com/lotostoi/GeekBrains-project/homework/responses/'

// объект ссылок к json файлам на сервере, для работы с каталогом товаров.
const CATALOG_URL = { goods: BASE_URL + 'catalogData.json' }

// объект ссылок к json файлам на сервере, для работы с корзиной.
const CART_URL = {
  goods: BASE_URL + 'getBasket.json',
  addById: BASE_URL + 'addToBasket.json',
  delById: BASE_URL + 'deleteFromBasket.json',
}

// создаем класс товара каталога
// основной задачей этого класса на основе данных о товара создавать объект товара
class Good {
  // закидываем в конструктор значения полей объекта одного товара в каталоге
  constructor({ id, title, price, img }) {
    // определяем поля класс Good
    this.id = id
    this.title = title
    this.price = price
    // ссылка на картинку товара
    this.img = img
  }
  // данная конструкция  ({ id, title, price, img }) означает что в конструктор класса приходит
  // объект например item который сразу разбирается с помощью деструкторизации то есть код выше можно записать следующим образом
  // constructor(item) {
  //   this.id = item.id
  //   his.title = item.title
  //   this.price = item.price
  //   this.img = item.img
  // }
  // создаем метод для получения html разметки одного товара с заданными при создании класса параметрами(id.title,price,img)
  rander() {
    // данная разметка взята из верстки которую я ее сильно упростил(находится index.html)
    //  оставил только div каталога <div class="catalogue"></div> и корзину
    // (все остальное на данном этапе лишнее, и будет только сбивать восприятие кода)

    return ` <div class="item">
                <img class="item__photo" src="${this.img}" alt="item1" />
                <div class="item-hover">
                <a href="#">
                    <div class="addCart" data-id-Add="${this.id}">
                      <img class="item-cart" src="img/whiteCart.svg" alt="itemCart" />
                      <p class="addCart_text">Add to Cart</p>
                    </div>
                </a>
                </div>
                <div class="item__info">
                <p class="item__info_name">${this.title}</p>
                <p class="item__info_price">$ ${this.price}</p>
                </div>
            </div>`
  }
}

// создаем класс каталога . В задачи данного класса входит:
// 1. формирование html разметки товаров, на основе данных полученных с сервера
// 2. Взаимодействовать с классом корзины

class Goods {
  // конструктор класса принимает объект options, котором задаются поля необходимые для работы этого класса  
  constructor(options) {
    // создаем поле container в которое заносим элемент dom с
    // селектором options.mainSelector(в нашем случае это будет элемент <div class="catalogue"></div>  и соответственно селектор`.catalogue`)
    this.container = document.querySelector(options.mainSelector)
    // создаем поле в котором будут хранится данные о товарах полученные с сервера
    this.allGoods = []
    // создаем поле в котором будут хранится данные для отображения на странице,
    // данное поле формируется на основе поля  this.allGoods, и в момент создания класса оно равно this.allGoods
    // однако оно может меняться если мы например захотим делать фильтрацию товаров например по названию и т.д.
    // (этот момент может быть по началу непонятным)
    this.GoodsForShow = []
    // определяем поле ссылок api которые потребуются для работы класса
    this.url = options.URL
    // определяем поля для работы с внешними классами
    this.good = options.good ? options.good : null
    this.cart = options.cart ? options.cart : null
    // вызываем внутренний метод который запускает методы, которые должны сработать в момент создания класса
    this._init()
  }
  // определяем метод _init()
  _init() {
    // при создании класса мы сначала должны получить товары с сервера
    // в данном случае мы это делаем с помощью внешней функции описанной в конце данного файла
    return (
      makeRequestFetch(this.url.goods)
        .then((data) => {
          //  после вызова promise  makeRequestFetch(this.url.goods), данные о товараx попадают в поле data
          //  можно написать console.log(data) что бы  посмотреть как эти данные выглядят в консоли
          //  this.url.goods путь к файлу с данными о товарах в формате json, который лежит на сервере
          //  в момент создания класса this.allGoods = this.GoodsForShow, и в них мы заносим данные из data
          this.allGoods = this.GoodsForShow = data
          //  вызываем метод _rander() который на основе данных из this.GoodsForShow сформирует html разметку
          //  товаров в элементе this.container = document.querySelector(selector)
          //  данный метод описан ниже
          this._rander()
        })
        // после того как наша разметка отрисованна, с помощью метода ._handler()(который описан ниже),
        // навешиваем необходимые обработчики на элемента DOM tree ( в данном случае речь идет кнопка 'add to cart')
        .then(() => this._handler())
        // если во время выполнения данной цепочки promise в возникла ошибка выводим ее в консоль
        .catch((e) => {
          console.error(e)
        })
    )
  }

  _rander() {
    // очищаем .innerHTML у элемента this.container = document.querySelector(selector) ( в нашем случае selector = `.catalogue`)
    this.container.innerHTML = ''
    // пробегаем по массиву  this.allGoods(с данными о товарах) методом forEach
    this.allGoods.forEach((good) => {
      // выше мы определили класс Good (строка 40)
      // далее на его основе мы будем создавать объекты товара в каталоге
      // поскольку каждый good в массиве this.allGoods имеет следующую
      // структуру {id: 1, title: "MANGO PEOPLE T-SHIRT", price: 55, img: "img/item1.png"}
      // мы можем создать объект товара, при помощи, ранее описанного, класса Good следующим образом
      let newGood = new this.good(good)
      // далее используя метод render у созданного объекта товара newGood мы можем добавить
      // его html разметку this.container = document.querySelector(selector)
      this.container.insertAdjacentHTML('beforeend', newGood.rander())
      // поскольку это тело цикла, после его окончания на странице будут отображены все товары из массива this.allGoods
    })
  }

  _handler() {
    // создаем обработчик кликов для кнопок "Add to Cart"
    this.container.addEventListener('click', (e) => {
      if (e.target.dataset.idAdd) {
        // в момент клика по кнопке используя значение data атрибута кнопки, определяем ID
        // товара, и находим этот товар в массиве товаров this.allGoods
        let item = this.allGoods.find((g) => +g.id === +e.target.dataset.idAdd)
        // поскольку поле класса this.cart содержит ссылку на класс корзины, мы можем добавить найденный товар (item),
        // в корзину, вызывав метод корзины(который описан в ее классе) следующим образом:
        this.cart.addItem(item)
      }
    })
  }
}

// создаем класс товара корзины на основе класса для товара каталога(суть создания данного класса описана выше )
class GoodInCart extends Good {
  constructor({ id, title, price, img, quantity }) {
    // super({ id, title, price, img, quantity }) - вызываем конструктор родительского класса
    // данна процедура выполняет следующие действия
    /*  this.id = id
        this.title = title
        this.price = price
        this.img = img
      */
    super({ id, title, price, img, quantity })
    this.quantity = quantity
  }
  rander() {
    return `
    <div class="shoppingCart-line"></div>
    <div class="productLine">
      <div class="productDetails">
        <div class="productDetails__photo"><a href="#"><img src="${this.img}" alt="t-shirt2"></a>
        </div>
        <div class="productDetails__description">
          <h2>${this.title}</h2>
          <p>Color:<span>Red</span></p>
          <p>Size:<span>Xll</span></p>
        </div>
      </div>
      <div class="unitPrice">
        <p class="productFeatures">$${this.price}</p>
      </div>
      <div class="quantity">
        <p class="productFeatures">${this.quantity}</p>
      </div>
      <div class="subtotal">
        <p class="productFeatures">${this.quantity * this.price}</p>
      </div>
      <div class="action" data-id-del="${this.id}">
        <p class="productFeatures" data-id-del="${this.id}"><i class="fas fa-times-circle" data-id-del="${
      this.id
    }"></i></p>
      </div>
    </div>
    `
  }
}

// Создаем класс корзины . В задачи данного класса входит:
// 1. формирование html разметки корзины
// 2. Удаление/добавление ... товаров в корзине
// данный класс создается на основе класса Goods, то есть
// в нем по наследству в нем уже будут такие метода как  _init(), _rander() и _handler().
// Однако для корректной работы данного класса нам потребуется
// немного изменить  методы  _handler()
class Cart extends Goods {
  constructor(options) {
    // вызов super вызывает конструктор родительского класса тем самым позволяет нам не
    // писать следующий код:
    /* constructor(selector, options, URL) {
            this.container = document.querySelector(selector)
            this.allGoods = []
            this.GoodsForShow = []
            this.url = URL
            this.good = options.good ? options.good : null
            this.cart = options.cart ? options.cart : null
            this._init()
      }*/
    super(options)
    // определяем свойство в котором будут находится селекторы элементов в
    // которых нужно будет выводить значение полной суммы корзины
    this.fieldsForAllSum = options.selectorsFieldsForAllSum ? options.selectorsFieldsForAllSum : null
    // определяем свойство в котором будут находится селекторы элементов в
    // которых нужно будет выводить значение общего количество товаров в корзине
    this.fieldsForAllQuantity = options.selectorsFieldsForAllQuantity ? options.selectorsFieldsForAllQuantity : null
  }
  // переопределяем родительский обработчик, по сути он работает так же как и родительский,
  // только здесь он навешивается на другие кнопки, и поскольку сейчас  мы находимся непосредственно
  // в самом классе корзины мы можем просто использовать ее метод.
  _handler() {
    this.container.addEventListener('click', (e) => {
      if (e.target.dataset.idDel) {
        let item = this.allGoods.find((g) => +g.id === +e.target.dataset.idDel)
        this.removeItem(item)
      }
    })
  }

  // метод для расчета общего количества товаров в корзине
  clacAllQuantity() {
    return this.GoodsForShow.reduce((accum, g) => accum + g.quantity, 0)
  }
  // метод для расчета полной суммы корзины
  clacAllSum() {
    return this.GoodsForShow.reduce((accum, g) => accum + g.quantity * g.price, 0)
  }

  // дополнительный метод, который нужно вызывать когда массив с
  // товарами корзины изменился(добавили товара, удалили товар).
  _rander() {
    super._rander()
    // вызываем внешнюю функцию которая определенна в конце файла
    // данная функция устанавливает  в .innerHTML всех элементов дом дерева,
    // с селекторами заданными в  this.fieldsForAllQuantity, значения которое
    // возвращает метод(this.clacAllQuantity()) для расчет общего количества товаров в корзине
    setContentInElements.apply(this, [this.fieldsForAllQuantity, this.clacAllQuantity()])
    // аналогично вышеприведенной функции
    setContentInElements.apply(this, [this.fieldsForAllSum, this.clacAllSum()])
   
  }
  // метод для добавления товара в корзину
  addItem(item) {
    // делаем запрос на сервер, на разрешение добавления товара в корзину
    makeRequestFetch(this.url.addById)
      .then(({ result }) => {
        // если сервер ответил {"result":1} то добавляем товара
        if (result) {
          // ищем товар item в корзине по id
          let good = this.GoodsForShow.find((g) => g.id === item.id)
          // если товар с в корзине есть
          if (good) {
            //  увеличиваем его количество на 1
            good.quantity++
          } else {
            // если такого товара в корзине нету то добавляем его в корзину
            this.GoodsForShow.push({ ...item, quantity: 1 })
          }
          // с помощью метода _reRender() обновляем данные о корзине в HTML разметке
          this._rander()
        } else {
          // если сервер ответил ответом отличным от {"result":1} , выбрасываем ошибку
          throw new Error("Server's answer isn't correct...")
        }
      })
      .catch((e) => {
        // если при обращению к серверу возникла  ошибка выводим ее в консоль
        console.error(e)
      })
  }
  // метод для удаления товара из корзины или уменьшения его количества
  removeItem(item) {
    // делаем запрос на сервер, на разрешение удаления товара из корзины или уменьшения его количества
    makeRequestFetch(this.url.delById)
      .then(({ result }) => {
        if (result) {
          // если сервер ответил {"result":1} то ищем товар item в корзине по id
          let good = this.GoodsForShow.find((g) => g.id === item.id)
          if (good.quantity > 1) {
            // если количество данного товара в корзине < 1 то уменьшаем его н 1
            good.quantity--
          } else {
            // если количество данного товара в корзине = 1 то удаляем его из массива товаров корзины
            let idx = this.GoodsForShow.findIndex((g) => g.id === item.id)
            this.GoodsForShow.splice(idx, 1)
          }
          this._rander()
        } else {
          // если сервер ответил ответом отличным от {"result":1} , выбрасываем ошибку
          throw new Error("Server's answer isn't correct...")
        }
      })
      .catch((e) => {
        // если при обращению к серверу возникла  ошибка выводим ее в консоль
        console.error(e)
      })
  }
}

// Вызываем вышеописанный класс Cart и в конструктор класса
// передаем объект с необходимые параметры
// Вызов этого класса запустит внутренний метод init()
// в котором с помощью promise а makeRequestFetch будут получены данные о товарах  корзины с сервера
// и затем с помощью метода _rander() эти данные будут отрисованы на странице(корзины) (файл index.html)
let CartShop = new Cart({
  // селектор блока в котором будет отображаться корзина 
  mainSelector: '.prodInCart',
  // ссылка на конструктор класса для создания нового товара каталога
  good: GoodInCart,
  // ссылка на апи корзины
  URL: CART_URL,
  // селекторы элементов в которых нужно отобразить значение полной стоимости корзины
  selectorsFieldsForAllSum: '.header__cart-sum',
  // селекторы элементов в которых нужно отобразить значение общего количества товаров в корзине 
  selectorsFieldsForAllQuantity: '.header__cart-quantity',
})

// Вызываем вышеописанный класс Doods и в конструктор класса
// передаем объект с необходимые параметры
// Вызов этого класса запустит внутренний метод init()
// в котором с помощью promise а makeRequestFetch будут получены данные о товарах каталога с сервера
// и затем с помощью метода _rander() эти данные будут отрисованы на странице(каталога) (файл index.html)
new Goods({
  // селектор блока в котором будет отображаться каталог
  mainSelector: '.catalogue',
  // ссылка на конструктор класса для создания нового товара корзины
  good: Good,
  // ссылка на объект корзины 
  cart: CartShop,
  // ссылка на апи каталога
  URL: CATALOG_URL,
})

//обработчик для переключения между каталогом и корзиной на странице проекта
document.querySelector('body').addEventListener('click', (e) => {
  if (e.target.classList.contains('header__cart')) {
    document.querySelector('.catalogue').classList.add('hiden')
    document.querySelector('.productsCart').classList.remove('hiden')
  }
  if (e.target.classList.contains('header__toCatalog')) {
    document.querySelector('.productsCart').classList.add('hiden')
    document.querySelector('.catalogue').classList.remove('hiden')
  }
})

// дополнительная функция для задания innerHTML элементов дом с определенными селекторами, значения value
function setContentInElements(selectors, value) {
  if (typeof selectors === 'string') {
    let elements = [...document.querySelectorAll(selectors)]
    elements.forEach((e) => {
      e.innerHTML = value
    })
  } else {
    // надо дописать для массива селекторов
  }
}

// простая функция для работы с сервером, сделанная на основен fetch или promise  makeRequest(который вы делали на основе XMLHttpRequest),
// она возвращает promise  `результатом резолва которого
// являются данные полученные с сервера в формате json, и распарсенные из  json в обычный js объект,
// с помощью promise data.json() (используется при работе с promise м fetch)
// или метода JSON.parse(data) (обычный способ превратить json  в объект js)
function makeRequestFetch(url) {
  // использование fetch  намного удобнее поскольку не надо писать promise makeRequest
  return fetch(url).then((data) => data.json())
  // работает  также как и строчка выше
  // return makeRequest(url).then((data) => JSON.parse(data))
}

// promise makeRequest на основе XMLHttpRequest, древность, лучше не использовать.
function makeRequest(url) {
  return new Promise((res, rej) => {
    let xhr
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest()
    } else if (window.ActiveXObject) {
      xhr = new ActiveXObject('Microsoft.XMLHTTP')
    }
    xhr.open('GET', url, true)
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status !== 200) {
          rej('Error')
        } else {
          res(xhr.responseText)
        }
      }
    }
    xhr.open('GET', url, true)
    xhr.send()
  })
}

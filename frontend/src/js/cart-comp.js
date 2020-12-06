// локальная регистрация компонента корзины
// подробнее об отличиях локальной и глобальной регистрации компонента
// тут: https://ru.vuejs.org/v2/guide/components-registration.html

const CartComp = {
  template: `<div :class="{ headerBasketActive: showBasket }" class="header-basket">
              <div class="header-basket-product">
                <div v-for="item in cartItems" :key="item.id_product" class="basket-product">
                  <div class="basket-image">
                    <img :src="imgCartProduct" :alt="item.product_name">
                  </div>
                  <p class="basket-product-title">
                    {{ item.product_name }}
                  </p>
                  <p class="basket-product-price">
                    {{ item.price }}
                  </p>
                  <button @click="removeProductCart(item)" class="basket-delete-product">-</button>
                  <p class="basket-product-quantity">
                    {{ item.quantity }}
                  </p>
                  <button @click="addProductCart(item)" class="basket-delete-product">+</button>  
                </div>
              </div>
              <p v-if="cartItems.length == 0">Корзина пуста</p>
              <div v-else class="basket-total">Итого: {{ total.sum }}<span></span></div>
            </div>`,

  data: function () {
    return {
      imgCartProduct: 'http://placehold.it/50x50',
      cartItems: [],
    }
  },
  props: {
    showBasket: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    // в хуке created() получаем начальное значение корзины с серверного API,
    // и сохраняем данные о товарах корзины в  this.cartItems
    // c помощью $root дотягиваемся до метода(для работы с сервером) корневого компонента
    // подробнее об использовании $root $refs ref тут: https://ru.vuejs.org/v2/guide/components-edge-cases.html
    http
      .get(API_FOR_CART.goodsFromCart)
      .then((data) => {
        for (let el of data) {
          // добавляем к объекту товара корзины ссылку на изображение,
          // по хорошему данная информация также должна быть на сервере
          let prod = {...el, imgProduct: 'http://placehold.it/350x300'}
          this.cartItems.push(prod)
        }
      })
      .catch((e) => console.log(e)) //если при получении товаров с сервера возникла ошибка выводим ее в консоль
  },

  methods: {
    // Метод добавляет товар в корзину
    addProductCart(product) {
      //  если все ок, добавляем товар в корзину на фронте
      let findElem = this.cartItems.find((elem) => elem.id_product === product.id_product)
      if (findElem) {
        http
          .put(API_FOR_CART.incToCart, {id: product.id_product})
          .then(({result}) => {
            //  если все ок, добавляем товар в корзину на фронте
            if (+result === 1) {
              findElem.quantity++
            } else {
              // если сервер вернул некорректный ответ выбрасываем ошибку
              throw result
            }
          })
          .catch((e) => console.error(e))
      } else {
        http
          .post(API_FOR_CART.addToCart, {product})
          .then(({result}) => {
            if (+result === 1) {
              let cartGood = {...product}
              this.cartItems.push(cartGood)
            } else {
              // если сервер вернул некорректный ответ выбрасываем ошибку
              throw result
            }
          })
          .catch((e) => console.error(e))
      }
    },
    // Метод удаления или уменьшения количества товара в корзине.
    removeProductCart(product) {
      let findElem = this.cartItems.find((elem) => elem.id_product === product.id_product)
      if (findElem.quantity > 1) {
        http
          .put(API_FOR_CART.decToCart, {id: product.id_product})
          .then(({result}) => {
            //  если все ок, добавляем товар в корзину на фронте
            if (+result === 1) {
              findElem.quantity--
            } else {
              // если сервер вернул некорректный ответ выбрасываем ошибку
              throw result
            }
          })
          .catch((e) => console.error(e))
      } else {
        http
          .delete(API_FOR_CART.removeFromCart + `/${product.id_product}`)
          .then(({result}) => {
            if (+result === 1) {
              let idx = this.cartItems.findIndex((elem) => elem.id_product === product.id_product)
              this.cartItems.splice(idx, 1)
            } else {
              // если сервер вернул некорректный ответ выбрасываем ошибку
              throw result
            }
          })
          .catch((e) => console.error(e))
      }
    },
    // метод для передачи общей суммы и общего количество товаров корзины
    // в родительский компонент
    sendResultToParentComponent() {
      // создаем кастомное событие "sentresult",  и передаем в его аргумент,
      // объект с полями  allSum: this.total.sum и allQuantity: this.total.quantity,
      // здесь значения this.total.sum и this.total.quantity, это значения компьютид поля
      // "total"( в котором рассчитываются общая суммы и общего количество товаров корзины),
      // которое определено ниже в объекте computed
      // пдробнее об $emit and $event here: https://ru.vuejs.org/v2/guide/components-custom-events.html
      this.$emit('sentresult', {
        allSum: this.total.sum,
        allQuantity: this.total.quantity,
      })
    },
  },
  watch: {
    // при любом изменении общей суммы или количества товаров корзины,
    // передаем обновленную информацию в родительский компонент
    total() {
      this.sendResultToParentComponent()
    },
  },
  computed: {
    // компьютид поле  в котором рассчитываются общая суммы и общего количество товаров корзины
    total() {
      return {
        sum: this.cartItems.reduce((val, elem) => val + elem.quantity * elem.price, 0),
        quantity: this.cartItems.reduce((val, elem) => val + elem.quantity, 0),
      }
    },
  },
}

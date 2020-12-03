const CartComp =  {
  template: `<div :class="{ headerBasketActive: showBasket }" class="header-basket">
              <div class="header-basket-product">
                <div v-for="item in cartItems" :key="item.id_product" class="basket-product">
                  <div class="basket-image">
                    <img :src="imgCartProduct" :alt="item.product_name">
                  </div>
                  <p class="basket-product-title">
                    {{ item.product_name }}
                  </p>
                  <p class="basket-product-quantity">
                    {{ item.quantity }}
                  </p>
                  <p class="basket-product-price">
                    {{ item.price }}
                  </p>
                  <button @click=" removeProductCart(item)" class="basket-delete-product">&times;</button>
                </div>
              </div>
              <p v-if="cartItems.length == 0">Корзина пуста</p>
              <div v-else class="basket-total">Итого: {{ getTotalSum }}<span></span></div>
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
  methods: {
    // Метод добавляет товар в корзину
    addProductCart(product) {
      let findElem = this.cartItems.find(elem => elem.id_product === product.id_product);
      if(findElem) {
        findElem.quantity++;
      } else {
        let cartGood = {...product};
        this.cartItems.push(cartGood);
      }
    },
    // Метод удаляет товар из корзины
    removeProductCart(product) {
      let findElem = this.cartItems.find(elem => elem.id_product === product.id_product);
      if(findElem.quantity > 1) {
        findElem.quantity--;
      } else {
        let idx = this.cartItems.findIndex(elem => elem.id_product === product.id_product);
        this.cartItems.splice(idx,1);
      }
    },
  },
  computed: {
    // Метод считает общую сумму товаров в корзине
    getTotalSum() {
      return this.cartItems.reduce((val, elem) => {
        return val + elem.quantity * elem.price;
      }, 0);
    },
  },
  
 
}

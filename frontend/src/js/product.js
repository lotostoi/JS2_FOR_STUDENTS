// локальная регистрация компонента 
// подробнее об отличиях локальной и глобальной регистрации компонента
// тут: https://ru.vuejs.org/v2/guide/components-registration.html
const CompProduct = {
  template: `
    <div class="product-block">
        <div class="product-block-img">
          <img :src="item.imgProduct" :alt="item.product_name" />
        </div>
        <div class="product-block-content">
          <h2 class="product-block-title">{{ item.product_name }}</h2>
          <p class="product-block-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Similique, at.
          </p>
          <div class="product-block-quantity">
            <p class="product__price">{{ item.price }}</p>
            <div class="product-quant">
              <button
                @click="incQuantity(item)"
                class="item-minus"
              >
              -
              </button>
              <span>{{ item.quantity }}</span>
              <button @click="item.quantity++" class="item-plus">
                +
              </button>
            </div>
            <div
              @click="addProductCart(item)"
              class="product-add-basket"
            >
              <img
                src="./src/images/shopping-basket.svg"
                alt="В корзину"
              />
            </div>
          </div>
        </div>
    </div>
    `,
  data: function () {
    return {}
  },
  props: {
    // описываем проп в котором  будет передаваться объект товара
    item: {
      type: Object,
      required: true,
    },
  },
  // описываем объект с компонентами которые будут вложены в данный компонент  
  components: {
    SearchComp,
    CartComp,
  },
  methods: {
    addProductCart(item) {
      // дотягиваемся через ref и refs до метода корзины addProductCart и вызываем его
      // подробнее об использовании $root $refs ref тут: https://ru.vuejs.org/v2/guide/components-edge-cases.html
      this.$root.$refs.header.$refs.cart.addProductCart(item)
    },
    // Метод убавляет количество товара, если количество равно 1
    // то возвращает return
    incQuantity(item) { 
      if (item.quantity > 1) {
        item.quantity--
      }
    },
  },

 
}

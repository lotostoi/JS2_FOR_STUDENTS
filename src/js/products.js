
const CompProducts = {
  template: `<section class="product">
              <div class="container">
                <div class="product-wrapper">
                  <comp-product  v-for="(good, index) in filteredGoods"  :item="good" :key="good.id_product"></comp-product>
                </div>
              </div>
            </section>`,

  data: function () {
    return {
      catalogs: 'catalogData.json',
      imgProduct: 'http://placehold.it/350x300',
      goods: [],
      filteredGoods: [],
    }
  },
    // описываем объект с компонентами которые будут вложены в данный компонент  
  components: {
    CompProduct,
  },
  created() {
    // в хуке created() получаем начальное значение каталога с серверного API,
    // и сохраняем данные о товарах каталога в  this.goods и this.filteredGoods
    this.$root.getJson(API_FOR_CATALOG.goodsFromCatalog).then((data) => {
      for (let el of data) {
        let prod = Object.assign(
          { quantity: 1, imgProduct: 'http://placehold.it/350x300' },
          el
        )
        this.goods.push(prod)
      }
      this.filteredGoods = this.goods
    })
  },
  methods: {
    // определяем метод для фильтрации/поиска товаров каталога по условию   
    filter(value) {
       if (value !== '') {
        let regEXP = new RegExp(value, 'ig') 
        this.filteredGoods = this.goods.filter(g=>regEXP.test(g.product_name))
      } else {
        this.filteredGoods = this.goods
      }    
    }
  },
}

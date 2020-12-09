// локальная регистрация компонента // подробнее об отличиях локальной и глобальной регистрации компонента // тут:
https://ru.vuejs.org/v2/guide/components-registration.html

<template
  ><section class="product">
    <div class="container">
      <div class="product-wrapper">
        <comp-product v-for="good in filteredGoods" :item="good" :key="good.id_product"></comp-product>
      </div>
    </div>
  </section>
</template>
<script>
import { API_FOR_CATALOG } from 'js/constants'
import CompProduct from 'js/product'
import http from 'js/server'
export default {
  data: function() {
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
    // c помощью $root дотягиваемся до метода(для работы с сервером) корневого компонента
    // подробнее об использовании $root $refs ref тут: https://ru.vuejs.org/v2/guide/components-edge-cases.html
    http
      .get(API_FOR_CATALOG.goodsFromCatalog)
      .then((data) => {
        console.log(data)
        for (let el of data) {
          let prod = { ...el, quantity: 1, imgProduct: 'http://placehold.it/350x300' }
          this.goods.push(prod)
        }
        this.filteredGoods = this.goods
      })
      .catch((e) => console.log(e)) //если при получении товаров с сервера возникла ошибка выводим ее в консоль
  },
  methods: {
    // определяем метод для фильтрации/поиска товаров каталога по условию
    filter(value) {
      if (value !== '') {
        let regEXP = new RegExp(value, 'ig')
        this.filteredGoods = this.goods.filter((g) => regEXP.test(g.product_name))
      } else {
        this.filteredGoods = this.goods
      }
    },
  },
}
</script>

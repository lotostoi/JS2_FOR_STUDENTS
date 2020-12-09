<template>
  <header class="header">
    <div class="container">
      <div class="header-wrapper">
        <!-- 
                    Вставляем компонент корзины (описан в файле cart-comp.js)
                    prop :showBasket ="basketIsActive"  отвечает за показ и скрытие корзины
                    атрибут ref = "cart" необходим что бы иметь доступ к этому компоненту  из родительского компонента 
                    подробнее об использовании $root $refs ref тут: https://ru.vuejs.org/v2/guide/components-edge-cases.html
                    @sentresult="setResultCart($event)" - отлавливаем событие "sentresult" которе генерирует компонент cart-comp,
                    по возникновение данного события вызываем метод setResultCart($event)(который определен в данном компоненте),
                    $event это аргумент который передал компонент cart-comp при генерации события "sentresult", в данном случае
                    в аргументе находится объект с полями полной стоимости и общего количества товаров в корзине              
                    -->
        <cart-comp :showBasket="basketIsActive" ref="cart" @sentresult="setResultCart($event)" />

        <div class="header-logo">
          <img src="http://placehold.it/50x50" alt="Логотип" />
        </div>

        <div class="header-menu">
          <ul class="header-ul">
            <li v-for="el of headerLinks" class="header-li">
              <a href="#" class="header__link">{{ el }}</a>
            </li>
          </ul>
        </div>

        <!--  вставляем компонент поиска (описан в файле search-comp.js)-->
        <search-comp />

        <!-- кнопка меняет состояние basketIsActive, которое через prop showBasket ="basketIsActive",
                    прокидывается в компонент корзины и управляет ее отображением 
                    -->
        <button @click="basketIsActive = !basketIsActive" class="basket-btn">
          Корзина {{ resultCart ? resultCart.allQuantity : '0' }}
        </button>
      </div>
    </div>
  </header>
</template>
<script>
import SearchComp from "js/search-comp"
import CartComp from "js/cart-comp"
export default {
  data: function() {
    return {
      headerLinks: ['Каталог', 'Акции', 'О нас', 'Контакты'],
      basketIsActive: false,
      // поля в котором будут хранится данные о корзине,
      // которые можно будет отобразить например в:
      // <button @click="basketIsActive = !basketIsActive" class="basket-btn">
      //    Корзина {{ resultCart ?  resultCart.allQuantity: '0'}}
      // </button>
      resultCart: null,
    }
  },
  // описываем объект с компонентами которые будут вложены в данный компонент
  components: {
    SearchComp,
    CartComp,
  },
  methods: {
    // метод для установки результатов расчета корзины в поле resultCart: null,
    // данные метод вызывается в следующем месте кода (там читаем описание работы)
    // <cart-comp :showBasket ="basketIsActive"  ref = "cart" @sentresult="setResultCart($event)" />
    setResultCart(e) {
      this.resultCart = e
    },
  },
}
</script>

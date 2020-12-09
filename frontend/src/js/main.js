import Vue from 'vue'
import CompHeader from 'js/header-comp'
import CompFooter from 'js/footer-comp'
import CompProducts from 'js/products'
import '@/css/style.css'

new Vue({
  el: '#myApp',
  data: {},

  components: {
    CompHeader,
    CompFooter,
    CompProducts,
  },

  methods: {
    // Метод для работы с сервером
    getJson(url, options) {
      return fetch(url, options || {})
        .then((result) => result.json())
        .catch((error) => {
          console.log(error)
        })
    },
  },
})

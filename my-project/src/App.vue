<template>
  <app-header />
   <router-view v-slot="{ Component }">
      <transition
        enter-active-class="page-enter"
        leave-active-class="page-leave"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  <app-footer />
</template>
<script>
import AppHeader from "@/components/Header";
import AppFooter from "@/components/Footer";
import AppLinks from "@/components/UsefulLinks";
export default {
  data() {
    return {
      allGoods: [],
      Cart: [],
    };
  },
  components: {
    AppHeader,
    AppFooter,
    AppLinks,
  },
  methods: {
    http(url, method = null, body = null) {
      return fetch(`/test/${url}`, {
        method: method || "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: body ? JSON.stringify(body) : null,
      })
        .then((data) => data.json())
        .catch(console.log);
    },
    addToCart(good) {
      const goodInCart = this.Cart.find(({ id }) => +id === good.id);
      if (!goodInCart) {
        const goodForCart = { ...good, amount: 1 };
        this.http("cart/add", "POST", goodForCart)
          .then(({ result }) => {
            if (result) {
              this.Cart.push(goodForCart);
            }
          })
          .catch(console.log);
      } else {
        this.http(`cart/inc/${good.id}`, "PUT")
          .then(({ result }) => {
            if (result) {
              const cartItem = this.Cart.find(({ id }) => +id === +good.id);
              if (cartItem) cartItem.amount++;
            }
          })
          .catch(console.log);
      }
    },
    removeFromCart(good) {
      if (good.amount > 1) {
        this.http(`cart/dec/${good.id}`, "PUT")
          .then(({ result }) => {
            if (result) {
              good.amount--;
            }
          })
          .catch(console.log);
      } else {
        this.http(`cart/delete/${good.id}`, "DELETE")
          .then(({ result }) => {
            if (result) {
              console.log(1);
              this.Cart = this.Cart.filter(({ id }) => +id !== +good.id);
            }
          })
          .catch(console.log);
      }
    },
  },
  mounted() {
    this.http("catalog").then((data) => {
      this.allGoods = data.map((good) => {
        good.img = require(`@/assets/img/${good.img}`);
        return good;
      });
    });

    this.http("cart").then((data) => {
      this.Cart = data;
    });
  },
  computed: {
    featuredGoogs() {
      return this.allGoods.filter((good) => +good.rating > 90).slice(0, 3);
    },
    totalAmount() {
      return this.Cart.reduce((all, good) => all + good.amount, 0);
    },
    totalSumm() {
      return this.Cart.reduce(
        (all, good) => all + good.price * good.amount,
        0
      );
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.router {
  margin-top: 120px;
}
</style>

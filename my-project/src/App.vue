<template>
  <app-header />
  <router-view />
  <app-footer />
</template>
<script>
import AppHeader from "@/components/header";
import AppFooter from "@/components/Footer";
import AppLinks from "@/components/UsefulLinks";
export default {
  data() {
    return {
      allGoods: [],
    };
  },
  components: {
    AppHeader,
    AppFooter,
    AppLinks,
  },
  methods: {
    httpGet(url) {
      return fetch(`/test/${url}`)
        .then((data) => data.json())
        .catch(console.log);
    },
  },
  mounted() {
    this.httpGet("catalog").then((data) => {
      this.allGoods = data;
    });
  },
  computed: {
    featuredGoogs() {
      return this.allGoods
        .filter((good, i) => +good.rating > 90 && i)
        .slice(0, 3);
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

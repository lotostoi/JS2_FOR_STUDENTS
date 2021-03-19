<template>
  <div class="page">
    <app-baner />
    <app-categores-baner />
    <app-featured-goods />
  </div>
</template>

<script>
import AppBaner from "@/components/Baner.vue";
import AppCategoresBaner from "@/components/CategoresBaner.vue";
import AppFeaturedGoods from "@/components/FeaturedGoods.vue";

export default {
  name: "Home",
  components: {
    AppBaner,
    AppCategoresBaner,
    AppFeaturedGoods,
  },
};
</script>
<style lang="scss">
.page {
  margin-top: 120px;
}
</style>

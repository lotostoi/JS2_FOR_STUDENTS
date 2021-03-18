<template>
  <section class="goods">
    <h3>Fetured Items</h3>
    <p>Shop for items based on what we featured in this week</p>
    <app-good v-for="good in $root.featuredGoogs" :key="good.id" />
    <router-link :to="{ name: 'Home' }">
      <span>Browse All Product</span>
      <img src="@/assets/img/arrow.png" alt="arrow" />
    </router-link>
  </section>
</template>

<script>
import AppGood from "@/components/Good";
export default {
  components: {
    AppGood,
  },
  mounted () {
    console.log(this.$root.featuredGoogs);
  }
};
</script>

<style lang="scss">
.goods {
  margin-top: 96px;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  & > h3 {
    color: #222222;

    font-size: 30px;
    font-weight: 700;
    line-height: 54px;

    letter-spacing: 0.75px;
  }
  & > p {
    color: #9f9f9f;

    font-size: 14px;
    font-weight: 400;
    text-align: center;
    letter-spacing: 0.35px;
    margin-bottom: 60px;
  }

  &__cont {
    justify-content: space-between;
    max-width: 1170px;
    width: 100%;
    min-height: 50px;
    display: flex;
    align-items: center;
    padding: 0 15px;
    margin: 0 auto;
    flex-wrap: wrap;
    box-sizing: border-box;
  }
}

@include mq(1100, max) {
  .goods {
    &__cont {
      justify-content: space-evenly;
      max-width: 1170px;
      width: 100%;
      min-height: 50px;
      display: flex;
      align-items: center;
      padding: 0 15px;
      margin: 0 auto;
      flex-wrap: wrap;
      box-sizing: border-box;
    }
    & > p {
      color: #9f9f9f;
      width: 84%;
      font-size: 14px;
      font-weight: 400;
      text-align: center;
      letter-spacing: 0.35px;
      margin-bottom: 60px;
    }
  }
}
</style>
<template>
  <section class="goods">
    <h3>Catalog</h3>
    <div class="goods__cont">
      <app-good
        v-for="good in $root.allGoods"
        :key="good.id"
        :good="good"
      />
    </div>
  </section>
</template>

<script>
import AppGood from "@/components/Good";
export default {
  components: {
    AppGood,
  },
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
<template>
  <section class="goods">
    <h3>Fetured Items</h3>
    <p>Shop for items based on what we featured in this week</p>
    <app-good v-for="good if $parent.">

    <div class="goods__cont">
      <div class="goods__good">
        <div class="img">
          <img src="@/assets/img/1.jpg" width="261" height="279" alt="good" />
          <div class="contCart">
            <button class="cart">
              <img
                src="@/assets/img/cart.png"
                width="23"
                height="22"
                alt="cart"
              />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
        <a href="#">Mango People T-shirt</a><span>$152.00</span>
      </div>
      <div class="goods__good">
        <div class="img">
          <img src="@/assets/img/2.jpg" width="261" height="279" alt="good" />
          <div class="contCart">
            <button class="cart">
              <img
                src="@/assets/img/cart.png"
                width="23"
                height="22"
                alt="cart"
              />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
        <a href="#">Mango People T-shirt</a><span>$252.00</span>
      </div>
      <div class="goods__good">
        <div class="img">
          <img src="@/assets/img/3.jpg" width="261" height="279" alt="good" />
          <div class="contCart">
            <button class="cart">
              <img
                src="@/assets/img/cart.png"
                width="23"
                height="22"
                alt="cart"
              />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
        <a href="#">Mango People T-shirt</a><span>$252.00</span>
      </div>
    </div>
    <router-link :to="{ name: 'Home' }">
      <span>Browse All Product</span>
      <img src="@/assets/img/arrow.png" alt="arrow" />
    </router-link>
  </section>
</template>

<script>
import AppGood from "@/components/good";
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
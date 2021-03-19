<template>
  <div class="goods__good">
    <div class="img">
      <img :src="good.img" width="261" height="279" alt="good" />
      <div class="contCart">
        <button class="cart" @click.prevent="$root.addToCart(good)">
          <img src="@/assets/img/cart.png" width="23" height="22" alt="cart" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
    <router-link :to="{}"> {{ good.title }} </router-link>
    <span>$ {{ good.price }} </span>
  </div>
</template>

<script>
export default {
  props: {
    good: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.goods {
  &__good {
    display: flex;
    text-decoration: none;
    flex-direction: column;
    margin-bottom: 40px;
    border: 1px solid rgba(128, 128, 128, 0);
    transition: border-color 0.5s, box-shadow 0.5s;
    &:hover {
      box-shadow: 0 5px 8px rgba(0, 0, 0, 0.16);
      border-color: rgba(128, 128, 128, 0.329);
    }
    & .img {
      display: flex;
      position: relative;
      text-decoration: none;
      & > img {
        width: 261px;
        height: 279px;
      }
      & > div {
        position: absolute;
        background-color: rgba(128, 128, 128, 0.856);
        width: 100%;
        height: 100%;
        display: flex;
        opacity: 0;
        transition: opacity 0.5s;
        justify-content: center;
        align-items: center;
        & > button {
          width: 123px;
          height: 39px;
          border: 1px solid #ffffff;

          background-color: transparent;
          display: flex;
          justify-content: center;
          align-items: center;
          outline: none;
          &:hover {
            background-color: $pinc;
          }
          &:active {
            background-color: $pincHover;
          }
          & > span {
            margin-left: 10px;
            color: #ffffff;

            font-size: 13px;
            font-weight: 700;
          }
        }
      }
      &:hover > div {
        opacity: 1;
      }
    }
    & > a {
      text-decoration: none;
      margin: 18px 5px;
      display: flex;
      color: #222222;

      font-size: 14px;
      font-weight: 400;
      text-transform: uppercase;
      &:hover {
        color: $pinc;
      }
      &:active {
        color: $pincActive;
      }
    }
    & > span {
      margin: 0 5px;
      display: flex;
      color: #222222;
      font-size: 14px;
      font-weight: 400;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
  }
  & > a {
    text-decoration: none;
    outline: none;
    border: none;
    width: 212px;
    height: 48px;
    background-color: #f16d7f;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.5s;
    margin-bottom: 110px;
    &:hover {
      background-color: $pincActive;
    }
    & > span {
      color: #ffffff;
      font-size: 16px;
      font-weight: 700;
      letter-spacing: 0.4px;
    }
    & > img {
      margin-left: 9px;
    }
  }
}
@include mq(1100, max) {
  .goods {
    &__good {
      & .img {
        display: flex;
        position: relative;
        text-decoration: none;
        & > img {
          width: calc(261px * 1);
          height: calc(279px * 1);
        }
        & > div {
          position: absolute;
          background-color: rgba(128, 128, 128, 0.856);
          width: 100%;
          height: 100%;
          display: flex;
          opacity: 0;
          transition: opacity 0.5s;
          justify-content: center;
          align-items: center;
          & > button {
            width: 123px;
            height: 39px;
            border: 1px solid #ffffff;

            background-color: transparent;
            display: flex;
            justify-content: center;
            align-items: center;
            outline: none;
            &:hover {
              background-color: $pinc;
            }
            &:active {
              background-color: $pincHover;
            }
            & > span {
              margin-left: 10px;
              color: #ffffff;

              font-size: 13px;
              font-weight: 700;
            }
          }
        }
        &:hover > div {
          opacity: 1;
        }
      }
      & > a {
        text-decoration: none;
        margin: 18px 5px;
        display: flex;
        color: #222222;

        font-size: 14px;
        font-weight: 400;
        text-transform: uppercase;
        &:hover {
          color: $pinc;
        }
        &:active {
          color: $pincActive;
        }
      }
      & > span {
        margin-left: 5px;
        display: flex;
        color: #222222;

        font-size: 14px;
        font-weight: 400;
        text-transform: uppercase;
        margin-bottom: 18px;
      }
    }
    & > a {
      text-decoration: none;
      outline: none;
      border: none;
      width: 212px;
      height: 48px;
      background-color: #f16d7f;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.5s;
      margin-bottom: 110px;
      &:hover {
        background-color: $pincActive;
      }
      & > span {
        color: #ffffff;

        font-size: 16px;
        font-weight: 700;

        letter-spacing: 0.4px;
      }
      & > img {
        margin-left: 9px;
      }
    }
  }
}
</style>
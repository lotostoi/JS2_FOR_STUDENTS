<template>
  <header class="header">
    <div class="header__cont">
      <router-link class="header__logo" :to="{ name: 'Home' }">
        <img src="@/assets/img/logo.png" alt="logo" />
        <p>BRSN<span>D</span></p>
      </router-link>
      <nav class="header__nav">
        <router-link :to="{ name: 'Home' }">Main</router-link>
        <router-link :to="{ name: 'Home' }">Catalog</router-link>
      </nav>
      <div class="header__search">
        <input type="text" class="fieldeSearch" placeholder="Search for item" />
        <button type="submit">
          <i class="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
      <div class="header__cart">
        <img src="@/assets/img/cart_header.svg" alt="cart" />
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  width: 100%;
  border-bottom: 1px solid #ececec;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 500;

  &__cont {
    justify-content: space-between;
    max-width: 1170px;
    width: 100%;
    min-height: 100px;
    display: flex;
    align-items: center;
    padding: 0 15px;
    margin: 0 auto;
    flex-wrap: wrap;
    box-sizing: border-box;
  }
  &__logo {
    order: 1;
    display: flex;
    align-items: center;
    text-decoration: none;
    &:hover p,
    &:hover img {
      cursor: pointer;
      transform: scale(1.1);
      transition: transform 0.3s;
    }
    &:active p,
    &:active img {
      transform: scale(1);
      transition: transform 0.5s;
    }
    & > p {
      font-size: 27px;
      font-weight: 300;
      margin-left: 15px;
      color: $base;

      & > span {
        color: $pinc;
        font-weight: 600;
      }
    }
  }
  &__nav {
    margin: 0 auto;
    display: flex;
    order: 2;
    & > a {
      display: flex;
      margin: 0 10px;
      text-decoration: none;
      color: $base;
      &:hover {
        color: darken($pincHover, 20%);
      }
    }
  }
  &__search {
    order: 2;
    margin: 0 10px 0 auto;
    height: 38px;
    display: flex;
    align-items: center;

    & > .fieldeSearch {
      padding: 0 16px;
      max-width: 280px;
      width: 100%;
      height: 100%;
      border: 1px solid #e6e6e6;
      outline: none;
      border-radius: 5px 0 0 5px;
      color: rgb(53, 53, 53);
      &:focus {
        background-color: rgb(202, 240, 202);
      }
    }
    & > button {
      box-sizing: content-box;
      height: 100%;
      display: flex;
      border: 1px solid #e6e6e6;
      border-radius: 0 5px 5px 0;
      background-color: transparent;
      outline: none;
      border-left: none;
      align-items: center;
      justify-content: center;
      padding: 0 12px;
      color: #a4a4a4;
      font-size: 16px;
      &:hover i {
        cursor: pointer;
        color: $pinc;
      }
      &:active i {
        cursor: pointer;
        color: $pincActive;
      }
    }
  }
  &__cart {
    order: 3;
    margin: 0 20px 0 20px;
    display: flex;
    width: 40px;
    height: 38px;
    padding: 0 5px;
    border-radius: 3px;
    &:hover {
      background-color: $pinc;
    }
    &:active {
      background-color: $pincActive;
    }
  }
}

@include mq(788, max) {
  .header {
    padding: 20px;
    &__logo {
      order: 1;
      display: flex;
      align-items: center;
      text-decoration: none;
      &:hover p,
      &:hover img {
        cursor: pointer;
        transform: scale(1);
        transition: transform 0.3s;
      }
      &:active p,
      &:active img {
        transform: scale(1);
        transition: transform 0.5s;
      }
    }
    &__search {
      order: 4;
      margin: 10px auto;
      & > .browse {
        display: none;
      }
      & > .fieldeSearch {
        border-radius: 5px 0 0 5px;
        border-left: 1px solid #e6e6e6;
      }
      & > button {
        box-sizing: content-box;
        height: 100%;
        display: flex;
        border: 1px solid #e6e6e6;
        border-radius: 0 5px 5px 0;
        background-color: transparent;
        outline: none;
        border-left: none;
        align-items: center;
        justify-content: center;
        padding: 0 12px;
        color: #a4a4a4;
        font-size: 16px;
        &:hover i {
          cursor: pointer;
          color: #a4a4a4;
        }
        &:active i {
          cursor: pointer;
          color: #a4a4a4;
        }
      }
    }
    &__cart {
      order: 3;
      margin: 0 20px 0 auto;
      display: flex;
      width: 40px;
      height: 38px;
      padding: 0 5px;
      border-radius: 3px;
      &:hover {
        background-color: transparent;
      }
      &:active {
        background-color: transparent;
      }
    }
    &__myAccount {
      order: 3;
      background-color: #f16d7f;
      color: white;
      justify-content: center;
      transition: background-color 0.3s;
      &:hover {
        cursor: pointer;
        background-color: $pinc;
      }
      & > div {
        display: none;
      }
    }
  }
}
@include mq(458, max) {
  .header {
    padding: 20px;
    &__logo {
      width: auto;
      order: 1;
    }
    &__search {
      order: 4;
      margin: 10px auto;
    }
    &__cart {
      margin: 10px 0 10px auto;
    }
    &__myAccount {
      margin: 10px auto;
      order: 3;
    }
  }
}
</style>
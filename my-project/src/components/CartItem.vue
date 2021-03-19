<template>
  <tr class="trgood">
    <td>
      <a href="#">
        <img :src="cartItem.img" alt="photo" />
      </a>
      <div class="description">
        <h4>{{ cartItem.title }}</h4>
        <!--  <span>Color: Red</span><span>Size: Xll</span> -->
      </div>
    </td>
    <td>${{ cartItem.price }}</td>
    <td>
      <span>{{ cartItem.amount }}</span>
    </td>
    <td>FREE</td>
    <td>${{ cartItem.amount * cartItem.price }}</td>
    <td class="dec" @click.prevent="$root.removeFromCart(cartItem)">
      <i class="fa fa-trash" aria-hidden="true"></i>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    cartItem: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>
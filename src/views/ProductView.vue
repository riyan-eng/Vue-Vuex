<template>
  <div class="about">
    <h1>This is an product page</h1>
    <ProductListOneVue />
    <hr>
    <ProductListTwoVue />
  </div>
</template>

<script>
import ProductListOneVue from '@/components/ProductListOne.vue';
import ProductListTwoVue from '@/components/ProductListTwo.vue';
export default {
  components: {
    ProductListOneVue,
    ProductListTwoVue
  },
}
</script>
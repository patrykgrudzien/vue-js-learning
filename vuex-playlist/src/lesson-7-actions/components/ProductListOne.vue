<template>
  <div id="product-list-one">
    <h2>Product List One</h2>

    <ul>
      <li v-for="product in saleProducts">
        <span class="name">{{ product.name }}</span>
        <span class="price">{{ product.price }}$</span>
      </li>
    </ul>
    <!-- we can also pass here a parameter -->
    <button @click="reducePriceMethod(4)">Reduce Price</button>
  </div>
</template>

<script>
  export default {
    computed: {
      // it's function as we're COMPUTING data here
      products() {
        return this.$store.state.products;
      },
      saleProducts() {
        return this.$store.getters.saleProductsFromGetter;
      }
    },
    methods: {
      // we want to EDIT data DIRECTLY in the STORE
      reducePriceMethod(amount) {
        // instead of committing directly here from component:
        // this.$store.commit('reducePrice');
        // we want to DISPATCH an ACTION INSTEAD !!!
        this.$store.dispatch('reducePriceAction', amount);
        // after comma we can specify parameter which comes from method
      }
    }
  }
</script>

<style scoped>
  #product-list-one {
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
  }

  #product-list-one ul {
    padding: 0;
  }

  #product-list-one li {
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.7);
  }

  .price {
    font-weight: bold;
    color: #E8800C;
  }
</style>

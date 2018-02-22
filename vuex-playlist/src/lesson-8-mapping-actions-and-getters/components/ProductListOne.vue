<template>
  <div id="product-list-one">
    <h2>Product List One</h2>

    <ul>
      <li v-for="product in saleProductsFromGetter">
        <span class="name">{{ product.name }}</span>
        <span class="price">{{ product.price }}$</span>
      </li>
    </ul>
    <button @click="reducePriceAction(4)">Reduce Price</button>
  </div>
</template>

<script>
  // we have to import mapActions and mapGetters from Vuex
  import { mapActions } from 'vuex';
  import { mapGetters } from 'vuex';

  export default {
    // instead of defining EACH GETTER in COMPUTED, we can map them here which is the easier way if we have MANY GETTERS
    computed: {
      products() {
        return this.$store.state.products;
      },
      // ... it's SPREAD operator
      ...mapGetters([
        // it's gonna grab getter(s) from store and map to computed properties
        'saleProductsFromGetter'
      ])
    },
    // instead of defining EACH ACTION in METHODS, we can map them here which is the easier way if we have MANY ACTIONS
    methods: {
      /*

      reducePriceMethod(amount) {
        this.$store.dispatch('reducePriceAction', amount);
      }

      */

      // ... it's SPREAD operator
      ...mapActions([
        'reducePriceAction'
      ])
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

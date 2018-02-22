<template>
  <div id="product-list-one">
    <h2>Product List One</h2>

    <ul>
      <li v-for="product in saleProducts">
        <span class="name">{{ product.name }}</span>
        <span class="price">{{ product.price }}$</span>
      </li>
    </ul>
    <button @click="reducePriceMethod">Reduce Price</button>
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
      reducePriceMethod() {
        /*
         * this is NOT THE BEST way to do it (look below) !!!
         * because during debugging (in chrome dev tool) we don't see which method is invoked to reduce a price
         * instead we're gonna use MUTATIONS (they can change date in the store and it can be TRACKED !!!)

        this.$store.state.products.forEach(product => {
          product.price -= 1;
        });

        */

        // WE HAVE TO COMMIT A MUTATION !!!
        this.$store.commit('reducePriceMutation');
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

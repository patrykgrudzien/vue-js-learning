<template>
  <div id="product-list-one">
    <h2>Product List One</h2>

    <ul>
      <li v-for="product in saleProducts">
        <span class="name">{{ product.name }}</span>
        <span class="price">{{ product.price }}$</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    computed: {
      // it's function as we're COMPUTING data here
      products() {
        return this.$store.state.products;
      },
      // to show "saleProducts" in product-list-two,
      // we would have to copy this block and paste it there which is not a good idea
      // TO AVOID SUCH SITUATION WE CAN DO THIS CALCULATION AS A "GETTER" ON THE STORE !!!
      saleProducts() {
        return this.$store.state.products.map(product => {
          return {
            name: `**${product.name}**`,
            price: product.price / 2
          };
        });
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

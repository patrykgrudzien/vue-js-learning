import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// store is just a data in our application
export const store = new Vuex.Store({
  state: {
    products: [
      {
        name: 'Banana Skin',
        price: 20
      },
      {
        name: 'Shiny Star',
        price: 40
      },
      {
        name: 'Green Shells',
        price: 60
      },
      {
        name: 'Red Shells',
        price: 80
      }
    ]
  },
  getters: {
    // we can have this as many getters as we want
    // it's a function which takes state as parameter
    saleProductsFromGetter: state => {
      return state.products.map(product => {
        return {
          name: `**${product.name}**`,
          price: product.price / 2
        };
      });
    }
  },
  mutations: {
    // we can have as many mutations as we need
    reducePriceMutation: state => {
      state.products.forEach(product => {
        product.price -= 1;
      });
    }
  }
});

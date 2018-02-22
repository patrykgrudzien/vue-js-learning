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
    saleProductsFromGetter: state => {
      return state.products.map(product => {
        return {
          name: `** ${product.name} **`,
          price: product.price / 2
        };
      });
    }
  },
  mutations: {
    reducePriceMutation: (state, amountPayload) => {
      state.products.forEach(product => {
        product.price -= amountPayload;
      });
    }
  },
  actions: {
    // context is kind of store but not exactly
    reducePriceAction: (context, amountPayload) => {
      setTimeout(function () {
        // we call here mutation itself
        context.commit('reducePriceMutation', amountPayload);
        // after comma we can specify parameter which comes from method in component
      }, 2000);
    }
  }
});

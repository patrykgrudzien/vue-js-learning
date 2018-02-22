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
          name: `**${product.name}**`,
          price: product.price / 2
        };
      });
    }
  },
  /*
   * One of the limitations of mutations is that we SHOULDN'T use any ASYNCHRONOUS tasks WITHIN them !!!
   * E.g. inside mutation if we would like to reach out server and grab some information/data
   * (it's asynchronous task and it needs some time to complete)
   */
  mutations: {
    /*
     * We wanna simulate asynchronous task here by using "setTimeout()" function.
     *
     * In Vuex tab (chrome dev tool) we can see that mutation is done immediately
     * but response (price changed) comes after 3 seconds.
     *
     * It leads to situation where we're not able to properly track methods executions and be sure
     * which method did what...
     *
     * As result -> WE SHOULDN'T PUT ASYNCHRONOUS CODE INSIDE MUTATIONS !!! (instead use ACTIONS) !!!
     *
     * ACTIONS layer sits between component that COMMIT MUTATION and MUTATION in STORE itself.
     */
    reducePriceMutation: (state, amountPayload) => {
      /*

      setTimeout(function () {
        state.products.forEach(product => {
          product.price -= 1;
        });
      }, 3000);

      */
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

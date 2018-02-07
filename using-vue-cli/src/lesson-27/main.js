import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

// To use VUE-RESOURCE we need to do following:
Vue.use(VueResource); // it's registered GLOBALLY

new Vue({
  el: '#app',
  render: h => h(App)
});

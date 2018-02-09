import Vue from 'vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import allRoutes from './routes/allRoutes'

import App from './App.vue'

Vue.use(VueAxios, axios);
Vue.use(VueRouter);

// We have to create NEW INSTANCE of VueRouter
const myRouter = new VueRouter({
  routes: allRoutes,
  // setting here HISTORY mode, we HAVE to setup server to returns us by default index.html !!!
  // using "npm run dev" it is configured automatically
  mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: myRouter
});

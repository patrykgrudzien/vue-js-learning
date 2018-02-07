import Vue from 'vue'
import App from './App.vue'

// ------------ Custom Directives (registered GLOBALLY) ------------ //

// OLD WAY without ES6 and arrow function
Vue.directive('randomFontColorOldWay', {
  /*
   * As we remember components has its lifecycle hooks.
   *
   * We're gonna use lifecycle called -> bind()
   * bind() : called only once, when the directive is first bound to the element.
   * This is where you can do one-time setup work.
   *
   * e.g.
   *
   * v-on:click="xxx"
   *
   * :click -> it's an ARGUMENT
   * xxx -> it's VALUE
   */
  bind(el, binding, vnode) {
    el.style.color = '#' + Math.random().toString().slice(2, 8);
  }
});

// NEW WAY using ES6
Vue.directive('randomFontColor', (el, binding, vnode) => {
  el.style.color = '#' + Math.random().toString().slice(2, 8);

  if (binding.arg === 'capitalLetters') {
    el.style.textTransform = 'uppercase';
    el.style.fontSize = '20px';
  }
});


Vue.directive('columnWidth', (el, binding) => {
  if (binding.value === 'wide') {
    el.style.maxWidth = '1200px';
  } else if (binding.value === 'narrow') {
    el.style.maxWidth = '600px';
  }
});

// ------------ Custom Filters (registered GLOBALLY) ------------ //
Vue.filter('to-uppercase', function (valueFromH2) {
  return valueFromH2.toUpperCase();
});

Vue.filter('cut-text', function (valueFromArticle) {
  return valueFromArticle.slice(0, 100) + '...';
});

new Vue({
  el: '#app',
  render: h => h(App)
});

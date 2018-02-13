import Vue from 'vue'
import App from './App.vue'
// import App from './Exercise11.vue'

// Globally-registered filter (for 'App.vue')
Vue.filter('toLowercase', (value) => {
  return value.toLowerCase();
});

// Globally-registered filter (for 'Exercise11.vue')
Vue.filter('lengthOfWord', (value) => {
  return value + ' (' + value.length + ')';
});

// Globally-registered mixin
Vue.mixin({
  created() {
    console.log('"Created" lifecycle hook for global mixin.');
  },
});

new Vue({
  el: '#app',
  render: h => h(App)
})

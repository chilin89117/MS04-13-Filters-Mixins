import Vue from 'vue'
// import App from './App.vue'
import App from './Exercise11.vue'

// Globally-registered filter (for 'App.vue')
Vue.filter('toLowercase', (value) => {
  return value.toLowerCase();
});

// Globally-registered filter (for 'Exercise11.vue')
Vue.filter('lengthOfWord', (value) => {
  return value + ' (' + value.length + ')';
});

// Globally-registered mixin (appears in every instance/component, NOT recommended)
Vue.mixin({
  created() {
    console.log('"Created" lifecycle hook for global mixin.');
  },
});

// "Created" lifecycle hooks appear in the following order (using 'App.vue'):
// 1. new Vue in 'main.js' (global)
// 2. 'render()' calls 'App.vue' (global)
// 3. 'App.vue' calls 'fruitMixin' (local)
// 4. 'App.vue' calls 'List.vue' (global)
// 5. 'List.vue' calls 'fruitMixin' (local)
// 6. 'created' hook for 'List.vue' (local)

new Vue({
  el: '#app',
  render: h => h(App)
})

<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>MS04-09 Filters & Mixins</h1>
        <h3>{{text | toLowercase}}</h3>
        <hr>
        <input v-model="filterText">
        <br><br>
        <ul>
          <li v-for="fruit in filteredFruits">{{fruit}}</li>
        </ul>
        <!-- Changes to data in mixin are not shared -->
        <button @click="fruits.push('Berries')">Add Fruit</button>
        <hr>
          <appList></appList>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>"Created" lifecycles</h1>
        <br><br>
        <img src="./MS04-09-Lifecycles.png" width="500" height="240">
      </div>
    </div>
  </div>
</template>

<script>
  import List from './List.vue'
  import {fruitMixin} from './fruitMixin.js'    // import mixin as local copy

  export default {
    data() {
      return {
        text: 'Hello World!',
      };
    },
    filters: {                      // Locally-registered filters
      toUppercase(value) {
        return value.toUpperCase();
      },
    },
    components: {
      appList: List,
    },
    mixins: [fruitMixin],
  };
</script>

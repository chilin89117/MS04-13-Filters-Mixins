<template>
  <div>
    <h1>List.vue Component</h1>
    <input v-model="filterText">
    <br><br>
    <ul>
      <li v-for="(fruit, index) in filteredFruits" :key="index">{{fruit}}</li>
    </ul>
  </div>
</template>

<script>
  import {fruitMixin} from './fruitMixin.js'

  export default {
    mixins: [fruitMixin],
    created() {
      console.log('"Created" lifecycle hook for "List.vue".');
    },
  };
</script>

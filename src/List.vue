<template>
<div>
  <h1>List.vue Component</h1>
  <input v-model="filterText">
  <br><br>
  <ul>
    <li v-for="fruit in filteredFruits">{{fruit}}</li>
  </ul>
</div>
</template>

<script>
  import {fruitMixin} from './fruitMixin.js'    // import mixin as local copy

  export default {
    mixins: [fruitMixin],
    created() {
      // Will be shown after the 2 'Created' lifecycle hooks for mixin
      console.log('"Created" lifecycle hook for "List.vue".');
    },
  };
</script>

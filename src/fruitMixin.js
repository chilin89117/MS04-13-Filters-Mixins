// export a JS object containing data to be shared
export const fruitMixin = {
  data() {
    return {
      fruits: [
        'Apple', 'Banana', 'Mango', 'Melon',
      ],
      filterText: '',
    };
  },
  computed: {                     // Better solution/performance than filters
    filteredFruits() {
      return this.fruits.filter((fr) => {
        return fr.match(this.filterText);
      });
    },
  },
  created() {
    // Will be shown twice because mixin is used in 'App.vue' & 'List.vue'
    console.log('"Created" lifecycle hook for "fruitMixin".');
  },
};

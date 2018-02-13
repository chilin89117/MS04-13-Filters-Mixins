export const fruitMixin = {
  data() {
    return {
      fruits: [
        'Apple', 'Banana', 'Mango', 'Melon',
      ],
      filterText: '',
    };
  },
  computed: {      // Better solution/performance than filters
    filteredFruits() {
      return this.fruits.filter((fr) => {
        return fr.match(this.filterText);
      });
    },
  },
  created() {
    console.log('"Created" lifecycle hook for "fruitMixin".');
  },
};

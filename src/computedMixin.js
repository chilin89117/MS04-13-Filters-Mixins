export const computedProps = {
  computed: {
    reverseText() {
      return this.textToReverse.split("").reverse().join("");
    },
    lengthOfWord2() {
      return this.wordWithLength + ' (' + this.wordWithLength.length + ')';
    },
  },
};

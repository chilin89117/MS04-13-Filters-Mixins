<template>
  <div class="container">
    <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <h1>Exercise 11: Filters & Mixins</h1>
            <h3>1. Local Filter to Reverse Text</h3>
            <h4>{{textToReverse | rev}}</h4>
            <hr>
            <h3>2. Global Filter to Append Length of Word</h3>
            <h4>{{wordWithLength | lengthOfWord}}</h4>
            <hr>
            <h3>3a. Reverse Text with Computed Property</h3>
            <h4>{{reverseText}}</h4>
            <hr>
            <h3>3b. Append Length of Word with Computed Property</h3>
            <h4>{{lengthOfWord2}}</h4>
        </div>
    </div>
  </div>
</template>

<script>
  import {computedProps} from './computedMixin.js'

  export default {
    data() {
      return {
        textToReverse: 'Hello World!',
        wordWithLength: 'supercalifragilisticexpialidocious',
      };
    },
    filters: {
      rev(value) {
        return value.split("").reverse().join("");
      },
    },
    mixins: [computedProps],
  };
</script>

<style>
  h4 {
    color: blue;
  }
</style>

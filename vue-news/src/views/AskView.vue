<template>
    <div>
      <list-item></list-item>
      </div>
  </template>
  
  <script>
  import ListItem from '../components/ListItem.vue';
  import ListMixin from '../mixins/ListMixin.js';
//   import bus from '../utils/bus.js';
  
  export default {
    components: {
      ListItem,
    },
    mixins: [ListMixin],
    // mounted() {
    //     bus.$emit('end:spinner');
    // }
  }
  </script>
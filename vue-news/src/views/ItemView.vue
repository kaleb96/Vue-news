<template>
  <div>
      <p>title: {{  fetchedItem.title }}</p>
      <div>{{ fetchedItem.content }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // itemInfo() {
    //   return this.$store.state.item;
    // }
    ...mapGetters(['fetchedItem']),
  },  
  created() {
    console.log(this.$route.params.id);
    const userId = this.$route.params.id;

    this.$store.dispatch('FETCH_ITEM', userId);
  }
}
</script>

<style>

</style>
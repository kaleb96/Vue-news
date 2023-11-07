<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'

export default {
  components: {
    ListItem,
  },
  created() {
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style>
</style>
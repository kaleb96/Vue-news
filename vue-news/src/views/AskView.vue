<template>
  <div>
    <div v-for="item in ask">{{ item.title }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      ask: state => state.ask
    })
  },

  created() {
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>


<style>

</style>
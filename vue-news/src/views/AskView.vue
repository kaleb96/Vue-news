<template>
  <div>
    <p v-for="item in fetchedAsk">
      <a v-bind:href="item.url">{{ item.title }}</a>
      <small>{{ item.time_age }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    //1 computed 를 통한 방식
    // ask() {
    //   return this.$store.state;
    // }

    //2 mapState를 사용한 방식
    // ...mapState({
    //   ask: state => state.ask
    // })

    //3 mapGetters에서 객체를 통한 방식
    // ...mapGetters({
    //     fetchedAsk: 'fetchedAsk'
    // })

    //4 mapGetters에서 Array를 통한 방식
    ...mapGetters([
      'fetchedAsk'
    ])
  },

  created() {
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>


<style>

</style>
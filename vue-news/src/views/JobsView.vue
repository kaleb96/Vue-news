<template>
  <div>
    <p v-for="job in fetchedJobs">
      <a v-bind:href="job.url">{{ job.title }}</a>
      <small>&nbsp; {{ job.domain }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from  'vuex'

export default {
  computed: {
    ...mapGetters([
        'fetchedJobs'
    ])
  },
  created() {
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style>

</style>
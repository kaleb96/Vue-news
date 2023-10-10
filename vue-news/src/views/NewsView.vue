<template>
  <div>
     <p v-for='user in fetchedNews'>
      <a v-bind:href="user.url">
        {{ user.title }}
      </a>
      <small>
        {{ user.time_ago }} by 
        <!-- <router-link v-bind:to="'/user/' + user.user">{{ user.user }}</router-link> -->  <!-- ES5-->
        <router-link v-bind:to="`/user/${user.user}`">{{  user.user }}</router-link> <!-- ES6-->
      </small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'fetchedNews'
    ])
  },
  created() {
    this.$store.dispatch('FETCH_NEWS');
    // fetchNewsList()
    //   .then(response => this.users = response.data)
    //   .catch(error => console.log(error))
    }
}
</script>

<style>

</style>
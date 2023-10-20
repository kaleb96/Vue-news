<template>
  <div>
    <ul class="news-list">
      <li v-for="user in fetchedNews" class="post">
        <div class="points">
          {{ user.points }}
        </div>
        <div>
          <p class="news-title">
            <a v-bind:href="user.url">
              {{ user.title }}
            </a>  
          </p>
          <small class="link-text">
          by 
            <router-link v-bind:to="`/user/${user.user}`" class="link-text">{{  user.user }}</router-link> <!-- ES6-->
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
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
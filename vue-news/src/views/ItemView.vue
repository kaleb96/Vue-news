<template>
  <div>
      <section>
          <user-profile :userInfo="fetchedItem">
              <router-link slot="username" v-bind:to="`/user/${fetchedItem.user}`">
                {{ fetchedItem.user }}
              </router-link>
            <template slot="time">{{ 'Posted ' + fetchedItem.time_ago }}</template>
          </user-profile>
      </section>
      <section>
        <!-- 질문 댓글 -->
        <div v-html="fetchedItem.content"></div>
      </section>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters(['fetchedItem']),
  },  
  created() {
    console.log(this.$route.params.id);
    const userId = this.$route.params.id;

    this.$store.dispatch('FETCH_ITEM', userId);
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-itmes: center;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>
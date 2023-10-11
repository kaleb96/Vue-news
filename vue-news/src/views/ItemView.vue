<template>
  <div>
      <!-- <p>title: {{  fetchedItem.title }}</p>
      <div>{{ fetchedItem.content }}</div> -->
      <section>
          <!-- 질문 상세 정보 -->
          <div class="user-container">
            <div>
              <i class="fa-solid fa-user"></i>
            </div>
            <div class="user-description">
              <router-link v-bind:to="`/user/${fetchedItem.user}`">
                  {{ fetchedItem.user }}
              </router-link>
              <div class="time">
                 {{ fetchedItem.time_ago}}
              </div>
           </div>
          </div>
          <h2>{{ fetchedItem.title }}</h2>  
      </section>
      <section>
        <!-- 질문 댓글 -->
        <div v-html="fetchedItem.content"></div>
        <!-- {{  fetchedItem.content }} -->
      </section>
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
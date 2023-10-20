<template>
  <div>
    <ul class="ask-list">
      <li v-for="item in fetchedAsk" class="post">
        <div class="points">
          {{ item.points }}
        </div>
        <div>
          <p class="ask-title">
            <router-link v-bind:to="`/item/${item.id}`" >{{ item.title }}</router-link>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by 
            <router-link v-bind:to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
          </small>
        </div>
      </li>
    </ul>
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


<style scoped>
.ask-list {
  margin: 0;
  padding: 0;

}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}

.ask-title {
  margin:0;
}

.link-text {
  color: #828282
}
</style>
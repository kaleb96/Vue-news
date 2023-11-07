<template>
  <div>
    <ul class="news-list">
      <li v-for="item in listItems" class="post">
        <div class="points">
          <!-- 포인트 영역 -->
          {{ item.points || 0 }}
        </div>
        <div>
          <!-- 타이틀 영역 -->
          <p class="news-title">
            <!-- 분기처리 1 -->
            <template v-if="item.domain">
              <a v-bind:href="item.url">
              {{ item.title }}
            </a>
            </template>
          
            <!-- 분기처리 2 -->
            <template v-else>
              <router-link v-bind:to="`item/${item.id}`">
                {{ item.title }}
              </router-link>
            </template>  
          </p>
          <small class="link-text">
            {{ item.time_ago }}by 
            <router-link 
              v-if="item.user"
              v-bind:to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
              <a :href="item.url" v-else>
                {{ item.domain }}
              </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
computed: {
    
  listItems() {
      const name = this.$route.name;

      if(name === 'news') {
        return this.$store.state.news;
      } else if (name == 'ask') {
        return this.$store.state.ask;
      } else if (name =='jobs') {
        return this.$store.state.jobs;
      }
    }
}
}
</script>

<style scoped>
.news-list {
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

.news-title {
  margin:0;
}

.link-text {
  color: #828282
}
</style>
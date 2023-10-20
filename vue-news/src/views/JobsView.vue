<template>
  <div>
    <ul class="job-list">
      <li v-for="job in fetchedJobs" class="post">
        <div class="comments_count">
          {{ job.comments_count }}
        </div>
        <div>
          <p class="job-title">
            <a v-bind:href="job.url">{{ job.title }}</a>
          </p>
          <small class="link-text">
            {{ job.time_ago }} by
              <a :href="job.url"> {{ job.domain }}</a>
          </small>
        </div>
      </li>
    </ul>
    <p >
     
     
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
.job-list {
  margin: 0;
  padding: 0;

}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.comments_count {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}

.job-title {
  margin:0;
}

.text {
  color: #828282
}
</style>
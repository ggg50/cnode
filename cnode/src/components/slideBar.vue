<template>
  <div class="slidebarWrapper">
    <div class="userInfo">
      <div class="topbar">作者</div>
      <img :src="userInfo.avatar_url" alt="">
      <span>{{userInfo.loginname}}</span>
      <span class="score">积分:{{userInfo.score}}</span>
    </div>
    <div class="recentTopics">
      <div class="topbar">作者最近主题</div>
      <ul>
        <li v-for="topic in topicLimitBy5">
          {{topic.title}}
        </li>
      </ul>
    </div>
    <div class="recentReplies">
      <div class="topbar">作者最近回复</div>
      <ul>
        <li v-for="reply in replyLimitBy5">
          {{reply.title}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: "SlideBar",
  data(){
    return {
      userInfo: {},

    }
  },
  methods: {
    getData() {
      this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
      .then(res=> this.userInfo = res.data.data)
      .catch(error=> alert(error))
    }
  },
  computed: {
    topicLimitBy5(){
      if (this.userInfo.recent_topics) {
        return this.userInfo.recent_topics.slice(0, 5);
      }
    },

    replyLimitBy5(){
      if (this.userInfo.recent_replies) {
        return this.userInfo.recent_replies.slice(0, 5);
      }
    }
  },



  beforeMount() {
    this.getData();
  }
}

</script>

<style scoped>

</style>

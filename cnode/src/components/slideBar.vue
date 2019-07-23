<template>
  <div class="slidebarWrapper">
    <div class="userInfo">
      <div class="topbar">作者</div>
      <router-link :to="{
        name:'userInfo',
        params: userInfo.loginname
        }">
        <img :src="userInfo.avatar_url" alt="">
      </router-link>

      <span class="loginname">{{userInfo.loginname}}</span>
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
.slidebarWrapper {
  width: 290px;
  font-size: 14px;
  float: right;
  margin-right: 66px;
}

.userInfo, .recentTopics, .recentReplies {
  background-color: #ffffff;
  border-radius: 5px;
  margin-bottom: 15px;
  overflow: hidden;
}

.topbar {
  color: #444;
  background-color: #f6f6f6;
  padding: 10px;
  font-size: 13px;
}

.userInfo img {
  width: 48px;
  height: 48px;
  border-radius: 3px;
  margin: 10px;
  vertical-align: middle;
}

.userInfo .loginname {
  color: #778087;
  font-size: 16px;
}

.userInfo .score {
  display: block;
  margin: 10px;
}


.recentTopics ul, .recentReplies ul {
  color: #778087;
  font-size: 14px;
  line-height: 30px;
  margin: 15px 10px 25px 10px;
}

.recentTopics ul li, .recentReplies ul li {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}


</style>

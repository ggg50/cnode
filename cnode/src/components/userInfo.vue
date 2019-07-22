<template>
  <div class="userInfo">
    <div class="homePage">
      <p>主页</p>
      <div class="topbar">作者</div>
      <img :src="userInfo.avatar_url" alt="">
      <span>{{userInfo.loginname}}</span>
      <span class="score">积分:{{userInfo.score}}</span>
      <p>注册时间{{userInfo.create_at | formatDate}}</p>
    </div>
    <div class="recentTopics">
      <p>最近创建的话题</p>
      <ul class="listWrapper">
        <li v-for="list in topicsList">
          <img :src="list.author.avatar_url" alt="">
          <router-link :to="{
            name: 'article_content',
            params: {
              id: list.id,
              name: list.author.loginname
            }
          }">
            <a href="#" class="title">{{list.title}}</a>
          </router-link>

          <span class="lastReply">{{list.last_reply_at | formatDate}}</span>
        </li>
      </ul>
      <a class="readmore">
        查看更多»
      </a>
    </div>
    <div class="recentReplies">
      <p>最近参与的话题</p>
      <ul class="listWrapper">
        <li v-for="list in repliesList">
          <img :src="list.author.avatar_url" alt="">
          <router-link :to="{
            name: 'article_content',
            params: {
              id: list.id,
              name: list.author.loginname
            }
          }">
            <a href="#" class="title">{{list.title}}</a>
          </router-link>

          <span class="lastReply">{{list.last_reply_at | formatDate}}</span>
        </li>
      </ul>
      <a class="readmore">
        查看更多»
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  data(){
    return {
      userInfo: {},
      topicsList: [],
      repliesList: []
    }
  },
  methods: {
    getData() {
      this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
      .then(res=>{this.userInfo = res.data.data})
      .catch(error=>alert(error));
    }
  },
  watch: {
    userInfo: function() {
      if (this.userInfo.recent_topics) {
        this.topicsList = this.userInfo.recent_topics.slice(0, 5);
      };

      if (this.userInfo.recent_replies) {
        this.repliesList = this.userInfo.recent_replies.slice(0, 5);
      }
    }
  },

  beforeMount(){
    this.getData();
  }
}

</script>

<style scoped>

</style>

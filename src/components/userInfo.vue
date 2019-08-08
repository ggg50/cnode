<template>
  <div class="userInfo">
    <div class="homePage">
      <div class="topBar">主页</div>
      <img class="avatar" :src="userInfo.avatar_url" alt="">
      <span class="loginname">{{userInfo.loginname}}</span>
      <span class="score">积分:{{userInfo.score}}</span>
      <span class="registrationDate">注册时间{{userInfo.create_at | formatDate}}</span>
    </div>

    <div class="recentTopics">
      <div class="topBar">最近创建的话题</div>
      <ul class="listWrapper">
        <li v-for="list in topicsList">
          <img class="avatar" :src="list.author.avatar_url" alt="">
          <router-link :to="{
            name: 'articleContent',
            params: {
              id: list.id,
              name: list.author.loginname
            }
          }">
            <a href="#" class="title">{{list.title}}</a>
          </router-link>

          <span class="lastTime">{{list.last_reply_at | formatDate}}</span>
        </li>
      </ul>
      <a class="readmore">
        查看更多»
      </a>
    </div>

    <div class="recentReplies">
      <div class="topBar">最近参与的话题</div>
      <ul class="listWrapper">
        <li v-for="list in repliesList">
          <img class="avatar" :src="list.author.avatar_url" alt="">
          <router-link :to="{
            name: 'articleContent',
            params: {
              id: list.id,
              name: list.author.loginname
            }
          }">
            <a href="#" class="title">{{list.title}}</a>
          </router-link>

          <span class="lastTime">{{list.last_reply_at | formatDate}}</span>
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

.homePage > img {
  width: 40px;
  height: 40px;
  border-radius: 3px;
  vertical-align: middle;
}

.userInfo .homePage {
  /* padding-bottom: 25px; */
}

.userInfo .homePage .loginname {
  color: #778087;
  font-size: 16px;
}

.userInfo .homePage .score {
  display: block;
  margin: 10px;
}

.userInfo .homePage .registrationDate {
  color: #ababab;
  margin: 0 0 25px 10px;
  display: block;
}

.homePage, .recentTopics, .recentReplies {
  background-color: #ffffff;
  margin: 20px 200px;
  border-radius: 5px;
  overflow: hidden;
}

.homePage .topBar, .recentTopics .topBar, .recentReplies .topBar {
  font-size: 14px;
  color: #444;
  padding: 10px;
  background-color: #f6f6f6;
}

img {
    margin: 10px;
}

.recentTopics ul li, .recentReplies ul li {
  line-height: 50px;
  border-bottom: 1px solid #f0f0f0;
}
.recentTopics ul li .title, .recentReplies ul li .title {
  color: #08c;
}

.recentTopics ul li .title:hover , .recentReplies ul li .title:hover {
  color: #005580;
  text-decoration: underline;
}

.readmore {
  color: #666;
  font-size: 14px;
  display: inline-block;
  margin: 10px;
  cursor: pointer;
}

.readmore:hover {
  color: #385f8a;
}

.lastTime {
  float: right;
  margin-right: 15px;
  font-size: 11px;
  color: #777;
}

</style>

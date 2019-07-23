<template>
  <div class="wrapper">
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" >
    </div>
    <div v-else>
      <div class="topicWrapper">
        <div class="topicHeader">
          <div class="topicTitle">
            <span :class="{goodTab: articleData.good, topTab: articleData.top, askAndShare: !articleData.top && !articleData.good}">
              {{articleData | tabType}}
            </span>
            {{articleData.title}}
          </div>
          <ul>
            <li>• 发布于 {{articleData.create_at | formatDate}}</li>
            <li>• 作者 {{articleData.author.loginname}}</li>
            <li>• {{articleData.visit_count}} 次浏览</li>
            <li>• 来自 {{articleData | tabType}}</li>
          </ul>
        </div>

        <div class="topicContent">
          <div v-html="contentFilter(articleData.content)">
          </div>
        </div>
      </div>


      <div class="replyWrapper">
        <div class="replyCount">
          {{articleData.replies.length}} 回复
        </div>
        <div class="replyList" v-for="(reply, index) in articleData.replies">
          <div class="replyAuthor">
            <img class="avatar" :src="reply.author.avatar_url" alt="">
            <span>{{reply.author.loginname}}</span>
            <span>{{index + 1}}楼•{{reply.create_at | formatDate}}</span>
          </div>
          <div class="replyContent" v-html="contentFilter(reply.content)">
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: "Article",
  data() {
    return {
      isLoading: true,
      articleData: {}
    }
  },
  methods: {
    getArticleData(){
      this.$http.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
        .then(res=>{
          if(res.data.success == true){
            this.isLoading = false;
            this.articleData = res.data.data;
          }
        })
        .catch(function (err) {
          alert(err)
        })
    },
    contentFilter(str) {
      return str.replace(/markdown-text/, "markdown-body");
    }
  },
  beforeMount() {
    this.getArticleData();
  }
}


</script>

<style >
@import url('../assets/markdown-github.css');

.wrapper {
  margin: 15px 60px;
  min-width: 650px;
  margin-right: 370px;
  display:block;
  border-radius: 5px;
  overflow: hidden;
}

.topicWrapper {
  background-color: #ffffff;
}

.topicHeader {
  border-bottom: 1px solid #eaecef;
}

.topicHeader .topicTitle{
  font-size: 22px;
  font-weight: 700;
  margin: 15px 0 5px 10px;
  display: inline-block;
  vertical-align: bottom;
  width: 75%;
  line-height: 130%;
}

.topicHeader ul {
  margin: 0 0 10px 10px;
}
.topicHeader ul li {
  display: inline-block;
  font-size: 12px;
  color: #838383;
}


.goodTab , .topTab {
  padding: 2px 4px;
  margin: 0 5px;
  background: #80bd01;
  color: #fff;
  font-size: 12px;
  border-radius: 3px;
}
.askAndShare {
  padding: 2px 4px;
  margin: 0 5px;
  font-size: 12px;
  border-radius: 3px;
  background: #e5e5e5;
  color: #999;
}

.topicWrapper, .replyWrapper {
  border-radius: 5px;
  background-color: #ffffff;
}

.topicWrapper .topicContent{
  padding: 20px 20px;
  margin-bottom: 15px;
}

.replyWrapper {
  padding-top: 0;
  margin: 15px 0;
  border-radius: 5px;
  overflow:hidden;
}


.replyWrapper .replyCount {
  line-height: 40px;
  background-color: #f6f6f6;
  padding: 0 10px;
}

.replyWrapper .replyList {
  border-bottom: 1px solid #f0f0f0;
  padding:10px;
  padding-bottom: 25px;
}
.replyWrapper .replyList .replyAuthor {
  font-size: 12px;
  color: #666;
  font-weight: bold;
}

.replyWrapper .replyList .replyAuthor span:nth-child(3) {
  color: #08c;
  font-size: 11px;
  font-weight: normal;
}

.replyWrapper .replyList .replyContent {
  font-size: 15px;
  margin-left: 50px;
}

</style>

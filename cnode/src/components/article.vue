<template>
  <div class="wrapper">
    <div class="title">
      <ul>
        <li>• 发布于 {{articleData.create_at | getLastReply}}</li>
        <li>• 作者 {{articleData.author.loginname}}</li>
        <li>• {{articleData.visit_count}} 次浏览</li>
        <li>• 来自 {{articleData | tabType}}</li>
      </ul>
    </div>
    <div class="articleContent">
      <div v-html="contentFilter(articleData.content)">
      </div>
    </div>
    <div class="replyWrapper">
      <div class="reply-count">
        {{articleData.replies.length}} 回复
      </div>
      <div v-for="(reply, index) in articleData.replies">
        <img :src="reply.author.avatar_url" alt="">
        <span>{{reply.author.loginname}}</span>
        <span>{{index + 1}}•{{reply.create_at | getLastReply}}</span>
        <div class="topic_content" v-html="contentFilter(reply.content)">
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
      articleData: {}
    }
  },
  methods: {
    getData(){
      console.log(222);
      this.$http.get("https://cnodejs.org/api/v1/topic/5bd4772a14e994202cd5bdb7")
      .then(res=> {this.articleData=res.data.data;})
      .catch(error=> alert(error))
    },
    contentFilter(str) {
      return str.replace(/markdown-text/, "markdown-body");
    }
  },
  beforeMount() {
    this.getData();
  }
}


</script>

<style >
@import url('../assets/markdown-github.css');


</style>

<template>
  <div class="wrapper">
    <ul class="listNav">
      <li><a src="#" class="active">全部</a></li>
      <li><a src="#">精华</a></li>
      <li><a src="#">分享</a></li>
      <li><a src="#">问答</a></li>
      <li><a src="#">招聘</a></li>
      <li><a src="#">客户端测试</a></li>
    </ul>
    <ul class="listWrapper">
      <li v-for="list in postData">
        <router-link :to="{
          name: 'userInfo',
          params: {
            name: list.author.loginname
          }
          }">
          <img class="avatar" :src="list.author.avatar_url" alt="avatar">
        </router-link>
        <div class="stateWrapper">
          <span class="replyCount">{{list.reply_count}}</span>/<span >{{list.visit_count}}</span>
        </div>
        <span :class="{goodTab: list.good, topTab: list.top, askAndShare: !list.top && !list.good}">
          {{list | tabType}}
        </span>
        <router-link :to="{
          name: 'articleContent',
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
    <Pagination @handleList="renderList"></Pagination>
  </div>
</template>

<script>

import Pagination from "./pagination.vue";

export default {
  name: "PostList",
  data() {return {
    isLoading: false,
    postPage: 1,
    postData: []
  }},

  methods: {
    getData(){
      this.$http.get("https://cnodejs.org/api/v1/topics", {
        params:{
          page: this.postPage,
          limit: 20
        }
      })
      .then(res=> {this.postData=res.data.data;})
      .catch(error=> alert(error))
    },
    renderList(value){
      this.postPage = value;
      this.getData();
    }
  },
  components: {
    Pagination
  },

  beforeMount() {
    this.getData()
  },

}

</script>

<style scoped>

.wrapper {
  margin: 15px 60px;
  background-color: #ffffff;
  border-radius: 5px;
  overflow: hidden;
}

ul.listNav {
  padding: 10px;
  margin-left: 10px;
  background-color: #f6f6f6;
}

ul.listNav li {
  display: inline-block;
  margin-right: 15px;
}

ul.listNav li a {
  color: #80bd01;
  padding: 3px 4px;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
}

ul.listNav li a:hover {
  color: #21547c;
}


ul.listNav li a.active {
  color: #fff;
  background-color: #80bd01;
}






div ul.listWrapper li {
  line-height: 2em;
  padding: 9px;
  border-top: 1px solid #f0f0f0;
}

div ul.listWrapper li:hover {
  background-color: #f6f6f6;
}




.stateWrapper {
  display: inline-block;
  width: 70px;
  font-size: 10px;
  text-align: center;
  color: #b4b4b4;
}

.stateWrapper .replyCount {
  color: #9e78c0;
  font-size: 14px;
}

.title {
  font-size: 16px;
  max-width: 70%;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 3px;
}
.title:hover {
  text-decoration: underline;
}

.lastReply {
  float: right;
  min-width: 50px;
  text-align: right;
  color: #778087;
  font-size: 11px;
}









.goodTab , .topTab {
  padding: 2px 4px;
  background: #80bd01;
  color: #fff;
  font-size: 12px;
  border-radius: 3px;
}

.askAndShare {
  padding: 2px 4px;
  font-size: 12px;
  border-radius: 3px;
  background: #e5e5e5;
  color: #999;
}




</style>

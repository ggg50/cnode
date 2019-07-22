import Vue from 'vue'
import Router from 'vue-router'
import Header from "../components/header.vue";
import PostList from "../components/postList.vue";
import Article from "../components/article.vue";
import SlideBar from "../components/slideBar.vue";
import UserInfo from "../components/userInfo.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: "root",
      path: "/",
      components: {
        main: PostList,
      }
    },
    {
      name: "article_content",
      path: "/topic/:id&author=:name",
      components: {
        main: Article,
        slideBar: SlideBar,
        userInfo: UserInfo
      }
    }
  ]
})

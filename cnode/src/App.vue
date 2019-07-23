<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <!-- <router-view name="userInfo"></router-view> -->
      <router-view name="main"></router-view>
      <router-view name="slideBar"></router-view>


    </div>
  </div>
</template>

<script>

import Header from "./components/header.vue";
import PostList from "./components/postList.vue";

export default {
  name: 'App',
  components: {
    Header,
    PostList
  }
}
</script>

<style>
  * { padding: 0; margin: 0; box-sizing: border-box; font-family:"Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif;}
  *::after{ box-sizing: border-box; }
  *::before{ box-sizing: border-box; }
  ul,ol,dl{ list-style:none; }
  a{ color: inherit;  text-decoration: none;}
  input { background-clip: padding-box; }
  body {background-color: #e1e1e1}

  img.avatar {
    width: 30px;
    height: 30px;
    border-radius: 3px;
    vertical-align: middle;
  }

</style>

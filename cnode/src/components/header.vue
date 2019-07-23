<template>
  <div class="header">
    <router-link :to="{name: 'root'}">
      <img src="../assets/cnodejs_light.svg" alt="">
    </router-link>
    <ul>
      <router-link :to="{name: 'root'}">
        <li><a href="#">首页</a></li>
      </router-link>
      <li><a href="#">新手入门</a></li>
      <li><a href="#">API</a></li>
      <li><a href="#">关于</a></li>
      <li><a href="#">注册</a></li>
      <li><a href="#">登录</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Header"
  }

</script>

<style scoped>
  .header {
    background-color: #444444;
    min-height: 50px;
  }
  img {
    margin-top: 8px;
    margin-left: 70px;
    max-width : 120px;
  }
  ul {
    float: right;
    margin-top: 15px;
    margin-right: 80px;
  }
  ul li {
    color: #cccccc;
    font-size: 13px;
    display: inline-block;
    margin-left: 27px;
  }

  ul li a{
    text-decoration: none;
  }


</style>

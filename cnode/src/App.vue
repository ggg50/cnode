<template>
  <div id="app">
    <Header></Header>
    <PostList></PostList>
  </div>
</template>

<script>

import Header from './components/header.vue'
import PostList from './components/postList.vue'

export default {
  name: 'App',
  components: {
    Header,
    PostList
  }
}
</script>

<style>
  * { padding: 0; margin: 0; box-sizing: border-box; }
  *::after{ box-sizing: border-box; }
  *::before{ box-sizing: border-box; }
  ul,ol,dl{ list-style:none; }
  a{ color: inherit; }
  input { background-clip: padding-box; }

</style>

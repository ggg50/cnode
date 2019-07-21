<template>
  <div>
    <ul>
      <li v-for="list in postData">
        <img :src="list.author.avatar_url" alt="">
        <span class="state">{{list.reply_count}}</span><span >{{'/' + list.visit_count}}</span>
        <span :class="{good_tab: list.good, top_tab: list.top, ask_and_share: !list.top && !list.good}">
          {{list | tabType}}
        </span>
        <span class="title">{{list.title}}</span>
        <span class="last_reply">{{list.last_reply_at | getLastReply}}</span>
      </li>
    </ul>
  </div>
</template>

<script>



export default {
  name: "PostList",
  data() {return {
    isLoading: false,
    postData: []
  }},

  methods: {
    getData(){
      this.$http.get("https://cnodejs.org/api/v1/topics", {page:1, limit: 20})
      .then(res=> {this.postData=res.data.data; console.log(this.postData)})
      .catch(error=> alert(error))
    }
  },

  beforeMount() {
    this.getData()
  },

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <div class="paginationWrapper">
    <button>首页</button>
    <button>下一页</button>
    <button v-if="jduge">......</button>
    <button v-for="pageNumber in pages" @click="changebtn(pageNumber)">{{pageNumber}}</button>
    <button>下一页</button>
  </div>
</template>

<script>

export default {
  name: "Pagination",
  data() {
    return {
      pages: [1, 2, 3, 4, 5, "......"],
      currentPage: 1,
      jduge: false
    }
  },
  methods: {
    changebtn(pageNumber){
      if(pageNumber === this.pages[4]){
        this.pages.shift();
        this.pages.splice(4, 0, this.pages[3] + 1);
      } else if (pageNumber === this.pages[0] && pageNumber !== 1){
        this.pages.unshift(this.pages[0] - 1);
        this.pages.splice(5, 1);
      }
    }
  }

}

</script>

<style scoped>

</style>

<template>
  <div class="paginationWrapper">
    <button @click="changeBtn('首页')">首页</button>
    <button @click="changeBtn('上一页')">上一页</button>
    <button v-if="jduge">......</button>
    <button v-for="pageNumber in pages" @click="changeBtn(pageNumber)" :class="[{currentPage: pageNumber === currentPage}, 'pageBtn']">{{pageNumber}}</button>
    <button @click="changeBtn('下一页')">下一页</button>
  </div>
</template>

<script>
import $ from "jquery";

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
    changeBtn(pageContent){

      if(typeof pageContent !== "number") {
        if(pageContent === "首页") {
          this.pages = [1,2,3,4,5,'......'];
          this.changeBtn(1);
        } else if (pageContent === "上一页"){
          $("button.currentPage").prev().click();
          return;
        } else if (pageContent === "下一页"){
          $("button.currentPage").next().click();
          return;
        }

      } else {

        this.currentPage = pageContent;

        if(pageContent > 4){
          this.jduge = true;
        } else {
          this.jduge = false;
        };

        if(pageContent === this.pages[4]){
          this.pages.shift();
          this.pages.splice(4, 0, this.pages[3] + 1);
        } else if (pageContent === this.pages[0] && pageContent !== 1){
          this.pages.unshift(this.pages[0] - 1);
          this.pages.splice(5, 1);
        }
      }
    }
  }

}

</script>

<style scoped>

</style>

<!--
 * @Description: 渲染markdown文件
 * @Author: hai-27
 * @Date: 2020-03-12 17:30:46
 * @LastEditors: huangdahan
 * @LastEditTime: 2023-04-28 16:20:57
 -->
<template>
  <div id="my-markdown" class="markdown-body">
    <vue-markdown :source="md"></vue-markdown>
  </div>
</template>
<script>
import VueMarkdown from "vue-markdown";
export default {
  name: "MyMarkdown",
  components: {
    VueMarkdown
  },
  data() {
    return {
      md: ""
    };
  },
  created() {
    // 从后端请求README.md
    this.$axios
      .get("/gateway/README.md", {})
      .then(res => {
        this.md = res.data;
      })
      .catch(err => {
        return Promise.reject(err);
      });
  }
};
</script>
<style>
@import "../assets/css/github-markdown.css";
.markdown-body {
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 40px;
}
</style>
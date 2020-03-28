<template>
  <div>
    <!-- 页面在view/homeindex文件 -->
    <header-asideMenu />
    <router-view />
    <tail />
  </div>
</template>

<script>
import headerAsideMenu from "@/components/asideMenu/headerAsideMenu"; //引入头部
import tail from "@/components/tail/tail"; //引入底部
export default {
  components: {
    headerAsideMenu,
    tail
  },
  data() {
    return {};
  }
};
</script>

<style lang="less">
</style>

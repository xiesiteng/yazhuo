<template>
 <!-- 案例分享 -->
  <div class="app">
    <div class="title">
    </div>
    <expertforum></expertforum>
    <famousteacher></famousteacher>
    <excellentcase></excellentcase>
  </div>
</template>

<script lang="js">
import Axios from "axios";
import expertforum from './components/expertforum.vue'
import famousteacher from './components/famousteacher'
import excellentcase from'./components/excellentcase'
export default {
  // name: "casesharing",
  components: {
    expertforum,
    famousteacher,
    excellentcase,
    },
  data() {
    return {
    };
  },
  created() {
  },

  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
.title{
  background-image: url(https://lxf-1256064321.cos.ap-chengdu.myqcloud.com/banner/%E6%A1%88%E4%BE%8B%E5%88%86%E4%BA%AB.png);
  height: 600px;
  background-size: 100% 100%;
}
.app{
  background-color: #ffffff;
}
</style>


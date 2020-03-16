<template>
  <div class="app">
      <div class="title">
          <!-- <Navigationbar></Navigationbar> -->
      </div>
      <!-- 开发原则 -->
      <developmentprinciples></developmentprinciples>
      <!-- 课程内容 -->
      <coursecontent></coursecontent>
      <!-- 课程亮点 -->
      <functionintroduction></functionintroduction>
  </div>
</template>

<script lang="ts">functionintroduction
import Axios from "axios";
// import Navigationbar from '../../components/Navigationbar/Navigationbar.vue';
import developmentprinciples from './components/developmentprinciples.vue';
import coursecontent from './components/coursecontent.vue';
import functionintroduction from './components/functionintroduction.vue';
export default {
  name: 'bzrdreamWorks',
  components: {
    //   Navigationbar,
      developmentprinciples,
      coursecontent,
      functionintroduction,
  },
  data(){
      return{

      }
    },
    created() {

    },

    methods: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
.title{
    height: 600px;
    // background-color: #000000;
    background-image: url(https://lxf-1256064321.cos.ap-chengdu.myqcloud.com/banner/%E7%8F%AD%E4%B8%BB%E4%BB%BB%E6%A2%A6%E5%B7%A5%E5%9C%BA.png);
    background-size: 100% 100%;
}
</style>
<template>
  <div class="app">
    <div class="famousteacher">
      <div class="Etitle">
        <div class="Exhibitiontitle">解 / 决 / 方 / 案</div>
        <div class="introduction">德育课程包含的所有课程内容</div>
      </div>
      <div class="list">
        <div class="box">
          <div class="title" v-for="(items , index) in list[0]" :key="index">{{items}}</div>
        </div>
        <div class="box">
          <div class="title" v-for="(items , index) in list[1]" :key="index">{{items}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Axios from "axios";

export default {
  name: "coursecontent",
  components: {},
  data() {
    return {
      list: [],
      page: 1
    };
  },
  created() {
    this.getmessage();
  },

  methods: {
    getmessage() {
      var that = this;
      Axios.get(
        "https://mock.aarnio.cn/mock/5e4a4a71a7e3066df43697b8/example/zhClasscoursecontent",
        {
          params: {}, // 参数
          timeout: 3000 // 配置
        }
      ).then(res => {
        that.list = res.data.data.famous;
        console.log(that.list);
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
.app {
  height: 500px;
  background-image: url(https://lxf-1256064321.cos.ap-chengdu.myqcloud.com/picture/%E9%95%BF%E8%83%8C%E6%99%AF%E5%9B%BE10.png);

  .famousteacher {
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .Etitle {
      margin: 20px 0 20px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .Exhibitiontitle {
        width: 184px;
        height: 44px;
        font-size: 24px;
        color: #ffffff;
      }
      .introduction {
          display: flex;
          align-items: center;
          justify-content: center;
        width: 219px;
        height: 14px;
        font-size: 14px;
        color: #ffffff;
      }
    }
    .list {
        display: flex;
        justify-content: center;
        align-items: center;
      .box {
          width: 395px;
          height: 342px;
          margin: 0 20px 0 20px;
          background:rgba(0,66,127,0.5);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        .title {
            height: 60px;
            width: 340px;
            display: flex;
            align-items: center;
            color: #ffffff;
            font-size: 20px;
            // color:rgba(255,255,255,0.9);
            text-shadow: 1px 1px 50px #ffffff;
        }
      }
    }
  }
}
</style>
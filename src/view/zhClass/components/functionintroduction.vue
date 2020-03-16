<template>
  <div class="app">
    <div class="famousteacher">
      <div class="Etitle">
        <div class="Exhibitiontitle">开 / 发 / 理 / 念</div>
        <div class="introduction">我们一起来推进教育信息化建设</div>
      </div>
      <div class="list">
        <div class="box" v-for="(items, index) in list" :key="index">
          <div class="picture">
            <img class="img" :src="items.picture" alt="">
          </div>
          <div class="title">{{items.title}}</div>
          <div class="content">{{items.content}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Axios from "axios";

export default {
  name: "functionintroduction",
  components: {},
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.getmessage();
  },

  methods: {
    getmessage() {
      var that = this;
      Axios.get(
        "https://mock.aarnio.cn/mock/5e4a4a71a7e3066df43697b8/example/zhClassfunctionintroduction",
        {
          params: {}, // 参数
          timeout: 3000 // 配置
        }
      ).then(res => {
        that.list = res.data.data.famous;
      });
    },
    turnnext() {
      let that = this;
      if (that.page + 1 < that.length) {
        that.page++;
      } else {
        that.page = 0;
      }
      that.getmessage();
    },
    previous() {
      var that = this;
      if (that.page > 0) {
        that.page--;
      } else {
        that.page = that.length - 1;
      }
      that.getmessage();
    },
    mouseenter(index){
      var that = this;
      that.choose = index;
      that.show = true;
      console.log(that.choose)
      

    },
    mouseleave(index){
      var that = this;
      that.show = false;
      // that.choose = 0;
      console.log(that.choose)

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
.app {
  // height: 1014px;
  .famousteacher {
    height: 1014px;
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
        color: #333333;
      }
      .introduction {
        width: 219px;
        height: 14px;
        font-size: 14px;
        color: #777777;
      }
    }
    .list{
      width: 1200px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;
      background-color: #FAFAFA;
      .box{
        width: 386px;
        height: 400px;
        margin-top: 20px;
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .picture{
          .img{
            height: 306px;
            width: 386px;
          }
        }
        .title{
          color: #333333;
          font-size: 24px;
        }
        .content{
          color: #666666;
          font-size: 16px;
        }
      }
      .box:hover{
        box-shadow: 2px 1px 4px 0px #888888;
      }
    }
   
  }
}
</style>
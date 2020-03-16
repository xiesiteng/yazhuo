<template>
  <div class="app">
    <div class="famousteacher">
      <div class="Etitle">
        <div class="Exhibitiontitle">设 / 计 / 理 / 念</div>
        <div class="introduction">我们一起来推进教育信息化建设</div>
      </div>
      <div class="class">
        <div class="text">
          <div class="title">
            <div class="menu" v-for="(items, index) in list" :key="index" @mouseenter="mouseenter(index)">
              <div class="icon">
                <img :src="indexd == index?items.iconchoose:items.icon" alt />
              </div>
              <div class="titlename">{{items.title}}</div>
            </div>
          </div>
          <div class="content">
            <div class="words">
              <div class="wordstitle">{{title}}</div>
              <div class="wordsconten">{{content}}</div>
            </div>
            <div class="picture">
              <div class="img">
                <img :src="picture" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Axios from "axios";

export default {
  name: "developmentprinciples",
  components: {},
  data() {
    return {
      list: [],
      indexd: 0,
      title: "",
      content: "",
      picture: "",
      icon:''
    };
  },
  created() {
    this.getmessage();
  },

  methods: {
    getmessage() {
      var that = this;
      Axios.get(
        "https://mock.aarnio.cn/mock/5e4a4a71a7e3066df43697b8/example/ggdevelopmentprinciples",
        {
          params: {}, // 参数
          timeout: 3000 // 配置
        }
      ).then(res => {
        that.list = res.data.data.famous;
        // console.log("快看这里"+that.list);
        that.title = that.list[that.indexd].title;
        that.content = that.list[that.indexd].content;
        that.picture = that.list[that.indexd].picture;
        that.icon = that.list[that.indexd].icon;
      });
    },
    mouseenter(index) {
      var that = this;
      that.indexd = index;
      that.title = that.list[index].title;
      that.content = that.list[index].content;
      that.picture = that.list[index].picture;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
.app {
  // height: 554px;
  .famousteacher {
    height: 476px;
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
    .class {
      .text {
        width: 1200px;
        // border-bottom: 0px solid #dddddd;
        .title {
          display: flex;
          justify-content: center;
          align-items: center;
          border-bottom: 1px solid #DDDDDD;
          .menu {
            width: 130px;
            height: 31px;
            // border-bottom: 1px solid #DDDDDD;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            .icon {
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .titlename {
              width: 70px;
              height: 26px;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
          .menu:hover{
              border-bottom: 1px solid #007AB7;
            }
        }
        .content {
          height: 322px;
          display: flex;
          justify-content: center;
          align-items: center;
          .words {
            .wordstitle {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 160px;
              height: 50px;
              border: 1px solid #dddddd;
              border-radius: 25px;
            }
            .wordsconten {
              color: #333333;
              margin-top: 18px;
              width: 300px;
              height: 100px;
              font-size: 14px;
            }
          }
          .picture {
            // width: 706px;
            margin-left: 153px;
            display: flex;
            align-items: center;
            justify-content: center;
            .img {
            }
          }
        }
      }
    }
  }
}
</style>
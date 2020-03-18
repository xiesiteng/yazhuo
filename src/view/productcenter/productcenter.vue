<template>
  <div class="app">
    <div class="title"></div>
    <div class="contents">
      <div class="uptitle">
        <div class="titlename">产/品/中/心</div>
        <div class="smalltitle">打造亚卓生态空间</div>
        <div class="smalltitle">相辅相成 为教育信息化 迈出亚卓的一步</div>
      </div>
      <div class="downtext">
        <div class="list" v-for="(items, index) in list" :key="index"
        :style="index % 2 == 1 ? 'flex-direction:row-reverse' : 'flex-direction:row'"
        >
          <div class="picture">
            <img class="img" :src="items.picture" alt />
          </div>
          <div class="text">
            <div class="textline"></div>
            <div class="system">{{items.system}}</div>
            <div class="texttitle">{{items.title}}</div>
            <div class="content">{{items.content}}</div>
            <div class="button">
              点击查看
              <i class="iconfont iconyoujiantou"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 回到顶部 -->
    <back-top></back-top>
  </div>
</template>

<script lang="js">
import Axios from "axios";
import backTop from '@/components/backTop/backTop.vue'
export default {
  name: "ggbasicclass",
  components: {
    backTop
  },
  data() {
    return {
        list:[],
    };
  },
  created() {
      this.getmessage();
  },

  methods: {
      getmessage() {
      var that = this;
      Axios.get(
        "https://mock.aarnio.cn/mock/5e4a4a71a7e3066df43697b8/example/productcenter",
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
.title {
  height: 600px;
  // background-color: #000000;
  background-image: url('https://lxf-1256064321.cos.ap-chengdu.myqcloud.com/banner/%E4%BA%A7%E5%93%81%E4%B8%AD%E5%BF%83.png');
  background-size: 100% 100%;
}
.app {
  .contents {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.1);
    background-image: url(https://lxf-1256064321.cos.ap-chengdu.myqcloud.com/picture/%E4%BA%A7%E5%93%81%E4%B8%AD%E5%BF%83%E8%83%8C%E6%99%AFnew.png);
    background-size: 100% 100%;
    .uptitle {
      height: 160px;
      width: 350px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .titlename {
        color: #333333;
        font-family: Source Han Sans CN;
        font-size: 26px;
      }
      .smalltitle {
        color: #666666;
        font-size: 18px;
      }
    }
    .downtext {
      .list {
        display: flex;
        // flex-direction: row-reverse;
        // flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 60px;

        .picture {
          .img {
            width: 550px;
            height: 380px;
          }
        }
        .text {
          margin-left: 40px;
          width: 656px;
          height: 380px;
          .textline {
            height: 4px;
            width: 54px;
            margin-top: 20px;
            background-color: #007ab7;
          }
          .system {
            margin-top: 10px;
            font-size: 18px;
            color: #333333;
            font-weight: bold;
          }
          .texttitle {
            margin-left: 1px;
            height: 80px;
            font-size: 18px;
            color: #333333;
            font-weight: bold;
            display: flex;
            align-items: flex-end;
          }
          .content {
            margin-left: 1px;
            height: 140px;
            width: 576px;
            font-size: 16px;
            color: #333333;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .button {
            margin-left: 2px;
            width: 146px;
            height: 36px;
            background-color: #007ab7;
            color: #ffffff;
            font-size: 18px;
            display: flex;
            justify-content: center;
            align-items: center;
            .iconfont {
              font-size: 24px;
            }
          }
        }
      }
    }
  }
}
</style>
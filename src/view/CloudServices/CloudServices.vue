<template>
  <div class="app">
    <div class="title"></div>
    <div class="contents">
      <div class="uptitle">
        <div class="titleline"></div>
        <div class="titlename">{{list.title1}}</div>
        <div class="titleline"></div>
      </div>
      <div class="downtext">{{list.content1}}</div>
      <div class="picture">
        <img class="img" :src="list.picture" alt />
      </div>
    </div>
    <div class="list">
      <div class="service">
        <div class="servicetitle">提 / 供 / 服 / 务</div>
        <div class="servicelitteltitle">我们为你提供优秀的解决方案</div>
      </div>
      <div
        class="introduce"
        :style="{backgroundImage: 'url(' + list.bg + ')', backgroundSize:'1200px,616px',
      height:'616px',width:'1200px'}"
      >
        <div class="localService" v-for="(items, index) in serve" :key="index">
          <div class="servecontent">
            <div class="servetitle" @mouseenter="mouseenter(index)" @mouseout="mouseout()">{{items.title}}</div>
            <div class="line" 
            :style="{backgroundColor:(index == choose? '#1B74B9':'rgba(0,0,0,0)')}"></div>
            <div class="servecontent">{{items.content}}{{items.content}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import Axios from "axios";

export default {
  name: "ggbasicclass",
  components: {},
  data() {
    return {
        list:{},
        serve:[],
        choose:3,
    };
  },
  created() {
      this.getmessage();
  },

  methods: {
      getmessage() {
      var that = this;
      Axios.get(
        "https://mock.aarnio.cn/mock/5e4a4a71a7e3066df43697b8/example/CloudServices",
        {
          params: {}, // 参数
          timeout: 3000 // 配置
        }
      ).then(res => {
        that.list = res.data.data.famous;
        that.serve = res.data.data.famous.serve;
        console.log("这个是最新的list"+that.list.serve[0].title);
      });
    },
    mouseenter(index){
        console.log(index);
        this.choose = index;
    },
    mouseout(){
        this.choose = 3;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
.title {
  height: 600px;
  // background-color: #000000;
  background-image: url("https://lxf-1256064321.cos.ap-chengdu.myqcloud.com/banner/%E6%9C%AC%E5%9C%B0%E6%9C%8D%E5%8A%A1.png");
  background-size: 100% 100%;
}
.app {
  background-color: #F6F6F6;
  .contents {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .uptitle {
      height: 160px;
      // width: 350px;
      display: flex;
      // flex-direction: column;
      justify-content: center;
      align-items: center;
      .titlename {
        width: 300px;
        color: #333333;
        font-family: Source Han Sans CN;
        font-size: 35px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .titleline{
        width: 400px;
        height: 1px;
        background-color: #DDDDDD;
      }
    }
    .downtext {
      width: 1050px;
      // height: 104px;
      color: #333333;
      font-size: 16px;
    }
    .picture {
      margin-top: 34px;
      .img {
        width: 1100px;
        height: 364px;
      }
    }
  }
  .list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .service {
      height: 138px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .servicetitle {
        //   height: 36px;
        font-size: 35px;
        font-family: Source Han Sans CN;
        color: #4e4e4e;
      }
      .servicelitteltitle {
        height: 15px;
        color: #666666;
      }
    }
    .introduce {
      color: #ffffff;
      margin-bottom: 50px;
      .localService {
        width: 875px;
        height: 246px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .servetitle {
            width: 200px;
            display: flex;
            align-items: center;
            // justify-content: center;
            color: #ffffff;
            align-items: center;
          height: 43px;
          font-size: 24px;
        }
        .line {
            width: 50px;
            height: 4px;
            margin-left: 48px;
            background-color: #1B74B9;
        }
        .servecontent {
          width: 665px;
        //   height: 128px;
          font-size: 18px;
          margin-top: 20px;
          color: rgba(255, 255, 255, 0.5);
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
}
</style>
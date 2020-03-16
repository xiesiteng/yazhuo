<template>
  <div class="app">
    <div class="title"></div>
    <div class="basicEducation">
      <div class="contents">
        <div class="uptitle">
          <div class="titlename">基 / 教 / 解 / 决 / 方 / 案</div>
        </div>
        <div class="downtext">公司提供三大产品服务</div>
        <div class="downtext">从技术、战略、资本各方面提供全方位的创新服务，帮助企业互联网化升级</div>
      </div>
      <div class="list">
        <div class="box" v-for="(items, index) in jjeducation" :key="index">
          <div class="picture">
            <img class="img" :src="items.picture" alt />
          </div>
          <div class="text">{{items.title}}</div>
          <div class="boxcontent">{{items.content}}</div>
          <div class="button">
            <div class="button1">产品概览</div>
            <div class="button2">马上咨询</div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="advantage"
      :style="{backgroundImage:'url(' + bg + ')',backgroundSize:'1920px,800px'}"
    >
      <div class="contents">
        <div class="uptitle">
          <div class="titlename">我们的优势</div>
        </div>
        <div class="downtext">TITLETITLE</div>
      </div>
      <div class="boxlist">
        <div class="list" v-for="(item, ind) in advantage" :key="ind">
          <div class="picture">
            <img class="img" :src="item.picture" alt />
          </div>
          <div class="listtitle">{{item.title}}</div>
          <div class="content">
            <div class="text" v-for="(text, num) in item.text" :key="num">{{text}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="number">
      <div class="box">
        <div class="boxtitle">{{num.title}}</div>
        <div class="list">
          <div class="line" v-for="(line ,content) in num.line" :key="content"
          :style="{borderLeft:content == 0?'0px':'1px solid #DCDCDC'}">
            <div class="line1title">{{line.title}}</div>
            <div class="line1content">{{line.content}}</div>
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
        jjeducation:[],
        bg:'',
        advantage:[],
        num:{},
    };
  },
  created() {
      this.getmessage();
  },

  methods: {
      getmessage() {
      var that = this;
      Axios.get(
        "https://mock.aarnio.cn/mock/5e4a4a71a7e3066df43697b8/example/solution",
        {
          params: {}, // 参数
          timeout: 3000 // 配置
        }
      ).then(res => {
        that.jjeducation = res.data.data.jjeducation;
        that.bg = res.data.data.bg;
        that.advantage = res.data.data.advantage;
        that.num =  res.data.data.number;
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
  background-image: url("https://lxf-1256064321.cos.ap-chengdu.myqcloud.com/picture/banner.png");
  background-size: 100% 100%;
}
.app {
  .basicEducation {
    background-color: #f4f4f4;
    .contents {
      height: 166px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .uptitle {
        // height: 160px;
        width: 500px;
        display: flex;
        // flex-direction: column;
        justify-content: center;
        align-items: center;
        .titlename {
          color: #333333;
          font-family: Source Han Sans CN;
          font-size: 35px;
        }
      }
      .downtext {
        width: 1050px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
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
      justify-content: center;
      align-items: center;
      .box {
        margin: 20px 10px;
        height: 507px;
        width: 386px;
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        .picture {
          .img {
            width: 386px;
            height: 295px;
          }
        }
        .text {
          height: 76px;
          font-size: 25px;
          color: #585858;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: Source Han Sans CN;
        }
        .boxcontent {
          text-align: center;
          color: #595959;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 244px;
          color: #424242;
          font-size: 14px;
        }
        .button {
          width: 260px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100px;
          .button1,
          .button2 {
            height: 37px;
            text-align: center;
            color: #4a4a4a;
            width: 120px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 2px;
            border: 1px solid #d2d2d2;
          }
          .button1:hover,
          .button2:hover {
            border: 0px;
            background-color: #007ab7;
            color: #ffffff;
            border: 0px;
          }
        }
      }
    }
  }
  .advantage {
    height: 800px;
    .contents {
      height: 166px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .uptitle {
        width: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        .titlename {
          color: #ffffff;
          font-family: Source Han Sans CN;
          font-size: 35px;
        }
      }
      .downtext {
        color: #ffffff;
        font-size: 16px;
      }
    }
    .boxlist {
      display: flex;
      justify-content: center;
      align-items: center;
      .list {
        width: 260px;
        height: 330px;
        border-radius: 20px;
        margin: 0px 62px;
        color: #ffffff;
        border: 1px solid #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .picture {
          height: 136px;
          display: flex;
          justify-content: center;
          align-items: center;
          .img {
            width: 70px;
            height: 70px;
          }
        }
        .listtitle {
          height: 44px;
          font-size: 26px;
          display: flex;
          flex-direction: row-reverse;
          justify-content: center;
          align-items: center;
          font-weight: 300;
          font-family: Source Han Sans CN;
        }
        .content {
          margin-top: 20px;
          height: 160px;
          .text {
            color: #d4def4;
            display: flex;
            font-weight: 300;
            justify-content: center;
            align-items: center;
          }
        }
      }
      .list:hover {
        background: linear-gradient(0deg, #225df6, #38afec);
      }
    }
  }
  .number {
    position: relative;
    top: -140px;
    display: flex;
    justify-content: center;
    align-items: center;
    .box {
        margin-bottom: 30px;
        
    width: 1200px;
        
        background-color: #ffffff;
      .boxtitle {
        height: 90px;
        color: #258ffc;
        font-size: 24px;
        font-weight: 500;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .list {
        
        display: flex;
        justify-content: center;
        align-items: center;
        .line {
          height: 140px;
        width: 398px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
            // border-left: 1px solid #DCDCDC;

          .line1title {
            color: #5F616D;
            font-size: 20px;
            font-weight:bold;
          }
          .line1content {
            color: #258FFC;
            font-size: 50px;
            font-weight:bold;
          }
        }
      }
    }
  }
}
</style>
<template>
  <div class="app" :style="{backgroundImage:'url('+bg+')',backgroungSize:'100% 100%'}">
    <div class="title">
      <div class="contents">
        <div class="uptitle">
          <div class="titlename">智/慧/课/堂</div>
        </div>
        <div class="downtext">教育信息化融入课堂，彻底融合教育信息化解决方案</div>
      </div>
    </div>
    <div class="box">
      <div class="left">
        <div class="list0">
          <div class="text">
            <div class="title">{{list1.title}}</div>
            <div class="keyWord">关键字：{{list1.stitle}}</div>
            <div class="content">{{list1.content}}</div>
          </div>
          <div class="icon">
            <img :src="list1.picture" alt class="img" />
          </div>
        </div>
        <div class="list0">
          <div class="text">
            <div class="title">{{list2.title}}</div>
            <div class="ksyWord">关键字：{{list2.stitle}}</div>
            <div class="content">{{list2.content}}</div>
          </div>
          <div class="icon">
            <img :src="list2.picture" alt class="img" />
          </div>
        </div>
      </div>
      <div class="middleline">
        <div class="linetop"></div>
        <div class="linedown"></div>
      </div>
      <div class="ball" :style="{backgroundImage:'url('+ball+')',backgroundSize:'100% 100%'}">
        <img class="ballImage" :src="runaround" alt />
      </div>
      <div class="middleline2">
        <div class="linetop"></div>
        <div class="linedown"></div>
      </div>
      <div class="right">
        <div class="list0">
          <div class="text">
            <div class="title">{{list1.title}}</div>
            <div class="keyWord">关键字：{{list1.stitle}}</div>
            <div class="content">{{list1.content}}</div>
          </div>
          <div class="icon">
            <img :src="list1.picture" alt class="img" />
          </div>
        </div>
        <div class="list0">
          <div class="text">
            <div class="title">{{list2.title}}</div>
            <div class="ksyWord">关键字：{{list2.stitle}}</div>
            <div class="content">{{list2.content}}</div>
          </div>
          <div class="icon">
            <img :src="list2.picture" alt class="img" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  name: "wisdom",
  components: {},
  computed: {},
  beforeCreate() {},
  created() {
    this.getmessage();
  },
  data() {
    return {
      list1: {},
      list2: {},
      list3: {},
      list4: {},
      bg: "",
      ball: "",
      runaround: ""
    };
  },
  methods: {
    getmessage() {
      var that = this;
      Axios.get(
        "https://mock.aarnio.cn/mock/5e4a4a71a7e3066df43697b8/example/wisdom",
        {
          params: {}, // 参数
          timeout: 3000 // 配置
        }
      ).then(res => {
        that.bg = res.data.data.bg;
        that.ball = res.data.data.ball;
        that.runaround = res.data.data.runaround;
        that.list1 = res.data.data.list[0];
        that.list2 = res.data.data.list[1];
        that.list3 = res.data.data.list[2];
        that.list4 = res.data.data.list[3];
      });
    }
  }
};
</script>

<style lang="less" scoped>
.app {
  height: 658px;
  color: #ffffff;
  .title {
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
          color: #ffffff;
          font-family: Source Han Sans CN;
          font-size: 24px;
        }
      }
      .downtext {
        width: 1050px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        // height: 104px;
        color: #ffffff;
        font-size: 14px;
      }
      .picture {
        margin-top: 34px;
        .img {
          width: 1100px;
          height: 364px;
        }
      }
    }
  }
  .box {
    height: 444px;
    display: flex;
    justify-content: center;
    align-items: center;
    .left {
      height: 444px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .list0 {
        display: flex;
        justify-content: center;
        align-items: center;
        .text {
          width: 300px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-end;
          .title {
            font-size: 20px;
            font-weight: 600;
          }
          .title:hover{
            color: #007AB7;
          }
          .keyWord {
            height: 36px;
            font-size: 16px;
            opacity: 0.9;
          }
          .content {
            height: 55px;
            font-size: 16px;
            opacity: 0.5;
          }
        }
        .icon {
          height: 130px;
          margin-left: 16px;

          .img {
            width: 53px;
            height: 53px;
          }
        }
      }
    }
    .middleline {
      height: 444px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .linetop {
        background: linear-gradient(
          45deg,
          transparent 49.5%,
          #ffffff,
          transparent 50.5%
        );
        height: 77px;
        width: 85px;
        margin-top: 55px;
      }
      .linedown {
        background: linear-gradient(
          135deg,
          transparent 49.5%,
          #ffffff,
          transparent 50.5%
        );
        height: 77px;
        width: 85px;
        margin-bottom: 134px;
      }
    }
    .ball {
      .ballImage {
        animation: rotateImg 5s infinite;
        @keyframes rotateImg {
          0% {
            transform: rotate(360deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
      }
    }
    .middleline2 {
      height: 444px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .linetop {
        background: linear-gradient(
          -45deg,
          transparent 49.5%,
          #ffffff,
          transparent 50.5%
        );
        height: 77px;
        width: 85px;
        margin-top: 55px;
      }
      .linedown {
        background: linear-gradient(
          -135deg,
          transparent 49.5%,
          #ffffff,
          transparent 50.5%
        );
        height: 77px;
        width: 85px;
        margin-bottom: 134px;
      }
    }
    .right {
      height: 444px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .list0 {
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        align-items: center;
        .text {
          width: 300px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          .title {
            font-size: 20px;
            font-weight: 600;
          }
          .title:hover{
            color: #007AB7;
          }
          .keyWord {
            height: 36px;
            font-size: 16px;
            opacity: 0.9;
          }
          .content {
            height: 55px;
            font-size: 16px;
            opacity: 0.5;
          }
        }
        .icon {
          height: 130px;
          margin-right: 16px;

          .img {
            width: 53px;
            height: 53px;
          }
        }
      }
    }
  }
}
      
</style>

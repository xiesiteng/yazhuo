<template>
  <div class="app" :style="{background:`url(${this.base+'wisdbg.png'})`}">
    <div class="boxHead">智慧教学</div>
    <div class="boxBody">
      <!-- 1/ 开始 -->
      <div class="left">
        <div class="list0">
          <div class="text">
            <div class="title">{{list1.title}}</div>
            <div class="ksyWord">关键字：{{list1.stitle}}</div>
            <div class="content">{{list1.content}}</div>
          </div>
          <div class="icon">
            <img :src="list1.picture" class="img" />
          </div>
        </div>
        <div class="list0">
          <div class="text">
            <div class="title">{{list2.title}}</div>
            <div class="ksyWord">关键字：{{list2.stitle}}</div>
            <div class="content">{{list2.content}}</div>
          </div>
          <div class="icon">
            <img :src="list2.picture" class="img" />
          </div>
        </div>
      </div>
      <!-- 1/ 结束 -->
      <!-- 2/ 开始 -->
      <div class="middleline">
        <div class="linetop" :style="{background:`url(${this.base+'wisdLine1.png'})`}"></div>
        <div class="linedown" :style="{background:`url(${this.base+'wisdLine3.png'})`}"></div>
      </div>
      <!-- 2/ 结束 -->
      <!-- 3/ 开始 -->
      <div class="ball" :style="{backgroundImage:'url('+ball+')',backgroundSize:'100% 100%'}">
        <img class="ballImage" :src="base+'runaround.png'" />
      </div>
      <!-- 3/ 结束 -->
      <!-- 4/ 开始 -->
      <div class="middleline2">
        <div class="linetop" :style="{background:`url(${this.base+'wisdLine2.png'})`}"></div>
        <div class="linedown" :style="{background:`url(${this.base+'wisdLine4.png'})`}"></div>
      </div>
      <!-- 4/ 结束 -->
      <!-- 5/ 开始 -->
      <div class="right">
        <div class="list0">
          <div class="text">
            <div class="title">{{list1.title}}</div>
            <div class="ksyWord">关键字：{{list1.stitle}}</div>
            <div class="content">{{list1.content}}</div>
          </div>
          <div class="icon">
            <img :src="list1.picture" class="img" />
          </div>
        </div>
        <div class="list0">
          <div class="text">
            <div class="title">{{list2.title}}</div>
            <div class="ksyWord">关键字：{{list2.stitle}}</div>
            <div class="content">{{list2.content}}</div>
          </div>
          <div class="icon">
            <img :src="list2.picture" class="img" />
          </div>
        </div>
      </div>
      <!-- 5/ 结束 -->
    </div>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  name: "wisdom",
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
      ball: ""
      // runaround: ""
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
        // that.runaround = res.data.data.runaround;
        that.list1 = res.data.data.list[0];
        that.list2 = res.data.data.list[1];
        that.list3 = res.data.data.list[2];
        that.list4 = res.data.data.list[3];
      });
    }
  }
};
</script>

<style scoped lang="less">
* {
  font-family: "microsoft yahei", "微软雅黑";
}
.app {
  display: block;
  height: 658px;
  color: #ffffff;
  width: 100%;
  background-position: center center !important;
  .boxHead {
    background: -orange;
    text-align: center;
    font-size: 24px;
    color: #fff;
    padding: 60px 0;
  }
  .boxBody {
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
            padding-bottom: 10px;
          }
          .ksyWord {
            font-size: 16px;
            opacity: 0.9;
            padding-bottom: 10px;
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
        background-size: 100% 100% !important;
        background-position: center center !important;
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
        position: relative;
        top: 20px;
        left: -5px;
        background-size: 100% 100% !important;
        background-position: center center !important;
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
        animation: rotateImg linear 5s infinite;
        @keyframes rotateImg {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
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
        background-size: 100% 100% !important;
        background-position: center center !important;
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
        position: relative;
        top: 5px;
        left: 18px;
        background-size: 100% 100% !important;
        background-position: center center !important;
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
            padding-bottom: 10px;
          }
          .ksyWord {
            font-size: 16px;
            opacity: 0.9;
            padding-bottom: 10px;
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

<template>
  <div class="app">
    <div class="famousteacher">
      <div class="Etitle">
        <div class="Exhibitiontitle">开 / 发 / 理 / 念</div>
        <div class="introduction">我们一起来推进教育信息化建设</div>
      </div>
      <div class="class">
        <div class="box">
          <div class="middle">
            <div class="list" v-for="(items ,index) in list" :key="index"
            :style="{backgroundImage:'url('+items.picture+')'}">
              <div class="content">
                <!-- <img style="index: -3;" :src='items.picture' alt=""> -->
                <div class="title">
                  <div class="titleleft"></div>
                  <div class="titlemiddle">
                    <div class="titlecontent">{{items.title}}</div>
                  </div>
                  <div class="titleright"></div>
                </div>
                <div class="introduce">课程介绍 :</div>
                <div class="intr">{{items.content}}</div>
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
      picture: [],
      page: 0,
      length: 0
    };
  },
  created() {
    this.getmessage();
  },

  methods: {
    getmessage() {
      var that = this;
      Axios.get(
        "https://mock.aarnio.cn/mock/5e4a4a71a7e3066df43697b8/example/bzrdevelopmentprinciples",
        {
          params: {}, // 参数
          timeout: 3000 // 配置
        }
      ).then(res => {
        that.list = res.data.data.famous[that.page];
        that.length = res.data.data.famous.length;
        that.picture = res.data.data.famous[0];
        console.log(that.picture[0].picture);
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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
.app {
  height: 472px;
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
      text-align: center;
      width: 1200px;
      .box {
        display: flex;
        justify-content: center;
        align-items: center;
        .turnleft {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 80px;
          width: 80px;
          .left {
            width: 60px;
            height: 60px;
            transform: rotate(180deg);
            -ms-transform: rotate(180deg); /* Internet Explorer */
            -moz-transform: rotate(180deg); /* Firefox */
            -webkit-transform: rotate(180deg); /* Safari 和 Chrome */
            -o-transform: rotate(180deg); /* Opera */
          }
        }
        .middle {
          width: 1200px;
          display: flex;
          justify-content: center;
          align-items: center;
          .list {
            width: 200px;
            height: 300px;
            margin: 0 20px 0 20px;
            // background-image: url(https://lxf-1256064321.cos.ap-chengdu.myqcloud.com/picture/%E8%83%8C%E6%99%AF1.png);
            .picture {
              display: flex;
              // justify-content: flex-end;
              align-items: flex-end;
              // width: 285px;
              // height: 138px;
              .teacher {
                // width: 285px;
                height: 40px;
                font-size: 18px;
                background-color: rgba(0, 0, 0, 0.5);
                display: flex;
                justify-content: flex-start;
                align-items: center;
                color: #ffffff;
                .teachername {
                  margin-left: 10px;
                }
              }
            }
            .content {
              .title {
                display: flex;
                flex-direction: row;
                align-items: center;
                .titleleft,.titleright {
                  width: 50px;
                  height: 1px;
                  background-color: #DDDDDD;

                }
                .titlemiddle {
                  .titlecontent {
                    width: 120px;
                    color: #333333;
                    font-size: 18px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 18px;
                    color: #333333;
                    height: 58px;
                  }
                }
                .titleright {
                }
              }

              .introduce {
                text-align: start;
                margin-left: 12px;
                color: #666666;
              }
              .intr {
                margin-left: 12px;
                // width: 264px;
                color: #999999;
                font-size: 14px;
                text-align: start;
              }
            }
          }
          .list:hover{
            transform: scale(1.03);
            transition: all 0.6s;
            box-shadow:0px 2px 4px 0px #2B2B2B;
          }
        }
        .turnright {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 80px;
          width: 80px;
          .right {
            width: 60px;
            height: 60px;
          }
        }
      }
    }
  }
}
</style>
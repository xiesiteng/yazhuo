<template>
  <div class="app">
    <div class="famousteacher">
      <div class="Etitle">
        <div class="Exhibitiontitle">优／秀／个／例</div>
        <div class="introduction">我们一起来推进教育信息化建设</div>
      </div>
      <div class="class">
        <div class="turnleft" @click="previous()">
          <div class="little">
            换一批
            <img
              class="left"
              src="https://lxf-1256064321.cos.ap-chengdu.myqcloud.com/icon/%E8%BD%AC%E6%8D%A2.png"
              alt
            />
          </div>
        </div>
        <div class="box">
          <!-- :style="{'background-image': 'url('+'{items.picture})'}"  -->
          <div class="middle">
            <!-- https://lxf-1256064321.cos.ap-chengdu.myqcloud.com/picture/1.png -->
            <div class="list" v-for="(items ,index) in list" :key="index" style>
              <div class="picture">
                <img class="img" :src="items.picture" alt />
                <!-- <img class="img" :src='items.picture' alt=""> -->
                <!-- <div class="teacher">
                  <div class="teachername">主讲人: {{items.teacher}}</div>
                </div>-->
              </div>
              <div class="content">
                <div class="title">{{items.teacher}}</div>
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
  name: "excellentcase",
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
        "https://mock.aarnio.cn/mock/5e4a4a71a7e3066df43697b8/example/excellentcase",
        {
          params: {}, // 参数
          timeout: 3000 // 配置
        }
      ).then(res => {
        that.list = res.data.data.famous[that.page];
        that.length = res.data.data.famous.length;
      });
    },
    previous() {
      let that = this;
      if (that.page + 1 < that.length) {
        that.page++;
      } else {
        that.page = 0;
      }
      that.getmessage();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
.famousteacher {
    height: 747px;
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
    .turnleft {
      display: flex;
      justify-content: flex-end;
      align-content: center;
      font-size: 24px;
      margin-bottom: 5px;
      .little{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        color: rgba(0, 0, 0, 0.4);
        .left {
        width: 20px;
        height: 15px;
      }
      }
      
    }
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
          width: 386px;
          height: 560px;
          margin: 0 10px 0 10px;
          background-color: #f1f1f1;

          .picture {
            display: flex;
            // justify-content: flex-end;
            align-items: flex-end;
            width: 386px;
            height: 382px;
            .img {
              height: 386px;
              width: 383px;
            }
            .teacher {
              width: 285px;
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
              color: #333333;
              font-size: 18px;
              display: flex;
              text-align: start;
              font-size: 18px;
              color: #333333;
              margin-left: 10px;
            }
            .introduce {
              text-align: start;
              margin-left: 12px;
              color: #666666;
            }
            .intr {
              margin-left: 12px;
              width: 264px;
              color: #999999;
              font-size: 14px;
              text-align: start;
            }
          }
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
</style>

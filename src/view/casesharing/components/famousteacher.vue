<template>
  <div class="app">
    <div class="famousteacher">
      <div class="Etitle">
        <div class="Exhibitiontitle">名／师／讲／座</div>
        <div class="introduction">我们一起来推进教育信息化建设</div>
      </div>
      <div class="class">
        <div class="box">
          <!-- <div class="turnleft" @click="previous()">
            <img class="left" src="@/assets/icon/右翻页.png" alt />
          </div> -->
<swiper class="middle" :options="swiperOption" >
    <swiper-slide class="list" v-for="(items ,index) in list" :key="index" :style="{borderBottom:'2px solid'+items.color}">
      <div class="picture"
              :style="{
                backgroundImage:'url('+items.picture+')',
                backgroundSize: '100% 100%'}">
                <div class="teacher">
                  <div class="teachername">主讲人: {{items.teacher}}</div>
                </div>
              </div>
              <div class="content">
                <div class="title">{{items.title}}</div>
                <div class="introduce">课程介绍 :</div>
                <div class="intr">{{items.content}}</div>
              </div>
      </swiper-slide>
    <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    <div class="swiper-button-prev" slot="pagination"></div>
    <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
    <div class="swiper-button-next" slot="pagination"></div>
    <!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
  </swiper>
<!-- 
          <div class="turnright" @click="turnnext()">
            <img class="right" src="@/assets/icon/右翻页.png" alt />
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Axios from "axios";

export default {
  name: "famousteacher",
  components: {},
  data() {
    return {
      list: [],
      picture: [],
      page: 0,
      length: 0,
      swiperOption: {
        direction: "horizontal",
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 4,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        mousewheel: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
     
      }
    };
  },
  created() {
    this.getmessage();
  },

  methods: {
    getmessage() {
      var that = this;
      Axios.get(
        "https://mock.aarnio.cn/mock/5e4a4a71a7e3066df43697b8/example/famousteacher",
        {
          params: {}, // 参数
          timeout: 3000 // 配置
        }
      ).then(res => {
        that.list = res.data.data.famous[that.page];
        that.length = res.data.data.famous.length;
      });
    },
    turnnext() {
        let that = this;
        if (that.page+1 < that.length) {
            that.page++
        } else {
            that.page = 0;
        }
        that.getmessage();
    },
    previous(){
        var that = this;
        if(that.page > 0){
            that.page--
        }else{
            that.page = that.length-1;
        }
        that.getmessage();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
.famousteacher {
  height: 530px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F1F1F1;
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
          margin : 0px 20px;
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
          // border-bottom: 2px solid #007ab7;
          width: 310px;
          height: 360px;
          // margin: 0 10px 0 10px;
           background-color: #ffffff;
          .picture {
            display: flex;
            // justify-content: flex-end;
            align-items: flex-end;
            width: 276px;
            height: 138px;
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
              height: 50px;
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
        .list:hover{
          box-shadow: 0px 3px 3px 0px #454545;
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
          margin : 0px 20px;
        }
      }
    }
  }
}
</style>

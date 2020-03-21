<template>
  <div class="app" :style="{background:`url(${this.base+'mapbg.png'})`}">
    <div class="boxHead">生态共建</div>
    <!-- tab切换 开始 -->
    <div class="headTitTab">
      <div
        class="tablink"
        :class="(isShowTab===index?'tabOn':'')"
        v-for="(items, index) in list"
        :key="index"
        @click="changeTab(index)"
      >{{items.title}}</div>
    </div>
    <!-- tab切换 结束 -->
    <!-- 盒子1 开始 -->
    <div class="showBoxs show1" v-show="isShowTab===0?true:false">
      <!-- <swiper :options="swiperOption" v-if="company.length>0" >
        <swiper-slide
          v-for="(items, index) in company"
          :key="index"
          style="background:url(http://huangqinchao.host3v.vip/yazhuo/zhuanjiabg.png)"
        >
          <p class="p1">
            <img src="http://huangqinchao.host3v.vip/yazhuo/zhuajia.jpg" />
          </p>
          <p class="p2">张立国</p>
          <p class="p3">
            <span>教授</span>
            <span>博士</span>
            <span>研究生导师</span>
          </p>
        </swiper-slide>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-pagination"></div>
      </swiper>-->
      <swiper-one></swiper-one>
    </div>
    <!-- 盒子1 结束 -->
    <!-- 盒子2 开始 -->
    <div class="showBoxs show2" v-show="isShowTab===1?true:false">
      <!-- <swiper :options="swiperOption">
        <swiper-slide v-for="(items, index) in school" :key="index">
          <img src="http://huangqinchao.host3v.vip/yazhuo/xuexiao.png" />
        </swiper-slide>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-pagination"></div>
      </swiper>-->
      <swiper-two></swiper-two>
    </div>
    <!-- 盒子2 结束 -->
    <!-- 盒子3 开始 -->
    <div class="showBoxs show3" v-show="isShowTab===2?true:false">
      <div class="hezuoForm">
        <p class="ptit">合作交流</p>
        <div class="allbox">
          <div class="onebox">
            <p class="pdes">产品咨询 OR 代理咨询</p>
            <select class="inpval">
              <option value="0">请选择</option>
              <option value="1">下拉菜单1</option>
              <option value="2">下拉菜单2</option>
              <option value="3">下拉菜单3</option>
              <option value="4">下拉菜单4</option>
            </select>
          </div>
          <div class="onebox">
            <p class="pdes">留下您的姓名:</p>
            <input type="text" class="inpval" placeholder="请输入" />
          </div>
          <div class="onebox">
            <p class="pdes">您的联系方式:</p>
            <input type="tel" class="inpval" placeholder="请输入" />
          </div>
          <div class="onebox subbox">
            <button type="button" class="subbtn">提交信息</button>
          </div>
        </div>
      </div>
    </div>
    <!-- 盒子3 结束 -->
    <!-- 页面提示 开始 -->
    <!-- <div v-show="popup">
      <div class="layertip">输入正确的 {{errormessage}}</div>
      <div class="layerover" @click="closemock"></div>
    </div>-->
    <!-- 页面提示 结束 -->
  </div>
</template>
<script>
import Axios from "axios";
import swiperOne from "./swiperOne";
import swiperTwo from "./swiperTwo";
// import VueAwesomeSwiper from "vue-awesome-swiper";
// import "swiper/dist/css/swiper.css";
export default {
  name: "ecology",
  components: {
    // VueAwesomeSwiper
    swiperOne,
    swiperTwo
  },
  created() {
    this.$nextTick(() => {
      this.getmessage();
    });
  },
  data() {
    return {
      list: [],
      bg: "",
      isShowTab: 0, //索引决定显示tab选项第几个
      company: [],
      school: {},
      phone: "",
      name: "",
      sel: "",
      popup: 0,
      schoolactive: "active",
      companyactive: "",
      errormessage: "",
      // 图片轮播swiper插件
      swiperOption: {
        slidesPerView: 4, //显示几张图片
        spaceBetween: 44, //间隔多少空隙(1200-196*5)/5=44
        mousewheel: true, //鼠标滚轮滚动也可触发轮播
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  },
  mounted() {
    setTimeout(() => {
      // console.log(this.$refs.sw.children[0].children[0].style.display = "flex")
      // this.$refs.sw.children[0].children[0].style.display = "flex"
    }, 500);
  },
  methods: {
    getmessage() {
      var that = this;
      Axios.get(
        "https://mock.aarnio.cn/mock/5e4a4a71a7e3066df43697b8/example/ecology",
        {
          params: {}, // 参数
          timeout: 3000 // 配置
        }
      ).then(res => {
        that.list = res.data.data.list;
        that.bg = res.data.data.bg;
        that.company = res.data.data.list[that.isShowTab].company;
        that.school = res.data.data.list[1].company.school;
        // console.log(that.company)
      });
    },
    // tab切换
    changeTab(index) {
      this.isShowTab = index;
      console.log(index);
    }
    // 表单提交
    // submit() {
    //   let that = this;
    //   !/^[\u4e00-\u9fa5]{2,4}$/.test(this.name) ||
    //   !/^1[3456789]\d{9}$/.test(this.phone)
    //     ? that.opean()
    //     : console.log(this.sel + this.name + this.phone);
    // },
    //打开活动规则页面
    // opean() {
    //   !/^[\u4e00-\u9fa5]{2,4}$/.test(this.name)
    //     ? (this.errormessage += "姓名")
    //     : "";
    //   !/^1[3456789]\d{9}$/.test(this.phone)
    //     ? (this.errormessage += "手机号码")
    //     : "";
    //   this.popup = 1;
    // },
    //关闭活动规则页面
    // closemock() {
    //   this.popup = 0;
    //   this.errormessage = "";
    // },
    // changeschool() {
    //   this.school = this.list[1].company.school;
    //   this.schoolactive = "active";
    //   this.companyactive = "";
    // },
    // changecompany() {
    //   this.school = this.list[1].company.company;
    //   this.companyactive = "active";
    //   this.schoolactive = "";
    // }
  }
};
</script>

<style scoped lang="less">
.app {
  // 背景图片
  height: 655px;
  width: 100%;
  background-position: center center !important;
  // 标题文字
  .boxHead {
    background: -orange;
    text-align: center;
    font-size: 24px;
    color: #333;
    padding: 20px 0;
  }
  // tab切换
  .headTitTab {
    background: -pink;
    width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid #d6d6d6;
    .tablink {
      display: inline-block;
      width: auto;
      cursor: pointer;
      font-size: 20px;
      color: #333;
      padding-bottom: 15px;
      position: relative;
    }
    .tablink:hover,
    .tabOn {
      color: #007ab7;
    }
    .tablink:hover:after,
    .tabOn:after {
      content: "";
      display: inline-block;
      width: 144px;
      height: 8px;
      background: url(http://huangqinchao.host3v.vip/yazhuo/online.png);
      background-size: 100% 100% !important;
      background-repeat: no-repeat !important;
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .showBoxs {
    // tab切换内容
    padding-top: 30px;
    width: 1200px;
    margin: 0 auto;
  }
  .show1 {
    // 盒子1
    background: -pink;
    .swiper-container {
      overflow: hidden;
      height: 270px;
      .swiper-wrapper {
        // 不能识别swiper-wrapper
        width: 100%;
        height: 100%;
        background: greenyellow;
        .swiper-slide {
          display: inline-block;
          width: 196px !important;
          min-width: 196px !important;
          height: 270px;
          position: relative;
          p {
            position: absolute;
          }
          .p1 {
            border: -1px solid red;
            display: inline-block;
            width: 122px;
            height: 122px;
            top: 48px;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 100%;
            overflow: hidden;
            img {
              display: block;
              width: 100%;
            }
          }
          .p2 {
            width: 100%;
            color: #333;
            font-size: 20px;
            text-align: center;
            top: 190px;
            font-weight: 700;
          }
          .p3 {
            width: 100%;
            text-align: center;
            top: 225px;
            display: flex;
            justify-content: space-around;
            span {
              color: #666;
              font-size: 18px;
            }
          }
        }
      }
    }
  }
  .show2 {
    background: -orange;
    .swiper-container {
      overflow: hidden;
      height: auto;
      .swiper-wrapper {
        // 不能识别swiper-wrapper
        width: 100%;
        height: 100%;
        background: greenyellow;
        .swiper-slide {
          display: inline-block;
          // min-width: 190px !important;
          width: 190px !important;
          height: 190px;
          margin-bottom: 40px;
          img {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  .show3 {
    background: -greenyellow;
    .hezuoForm {
      display: block;
      margin: 0 auto;
      width: 400px;
      height: auto;
      border-top: 3px solid #007ab7;
      background: rgba(255, 255, 255, 0.6);
      border-radius: 3px;
      box-shadow: 0 0 10px #aaaaaa;
      .ptit {
        font-size: 24px;
        font-weight: 700;
        padding: 15px 0 50px 0;
        text-align: center;
      }
      .allbox {
        width: 90%;
        margin: 0 auto;
        .onebox {
          padding-bottom: 20px;
          .pdes {
            font-size: 18px;
            color: #333;
            padding-bottom: 10px;
          }
          .inpval {
            display: block;
            width: 100%;
            height: 50px;
            line-height: 50px;
            text-indent: 1em;
            font-size: 16px;
            border: 1px solid #cccccc;
            &:focus {
              border: 1px solid #999999;
            }
          }
          .subbtn {
            display: block;
            width: 100%;
            height: 40px;
            line-height: 40px;
            background: #007ab7;
            color: #ffffff;
            &:hover {
              cursor: pointer;
              background: #1697d8;
            }
          }
        }
        .subbox {
          padding-bottom: 30px;
        }
      }
    }
  }
  // 页面提示
  // .layertip {
  //   position: fixed;
  //   font-size: 48px;
  //   height: 100px;
  //   width: 600px;
  //   background-color: #ffffff;
  //   color: #007ab7;
  //   border-radius: 0.25rem;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   left: 50%;
  //   top: 50%;
  //   transform: translate(-50%, -50%);
  //   z-index: 1000;
  // }
  // .layerover {
  //   position: fixed;
  //   width: 100%;
  //   height: 100%;
  //   opacity: 0.7;
  //   filter: alpha(opacity=70);
  //   top: 0;
  //   left: 0;
  //   z-index: 999;
  //   background-color: #111111;
  // }
}
</style>


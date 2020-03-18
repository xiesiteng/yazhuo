<template>
  <div class="app" style="background:url(http://huangqinchao.host3v.vip/yazhuo/mapbg.png)">
    <div class="boxHead">生态共建</div>
    <!-- tab切换 开始 -->
    <div class="headTitTab">
      <div
        :class="(choose===index?'tabOn':'')"
        class="tablink"
        v-for="(items, index) in list"
        :key="index"
        @click="changeTab(index)"
      >{{items.title}}</div>
    </div>
    <!-- tab切换 结束 -->
    <!-- 盒子1 开始 -->
    <div class="showBoxs show1" v-show="choose == 0?true:false">
      <p>1111111111111111</p>
      <!-- <div class="left"></div> -->
      <!-- <swiper :options="swiperOption" class="list"> -->
      <!-- <swiper-slide
          style="display:flex;"
          class="expert"
          v-for="(items, index) in company"
          :key="index"
        >
          <div class="picture">
            <img :src="items" alt class="img" />
          </div>
      </swiper-slide>-->
      <!-- <div class="swiper-button-prev" slot="pagination"></div> -->
      <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
      <!-- <div class="swiper-button-next" slot="pagination"></div> -->
      <!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
      <!-- </swiper> -->
      <!-- <div class="right"></div> -->
    </div>
    <!-- 盒子1 结束 -->
    <!-- 盒子2 开始 -->
    <div class="showBoxs show2" v-show="choose == 1?true:false">
      <p>222222222222</p>
      <!-- <div class="left2">
        <div class="school" :class="schoolactive" @click="changeschool">学校</div>
        <div class="company" :class="companyactive" @click="changecompany">公司</div>
      </div>-->
      <!-- <swiper class="list" :options="swiperOption"> -->
      <!-- <swiper-slide class="expert" v-for="(items, index) in school" :key="index">
          <div class="picture">
            <img :src="items" alt class="imgg" />
          </div>
      </swiper-slide>-->
      <!-- <div class="swiper-button-prev" slot="pagination"></div> -->
      <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
      <!-- <div class="swiper-button-next" slot="pagination"></div> -->
      <!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
      <!-- </swiper> -->
      <!-- <div class="right"></div> -->
    </div>
    <!-- 盒子2 结束 -->
    <!-- 盒子3 开始 -->
    <div class="showBoxs show3" v-show="choose == 2?true:false">
      <p>3333333333333</p>
      <!-- <div class="box">
        <div class="boxtitle">意向录入</div>
        <div class="boxtext">
          <div class="input">
            <div class="listtitle">职教 or 基教:</div>
            <div class="select">
              <select class="sel" name id v-model="sel">
                <option value="0" selected>基教</option>
                <option value="1">职教</option>
              </select>
            </div>
          </div>
          <div class="input">
            <div class="listtitle">留下您的姓名:</div>
            <div class="boxinput">
              <input class="inp" type="text" value="姓名" v-model="name" />
            </div>
          </div>
          <div class="input">
            <div class="listtitle">您的联系方式:</div>
            <div class="boxinput">
              <input class="inp" type="text" value="电话" v-model="phone" />
            </div>
          </div>
        </div>
        <div class="button">
          <button class="btn" @click="submit">提交信息</button>
        </div>
      </div>-->
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
export default {
  name: "ecology",
  components: {},
  computed: {},
  beforeCreate() {},
  created() {
    this.getmessage();
  },
  data() {
    return {
      list: [],
      bg: "",
      choose: 0,
      company: [],
      school: {},
      phone: "",
      name: "",
      sel: "",
      popup: 0,
      schoolactive: "active",
      companyactive: "",
      errormessage: "",
      swiperOption: {
        direction: "horizontal",
        slidesPerView: 5,
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
        }
      }
    };
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
        that.company = res.data.data.list[that.choose].company;
        that.school = res.data.data.list[1].company.school;
      });
    },
    // tab切换
    changeTab(index) {
      this.choose = index;
      console.log(index);
    },
    submit() {
      let that = this;
      !/^[\u4e00-\u9fa5]{2,4}$/.test(this.name) ||
      !/^1[3456789]\d{9}$/.test(this.phone)
        ? that.opean()
        : console.log(this.sel + this.name + this.phone);
    },
    //打开活动规则页面
    opean() {
      !/^[\u4e00-\u9fa5]{2,4}$/.test(this.name)
        ? (this.errormessage += "姓名")
        : "";
      !/^1[3456789]\d{9}$/.test(this.phone)
        ? (this.errormessage += "手机号码")
        : "";
      this.popup = 1;
    },
    //关闭活动规则页面
    closemock() {
      this.popup = 0;
      this.errormessage = "";
    },
    changeschool() {
      this.school = this.list[1].company.school;
      this.schoolactive = "active";
      this.companyactive = "";
    },
    changecompany() {
      this.school = this.list[1].company.company;
      this.companyactive = "active";
      this.schoolactive = "";
    }
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
    padding: 40px 0;
  }
  // tab切换
  .headTitTab {
    background: -pink;
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
    text-align: center;
    padding: 20px 0;
    font-size: 30px;
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

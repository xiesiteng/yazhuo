<template>
  <div class="app" :style="{backgroundImage:'url('+bg+')',
            backgroundSize:'100% 100%'}">
    <div class="title">
      <div class="contents">
        <div class="uptitle">
          <div class="titlename">生/态/共/建</div>
        </div>
        <div class="downtext">我们一起来推进教育信息化建设</div>
      </div>
    </div>
    <div class="ecologymenu">
      <div
        class="ecologybutton"
        :style="{borderBottom:index == choose?'1px solid #007AB7':'2px solid #d6d6d6'}"
        v-for="(items, index) in list"
        :key="index"
      >
        <div class="ecologycontent" @click="click(index)">{{items.title}}</div>
      </div>
      <div class="ecologyline"></div>
    </div>
    <div class="show1" v-show="choose == 0?true:false">
      <div class="left"></div>
      <swiper :options="swiperOption" class="list" >
        <swiper-slide style="display:flex;" class="expert" v-for="(items, index) in company" :key="index">
            <div class="picture">
              <img :src="items" alt class="img" />
            </div>
        </swiper-slide>
        <div class="swiper-button-prev" slot="pagination"></div>
        <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
        <div class="swiper-button-next" slot="pagination"></div>
        <!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
      </swiper>
      <div class="right"></div>
    </div>
    <div class="show2" v-show="choose == 1?true:false">
      <div class="left2">
        <div class="school" :class="schoolactive" @click="changeschool">学校</div>
        <div class="company" :class="companyactive" @click="changecompany">公司</div>
      </div>
      <swiper class="list" :options="swiperOption">
        <swiper-slide class="expert" v-for="(items, index) in school" :key="index">
          <div class="picture">
            <img :src="items" alt class="imgg" />
          </div>
        </swiper-slide>
        <div class="swiper-button-prev" slot="pagination"></div>
        <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
        <div class="swiper-button-next" slot="pagination"></div>
        <!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
      </swiper>
      <div class="right"></div>
    </div>
    <div class="show3" v-show="choose == 2?true:false">
      <div class="box">
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
      </div>
    </div>

    <div v-show="popup">
      <!--这里是要展示的内容层-->
      <div class="mock">输入正确的 {{errormessage}}</div>
      <!--这里是半透明背景层-->
      <div class="over" @click="closemock"></div>
    </div>
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
      schoolactive:'active',
      companyactive:'',
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
    click(index) {
      this.choose = index;
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
      this.schoolactive ='active';
      this.companyactive = '';
    },
    changecompany() {
      this.school = this.list[1].company.company;
      this.companyactive = 'active';
      this.schoolactive = '';
    }
  }
};
</script>

<style lang="less" scoped>
.app {
  height: 776px;
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
  }
  .ecologymenu {
    display: flex;
    justify-content: center;
    align-items: center;
    .ecologybutton {
      // border-bottom: 2px solid #d6d6d6;
      .ecologycontent {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60px;
        width: 400px;
        color: #333333;
        font-size: 20px;
      }
    }
    // .ecologyline {
    // }
  }
  .show1,
  .show2 {
    height: 482px;
    display: flex;
    justify-content: center;
    align-items: center;
    // .left {
    // }
    .left2 {
      height: 478px;
      .school,
      .company {
        width: 60px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #b2b2b2;
      }
      .active {
        background-color: #007ab7;
        color: #ffffff;
      }
    }
    .list {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1200px;
      .expert {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .picture {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 180px;
          height: 260px;
          .img {
            width: 180px;
            height: 260px;
          }
          .imgg {
            width: 180px;
            height: 180px;
            border-radius: 50%;
          }
        }
      }
    }
    // .right {
    // }
  }
  .show3 {
    height: 540px;
    display: flex;
    justify-content: center;
    align-items: center;
    .box {
      height: 500px;
      width: 400px;
      background: rgba(255, 255, 255, 0.5);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .boxtitle {
        height: 54px;
        color: #333333;
        font-size: 24px;
        font-weight: bold;
        display: flex;
        display: flex;
        justify-content: center;
        align-items: center;
        justify-content: center;
      }
      .boxtext {
        height: 324px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .input {
          width: 360px;
          height: 108px;
          .listtitle {
            height: 38px;
            font-size: 18px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
          }
          .select {
            .sel {
              height: 50px;
              width: 360px;
              font-size: 16px;
            }
          }
          .boxinput {
            .inp {
              height: 50px;
              width: 360px;
              font-size: 16px;
            }
          }
        }
      }
      .button {
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        .btn {
          width: 360px;
          height: 40px;
          font-size: 18px;
          background-color: #007ab7;
          color: #ffffff;
        }
      }
    }
  }

  .rule {
    position: absolute;
    width: 0.82rem;
    height: 0.36rem;
    top: 0.08rem;
    right: 0rem;
    background: #111111;
  }
  .mock {
    position: fixed;
    font-size: 48px;
    height: 100px;
    width: 600px;
    background-color: #ffffff;
    color: #007ab7;
    border-radius: 0.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
  }
  .over {
    position: fixed;
    width: 100%;
    height: 100%;
    opacity: 0.7; //透明度为70%
    filter: alpha(opacity=70);
    top: 0;
    left: 0;
    z-index: 999;
    background-color: #111111;
  }

  .active{
    background-color: #007AB7;
    color: #FFFFFF;
  }
}
</style>

<template>
  <div class="content">
    <div class="text">
      <div class="left"></div>
      <div class="right">
        <div class="box">
          <div class="title">
            <div class="titletext">
              <div class="titlebody">亚卓智慧平台</div>
              <div class="titlefooter">Yazhuo Wisdom Platform</div>
            </div>
            <div class="wechat" >
                <i class="iconfont iconweixin" style="color:#333333; "></i>
            </div>
          </div>
          <div class="logincenter">
            <div class="loginbootom">登录中心</div>
          </div>
          <div class="line"></div>
          <div class="words">
            <div class="account">
              <div class="picture">
                <i class="iconfont iconzhanghao"></i>
              </div>
              <div class="input">
                <input class="input" type="text" value="请输入您的账号" />
              </div>
            </div>
            <div class="password">
              <div class="picture">
                <i class="iconfont iconmima"></i>
              </div>
              <div class="input">
                <input class="input" type="text" value="请输入您的密码" />
              </div>
            </div>
            <div class="button">
              <button class="btn" @click="gotoMenu">
                立即登录
              </button>
            </div>
            <div class="forget">
              <div class="forgetPD">忘记密码?</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Axios from "axios";

export default {
  name: "login",
  components: {},
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.getmessage();
  },

  methods: {
    getmessage() {
      var that = this;
      Axios.get(
        "https://mock.aarnio.cn/mock/5e4a4a71a7e3066df43697b8/example/login",
        {
          params: {}, // 参数
          timeout: 3000 // 配置
        }
      ).then(res => {
        that.list = res.data.data.famous;
      });
    },
    gotoMenu(){
        this.$router.replace('/home')
    }
  }
};
</script>

<style scoped lang="less">
@color_1: #333333;
@color_2: #808080;
@color_3: #007ab7;
@color_4: #ffffff;
@color_5: rgba(179, 179, 179, 0.5);
@font_family_1: Source Han Sans CN;
@background_color_1: #ffffff;
@background_color_2: #007ab7;
@background_color_3: #ebebeb;

.content {
  height: 100%;
  width: 100%;
  background-image: url(https://lxf-1256064321.cos.ap-chengdu.myqcloud.com/picture/%E7%99%BB%E9%99%86%E9%A1%B5%E8%83%8C%E6%99%AF.png);
    background-size: 100% 100%;
}

.text {
  height: 1080px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.left {
  width: 700px;
  height: 680px;
}

.box {
  width: 540px;
  height: 680px;
  background-color: @background_color_1;
  border-radius: 8px;
}
.title{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.titletext {
  height: 187px;
    width: 500px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.titlebody {
  color: @color_1;
  font-size: 48px;
  font-family: Source Han Sans CN;
  font-weight: 600;
}

.titlefooter {
  color: @color_2;
  font-size: 26px;
}

.logincenter {
  width: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  color: @color_3;
  font-family: @font_family_1;
  font-weight: 500;
  font-size: 24px;
}
.line {
  width: 48px;
  height: 4px;
  background: #007ab7;
  border-radius: 2px;
  margin-left: 40px;
}

.loginbootom {
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.words {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.account {
  width: 460px;
  height: 68px;
  width: 460px;
  margin-top: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.password {
  width: 460px;
  height: 68px;
  width: 460px;
  margin-top: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.img {
  width: 36px;
  height: 38px;
}

.button {
  margin-top: 40px;
  width: 460px;
}

.btn {
  height: 60px;
  width: 260px;
  color: @color_4;
  background-color: @background_color_2;
  font-size: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
}

.forgetPD {
  height: 60px;
  width: 460px;
  color: @color_5;
  font-size: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.picture {
  height: 68px;
  width: 68px;
  background-color: #007ab7;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px 0px 0px 8px;
}

.input {
  height: 68px;
  width: 320px;
  font-size: 28px;
  background-color: #EBEBEB;
}
.iconfont{
    font-size: 40px;
    color: #ffffff;
}
.wechat{
    height:187px;
}
</style>

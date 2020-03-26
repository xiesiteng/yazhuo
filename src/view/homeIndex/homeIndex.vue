<template>
  <div>
    <!-- 亚卓教育素养培养生态空间 -->
    <banner />
    <!-- 亚卓教育素养培养全场景覆盖 -->
    <solve />
    <!-- 精品课程展示 -->
    <curriculum />
    <!-- 核心展示++原型图没有 -->
    <!-- <div class="exhibition">
      <HelloWorld />
    </div>-->
    <!-- 智慧教学 -->
    <wisdom />
    <!-- 生态共建 -->
    <ecology />

    <bind-account :bindShow = bindShow></bind-account>

    <back-top></back-top>
  </div>
</template>

<script>
import banner from "./components/banner.vue";
import HelloWorld from "./components/HelloWorld.vue";
import curriculum from "./components/curriculum.vue";
import wisdom from "./components/wisdom.vue";
import solve from "./components/solve.vue";
import ecology from "./components/ecology.vue";
export default {
  components: {
    banner,
    solve,
    curriculum,
    HelloWorld,
    wisdom,
    ecology
  },
  data () {
    return{
      userAgent: '',
      bindShow: false // 绑定账户弹窗
    }
  },
  mounted () {
    this.init()
  },
  methods:{
    // 获取地址栏中的code
    getQueryString (name) {  
          var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");  
          var r = window.location.search.substr(1).match(reg);  
          if (r != null) return unescape(r[2]); return null;    
    },
    // 判断用户是PC端还是移动端
    judgeUserType () {
      if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
          //移动端
          this.userAgent = 'app'
      } else {
          //pc端
          this.userAgent = 'pc'
      }
    },
    /*
     *  1.首页加载的时候如果有code就调接口判断该用户账号与其微信号是否关联
     *  2.根据接口返回结果，如果bindFlag为true则已关联，用户可直接浏览网站; 为false则显示绑定账户弹窗   
     */
    init () {
      if (this.isblank(this.getQueryString('code'))) {
        console.log('未使用微信重定向跳转到首页')
      } else {
        this.judgeUserType()
         let code = this.getQueryString('code')
         this.$api.getBind({
          //  code: '061Sniq817EzxL11v9s81wSqq81Sniq8',
           code: code,
           state: this.userAgent
         }).then(res => {
           if (res.code == 200) {
             if (res.data.bindFlag) {
                //  已关联,视为登录流程完全成功,将token存到localstorage
                let token = res.data.authorization
                localStorage.setItem('token', token)
            } else{
                //  未关联,将accessToken和openid存到session,并弹出绑定账户的弹窗
                let accessToken = res.data.usWechat.accessToken
                let openid = res.data.usWechat.openid
                sessionStorage.setItem('accessToken', accessToken)
                sessionStorage.setItem('openid', openid)
                this.bindShow = true
            }
           }
         })
      }
    }
  }
}
</script>

  }
};
</script>

<style scoped lang="less">
</style>

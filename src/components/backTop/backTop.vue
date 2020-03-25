<template>
  <div class="main">
    <transition name="fade">
      <!-- back-wrap绝对定位 -->
      <div class="back-wrap" :class="showBtn ? 'opa1' : 'opa0'">
        <!-- back-wrap-inner相对定位 -->
        <div class="back-wrap-inner flex-end" >
          <div class="back-item-wrap">
            <!-- 回到顶部的箭头 -->
            <div class="back-item flex-center" @click="toTop">
              <img :src="this.base+'toparrow.png'" />
            </div>
            <!-- 售前与售后 -->
            <div
              v-for="(item, index) in itemList"
              :key="index"
              :class="['back-item', active == index ? 'back-item-active' : '']"
              @click="choose(index)"
            >{{item}}</div>
            <!-- 售前与售后end -->
          </div>
          <!-- 售前 售后的电话显示 -->
          <div class="sale-pre flex-center-y" v-show="active == 0">
            <img :src="this.base+'toptel.png'" />
            <span>6 8 7 3 0 6 2 5</span>
          </div>
          <div class="sale-over flex-center-y" v-show="active == 1">
            <img :src="this.base+'toptel.png'" />
            <span>6 8 7 3 0 6 2 5</span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      itemList: ["售前", "售后"],
      showBtn: false,
      scrollTop: 0
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("scroll", this.scrollToTop, true);
    });
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop, true);
  },
  methods: {
    choose(index) {
      if (this.showBtn){
        this.active = index;
      }
    },
    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop() {
      const _this = this;
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      _this.scrollTop = scrollTop;
      if (_this.scrollTop > 60) {
        _this.showBtn = true;
      } else {
        _this.showBtn = false;
      }
    },
    // 回到顶部
    toTop() {
      var timer = setInterval(function(){
            let osTop = document.documentElement.scrollTop || document.body.scrollTop;
            let ispeed = Math.floor(-osTop / 5); 
            document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
            this.isTop = true;
            if(osTop === 0){
              clearInterval(timer);
            }
          },30)
    }
  }
};
</script>

<style scoped lang="less">
.back-wrap {
  width: 253px;
  height: 138px;
  position: fixed;
  bottom: 110px;
  right: 40px;
  transition: all 0.5s ease-in-out;
  .back-wrap-inner {
    width: 100%;
    height: 100%;
    position: relative;
    .back-item-wrap {
      width: 60px;
      height: 100%;
      border: 1px solid #ccc;
      box-sizing: border-box;
      background-color: #fff;
      .back-item {
        width: 100%;
        height: 46px;
        // cursor: pointer;
        text-align: center;
        line-height: 46px;
        img {
          width: 43px;
          height: 24px;
        }
      }
      .back-item-active {
        background-color: #007ab7;
        color: #fff;
      }
    }
    .sale-pre,
    .sale-over {
      width: 183px;
      height: 45px;
      background-color: #007ab7;
      padding: 0 10px;
      box-sizing: border-box;
      position: absolute;
      left: 0;
    }
    .sale-pre span,
    .sale-over span {
      color: #fff;
      margin-left: 10px;
    }
    .sale-pre img,
    .sale-over img {
      width: 30px;
      height: 30px;
    }
    .sale-over {
      bottom: 0;
    }
  }
}
.opa1{opacity: 1;cursor: pointer!important;}
.opa0{opacity: 0;cursor: default!important;}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity .8s;
}
/* .fade-leave-active, 2.1.8 版本以下 */
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
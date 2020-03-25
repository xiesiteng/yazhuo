<template>
  <div class="banners">
    <div class="bannerBox" :style="{background:`url(${this.base+'bannerbg.png'})`}">
      <!-- 视频背景 开始 -->
      <video class="video" autoplay muted="muted" loop="loop" width="100%">
        <source
          :src="infmUri"
          type="video/mp4"
        />
      </video>
      <!-- 视频背景 结束 -->
      <div :class="'searchdetail ' + (isText?'':'closeLay')">
        <div class="searchdetail2">
          <div class="texts" v-show="isText">
            <div class="w1">亚卓教育素养培养生态空间</div>
            <div class="w2">Vocational schools cultivate ecological space</div>
          </div>
          <div :class="'buttons ' + (isText?'':'closeBtn')" @click="isShowLay()">
            <i class="iconfont iconicon-"></i>
          </div>
          <!-- 输入框 开始 -->
          <!-- <div class="input-box">
            <input type="text" v-model="searchText" placeholder="请输入关键词" />
            <div class="btn">
              <i class="iconfont iconfangdajing"></i>
            </div>
          </div>-->
          <!-- 输入框 结束 -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "banner",
  data() {
    return {
      isActive: false,
      isText: true,
      infmImgUri: '', // 图封面
      infmUri: '' // 资源链接
    };
  },
  created () {
    this.getBannerInfo()
    this.infmImgUri = this.base+'bannerbg.png'
    // this.infmUri = "https://stream7.iqilu.com/10339/article/202002/18/02319a81c80afed90d9a2b9dc47f85b9.mp4"
  },
  methods: {
    getBannerInfo () {
      this.$api.getInfmByParams({
        infmTypeId: 7
      }).then(res => {
        if (res.code == 200) {
          console.log(res.data)
          if (res.data.list) {
            let bannerInfo = res.data.list[0]
            this.infmImgUri = bannerInfo.infmImgUri
            this.infmUri = bannerInfo.infmUri
            console.log('url------------------------------------------------------------', this.infmUri)
          }
        }
      })
    },
    isShowLay() {
      this.isText = !this.isText;
    }
  }
};
</script>

<style lang="less" scoped>
* {
  font-family: "microsoft yahei", "微软雅黑";
}
.bannerBox {
  position: relative;
  background-position: center center !important;
  background-size: 100% 100% !important;
  width: 100%;
  height: 870px;
  //    视频背景
    .video {
      object-fit: fill;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  .searchdetail {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 200px;
    width: 100%;
    background: rgba(0, 0, 0, 0.2);
    .searchdetail2 {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      position: relative;
      .texts {
        display: inline-block;
        text-align: center;
        .w1 {
          padding-bottom: 10px;
          font-size: 50px;
          color: #ffffff;
          width: 100%;
        }
        .w2 {
          font-size: 20px;
          color: #ffffff;
          width: 100%;
          text-align-last: justify;
        }
      }
      //   输入框
      //   .input-box {
      //     width: @baseWidth;
      //     height: 60px;
      //     display: flex;
      //     input {
      //       width: @baseWidth - 100px;
      //       height: 100%;
      //       padding: 0;
      //       margin: 0;
      //       box-sizing: border-box;
      //       padding: 25px 10px;
      //     }
      //     .btn {
      //       width: 100px;
      //       height: 100%;
      //       background: #007ab7;
      //       display: flex;
      //       align-items: center;
      //       justify-content: center;
      //       cursor: pointer;
      //       .iconfont {
      //         font-size: 24px;
      //       }
      //     }
      //   }
      .buttons {
        width: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        // background: rgba(0, 0, 0, 1);
        // opacity: 0.1;
        background: rgba(0, 0, 0, 0.1);
        cursor: pointer;
        height: 200px;
        position: absolute;
        right: 20px;
        top: 0;
        i {
          color: #ffffff;
          font-size: 36px;
          transform: rotate(180deg);
        }
        &:hover {
          // background: rgba(0, 0, 0, 1);
          // opacity: 0.2;
          background: rgba(0, 0, 0, 0.2);
        }
      }
      .closeBtn {
        left: 0;
        i {
          transform: rotate(0deg);
        }
      }
    }
  }
  .closeLay {
    width: auto;
  }
}
// 1600px
@media (max-width: 1600px) {
  .bannerBox {
    height: 835px;
  }
}
// 1440px
@media (max-width: 1440px) {
  .bannerBox {
    height: 800px;
  }
}
// 1366px
@media (max-width: 1366px) {
  .bannerBox {
    height: 770px;
  }
}
</style>

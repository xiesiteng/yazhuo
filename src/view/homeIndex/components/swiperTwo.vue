<template>
  <div class="main">
    <div class="main">
    <div class="myswiper">
      <div class="left-arrow flex-center" @click="pre()">
        <img src="http://huangqinchao.host3v.vip/yazhuo/arrowfl.png" alt="">
      </div>
      <div class="right-arrow flex-center" @click="next()">
        <img src="http://huangqinchao.host3v.vip/yazhuo/arrowfr.png" alt="">
      </div>
      <!-- 轮播内容 -->
      <div class="myswiper-inner-wrap">
        <div class="myswiper-inner flex-wrap">
          <div class="myswiper-inner-item" v-for="(item, index) in list" :key="index">
            <img :src="item.url" alt="">
          </div>
        </div>
      </div>
      <!-- 轮播内容end -->
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return{
      list: [
        {url: 'http://huangqinchao.host3v.vip/yazhuo/xiao1.png'},
        {url: 'http://huangqinchao.host3v.vip/yazhuo/xiao1.png'},
        {url: 'http://huangqinchao.host3v.vip/yazhuo/xiao1.png'},
        {url: 'http://huangqinchao.host3v.vip/yazhuo/xiao1.png'},
        {url: 'http://huangqinchao.host3v.vip/yazhuo/xiao1.png'},
        {url: 'http://huangqinchao.host3v.vip/yazhuo/xiao1.png'},
        {url: 'http://huangqinchao.host3v.vip/yazhuo/xiao1.png'},
        {url: 'http://huangqinchao.host3v.vip/yazhuo/xiao1.png'},
        {url: 'http://huangqinchao.host3v.vip/yazhuo/xiao1.png'},
        {url: 'http://huangqinchao.host3v.vip/yazhuo/xiao1.png'},
      ]
    }
  },
  methods:{
    next () {

    },
    pre () {}
  }
}
</script>

<style lang="less" scoped>
  .myswiper{
    width: 1200px;
    height: 450px;
    position: relative;
    margin-top: 50px;
    .left-arrow{
      width: 40px;
      height: 90px;
      // background-color: peru;
      position: absolute;
      top: 130px;
      left: -60px;
      cursor: pointer;
      border: 1px solid #ccc;
    }
    .right-arrow{
      width: 40px;
      height: 90px;
      // background-color: palevioletred;
      position: absolute;
      top: 130px;
      right: -60px;
      cursor: pointer;
      border: 1px solid #ccc;
    }
    .left-arrow img, .right-arrow img{
      width: 24px;
      height: 43px;
    }
    // 轮播内容
    .myswiper-inner-wrap{
      width: 100%;
      height: 100%;
      .myswiper-inner{
        width: 100%;
        height: 100%;
        .myswiper-inner-item{
          width: 188px;
          height: 188px;
          border-radius: 50%;
          box-shadow: 0px 0px 8px 6px rgba(0,0,0, .2);
          margin: 0 26px 56px;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
</style>
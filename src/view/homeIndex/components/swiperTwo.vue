<template>
  <div class="main">
    <div class="main">
    <div class="myswiper">
      <div class="left-arrow flex-center" @click="pre()" v-show="pageNum !== 1">
        <img :src="base +'arrowfl.png'" alt="">
      </div>
      <div class="right-arrow flex-center" @click="next()" v-show="!isOver">
        <img :src="base +'arrowfr.png'" alt="">
      </div>
      <!-- 轮播内容 -->
      <div class="myswiper-inner-wrap">
        <div class="myswiper-inner flex-wrap">
          <div class="myswiper-inner-item" v-for="(item, index) in list" :key="index">
            <img :src="item.infmImgUri" alt="">
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
  // props: ['school'],
  data () {
    return{
      list: [],
      pageNum: 1,
      pageSize: 10,
      isOver: false
    }
  },
  mounted () {
    this.init()
  },
  methods:{
    // 初始化加载合作学校第一页的数据
    init () {
      this.$api.getTeamAndSchool({
        infmParentId: 37,
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }).then(res => {
        if (res.code == 200) {
          if (this.pageNum < res.data.pages) {
            this.list = res.data.list
          } else if(this.pageNum == res.data.pages){
            this.list = res.data.list
            this.isOver = true
          }
        }
      })
    },
    // 下一个
    next () {
      if (this.isOver) {
        return false
      }
      this.pageNum++
      this.init()
    },
    // 前一个
    pre () {
      this.isOver = false
      if (this.pageNum == 1) {
        return false
      }
      this.pageNum--
      this.init()
    }
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
      left: -50px;
      cursor: pointer;
      border: 1px solid #ccc;
    }
    .right-arrow{
      width: 40px;
      height: 90px;
      // background-color: palevioletred;
      position: absolute;
      top: 130px;
      right: -50px;
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
        .myswiper-inner-item:hover{
          transform: scale(1.05);
        }
        .myswiper-inner-item{
          width: 188px;
          height: 188px;
          border-radius: 50%;
          // box-shadow: 0px 0px 8px 6px rgba(0,0,0, .2);
          margin: 0 26px 56px;
          transition: all .3s ease-in-out;
          cursor: pointer;
          img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
      }
    }
  }
</style>
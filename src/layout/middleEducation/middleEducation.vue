<template>
  <div class="main">
     <!-- 头部 -->
    <header-asideMenu />
    <div class="middle">
      <div class="middle-top">
        <img src="https://lxf-1256064321.cos.ap-chengdu.myqcloud.com/banner/%E4%BA%A7%E5%93%81%E4%B8%AD%E5%BF%83.png" alt="">
        <div class="fence">
          <div class="fence-left flex-center-col">
            <img src="" alt="">
            <span>职业教育</span>
          </div>
          <div class="fence-right">
            <img src="" alt="">
            <span>基础教育</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <tail />

    <!-- 回到顶部 -->
    <back-top></back-top>
  </div>
</template>

<script>
export default {
  data () {
    return{

    }
  }
}
</script>

<style lang="less" scoped>
  .middle{
    .middle-top{
      width: 100%;
      height: auto;
      position: relative;
      margin-bottom: 120px;
      img {
        width: 100%;
        height: auto;
      }
      .fence{
        box-sizing: border-box;
        width: 1200px;
        height: 160px;
        background-color: #fff;
        position: absolute;
        bottom: -80px;
        left: 50%;
        transform: translateX(-50%);
        .fence-left{
          background-color: #007AB7;
          width: 50%;
          height: 100%;
          font-size: 18px;
          color: #fff;
        }
        .fence-right{
          width: 50%;
          height: 100%;
          font-size: 18px;
          color: #333;
        }
        .fence-left img,.fence-right img{
          width: 95px;
          height: 78px;
        }
      }
    }
  }
</style>
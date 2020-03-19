<template>
  <div class="main">
    <!-- 产品体系 -->
      <div class="system">
        <!-- 闹钟图标 -->
        <div class="system-time"></div>
        <p class="flex-center system-title">产品体系</p>
        <div class="system-content">
          <div class="system-one flex-between">
            <div class="flex-center-y">
              <img src="@/assets/test/s1.png" alt="">
              <span>素养播种计划</span>
            </div>
            <p>从职业角色、工作胜任、生涯发展三维度培养学生职业素养</p>
          </div>
          <div class="system-two flex-between">
            <div class="flex-center-y">
              <img src="@/assets/test/s2.png" alt="">
              <span>班主任成长梦工场</span>
            </div>
            <p>教育信息化背景下的“班主任职业能力构建与提升”，班主任成长路上好伙伴</p>
          </div>
          <div class="system-three flex-between">
            <div class="flex-center-y">
              <img src="@/assets/test/s3.png" alt="">
              <span>公共基础课程辅助数字资源库</span>
            </div>
            <p>聚焦新课标学科素养 挖掘公共基础课育人价值</p>
          </div>
        </div>
      </div>

      <!-- 课程结构 -->
      <div class="lesson">
        <p class="lesson-title flex-center">课程结构</p>
        <!-- 多套一层避免里面的元素定位距离小屏幕不兼容 -->
        <div class="lesson-inner-wrap">
          <div class="lesson-inner">
            <!-- 顺序为顺时针，最后一个div是中间最大的 -->
            <div class="lesson-item flex-center">公众号</div>
            <div class="lesson-item flex-center">教学素材</div>
            <div class="lesson-item flex-center">微课</div>
            <div class="lesson-item flex-center-col">
              <span>在线开放</span>
              <span>课程</span>
            </div>
            <div class="lesson-item flex-center">专题网站</div>
            <div class="lesson-item flex-center">移动端</div>
            <div class="lesson-item-center flex-center">集成数字化课程资源</div>
          </div>
        </div>
      </div>
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
  .system{
      width: 100%;
      padding: 80px 0 30px;
      background: url('../../../assets/test/s-bg.png') no-repeat;
      background-position: 0 bottom;
      position: relative;
      .system-time{
        width: 130px;
        height: 97px;
        position: absolute;
        top: 115px;
        right: 17px;
        background: url('../../../assets/test/s-time.png') no-repeat;
        background-size: 100% 100%;
      }
      .system-title{
        font-size: 24px;
        margin: 38px auto;
      }
      .system-content{
        width: 1100px;
        height: 430px;
        background: #1D5FCB url('../../../assets/test/system-bg.png') no-repeat;
        background-size: 100% 100%;
        margin: 0 auto;
        padding: 83px 0;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .system-one{
          padding: 0 115px 0 93px;
          img{
            width: 44px;
            height: 44px;
          }
          span{
            font-size: 20px;
            color: #fff;
            margin-left: 20px;
          }
          p{
            font-size: 14px;
            color: #fff;
          }
        }
        .system-two{
          padding: 0 40px 0 93px;
          img{
            width: 52px;
            height: 51px;
          }
          span{
            font-size: 20px;
            color: #fff;
            margin-left: 20px;
          }
          p{
            font-size: 14px;
            color: #fff;
          }
        }
        .system-three{
          padding: 0 160px 0 93px;
          img{
            width: 41px;
            height: 37px;
          }
          span{
            font-size: 20px;
            color: #fff;
            margin-left: 20px;
          }
          p{
            font-size: 14px;
            color: #fff;
          }
        }
      }
  }
  

  // 课程结构
  .lesson-title{
    padding: 39px 0 24px;
    font-size: 24px;
  }
  .lesson-inner-wrap{
    width: 100%;
    height: 646px;
    background: url('../../../assets/test/basic-bg.png') no-repeat;
    background-size: 100% 100%;
  }
  .lesson-inner-wrap .lesson-inner{
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    position: relative;
  }
  .lesson-inner-wrap .lesson-inner .lesson-item{
    width: 139px;
    height: 139px;
    font-size: 22px;
    color: #fff;
    background: url('../../../assets/test/basic-small.png') no-repeat;
    background-size: 100% 100%;
    position: absolute;
  }
  .lesson-item-center{
    width: 300px;
    height: 300px;
    font-size: 22px;
    color: #fff;
    position: absolute;
    top: 163px;
    left: 410px;
    background: url('../../../assets/test/basic-big.png') no-repeat;
    background-size: 100% 100%;
  }

  .lesson-item:nth-child(1){left: 278px;top: 13px;}
  .lesson-item:nth-child(2){right: 308px;top: 67px;}
  .lesson-item:nth-child(3){right: 215px;top: 275px;}
  .lesson-item:nth-child(4){right: 363px;top: 477px;}
  .lesson-item:nth-child(5){left: 286px;top: 474px;}
  .lesson-item:nth-child(6){left: 142px;top: 238px;}

</style>
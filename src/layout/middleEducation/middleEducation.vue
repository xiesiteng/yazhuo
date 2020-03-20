<template>
  <div class="main">
     <!-- 头部 -->
    <header-asideMenu />
    <div class="middle">
      <!-- 图片+定位模块 -->
      <div class="middle-top">
        <img src="@/assets/test/me-banner.png" alt="">
        <div class="fence flex-center-y">
          <div :class="['fence-left flex-center-col', active == 0 ? 'fence-active' : '']" @click="choose(0)">
            <img :src="[active == 0 ? m1 : m3]" alt="">
            <!-- <img src="@/assets/test/m1.png" alt=""> -->
            <span>职业教育</span>
          </div>
          <div :class="['fence-right flex-center-col', active == 1 ? 'fence-active' : '']" @click="choose(1)">
            <img :src="[active == 1 ? m4 : m2]" alt="">
            <span>基础教育</span>
          </div>
        </div>
      </div>

      <!-- 产品体系 -->
      <div class="system" v-show="active == 0">
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
      <div class="lesson" v-show="active == 0">
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

      <basic-system v-show="active == 1"></basic-system>

      <!-- 亮点优势 -->
      <div class="advantage">
        <p class="advantage-title flex-center">亮点优势</p>
        <div class="advantage-inner flex-center-y">
          <!-- 海量资源 -->
          <div class="advantage-inner-item">
            <img src="@/assets/test/a1.png" alt="">
            <span>海量资源</span>
            <div class="line"></div>
            <p>汇集近千个精心打磨的教学设计、丰富的案例、有趣的活动、大量的拓展资源等，满足教师课前备课、课中授课以及学生课后拓展学习、提升自我素养的需求。</p>
          </div>
          <!-- 权威专家 -->
          <div class="advantage-inner-item">
            <img src="@/assets/test/a2.png" alt="">
            <span>权威专家</span>
            <div class="line"></div>
            <p>
              由中国人民大学心理研究所所长俞国良教授、北京师范大学公民与道德教育研究中心主任檀传宝教授、华东师范大学职业教育与成人教育研究所徐国庆教授、中国职教学会德育工作委员会副主任汪永智教授领衔，
              北大、清华、北师大、人民大学、中国教育科学研究院、华东师大、北航、电子科大、华南理工、西南大学等50余位知名专家学者教育科技机构国内、众多中职德育领域课程研究与课
            </p>
          </div>
          <!-- 系统科学 -->
          <div class="advantage-inner-item">
            <img src="@/assets/test/a3.png" alt="">
            <span>系统科学</span>
            <div class="line"></div>
            <p>
              遵照教育部颁发的《中等职业学校公共基础课课程方案》、《中国职业教育学生发展核心素养》等文件纲领要求，根据中职学生的身心特点和职业发展需求设计，
              适应新时代发展趋势，通过高质量、系统性的课程资源，提高中等职业学校德育、公共基础课及职业素养建设水平。
            </p>
          </div>
          <!-- 信息化学习 -->
          <div class="advantage-inner-item">
            <img src="@/assets/test/a4.png" alt="">
            <span>信息化学习</span>
            <div class="line"></div>
            <p>坚持以学定教，结合学习平台（手机端、PC端），满足教师和学生在线学习、在线课程建设、教学管理等功能，促进广大中职学校教育信息化的发展。</p>
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
import basicSystem from './components/basicSystem'
export default {
  data () {
    return{
      active: 0,
      m1: require('@/assets/test/m1.png'),
      m2: require('@/assets/test/m2.png'),
      m3: require('@/assets/test/m3.png'),
      m4: require('@/assets/test/m4.png'),
    }
  },
  components:{
    basicSystem
  },
  methods:{
    choose (index) {
      this.active = index
      console.log(this.active)
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
      img{
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
        z-index: 99;
        .fence-left, .fence-right{
          width: 50%;
          height: 100%;
          font-size: 18px;
          color: #333;
          cursor: pointer;
        }
        .fence-active{
          background-color: #007AB7;
          color: #fff;
        }
        .fence-left img,.fence-right img{
          width: 90px;
          height: 75px;
          margin-bottom: 7px;
        }
      }
    }
    .system{
      width: 100%;
      padding: 80px 0 30px;
      background: url('../../assets/test/s-bg.png') no-repeat;
      background-position: 0 bottom;
      position: relative;
      .system-time{
        width: 130px;
        height: 97px;
        position: absolute;
        top: 115px;
        right: 17px;
        background: url('../../assets/test/s-time.png') no-repeat;
        background-size: 100% 100%;
      }
      .system-title{
        font-size: 24px;
        margin: 38px auto;
      }
      .system-content{
        width: 1100px;
        height: 430px;
        background: #1D5FCB url('../../assets/test/system-bg.png') no-repeat;
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
  }

  // 课程结构
  .lesson-title{
    padding: 39px 0 24px;
    font-size: 24px;
  }
  .lesson-inner-wrap{
    width: 100%;
    height: 646px;
    background: url('../../assets/test/lesson-bg.png') no-repeat;
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
    background: url('../../assets/test/small.png') no-repeat;
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
    background: url('../../assets/test/big.png') no-repeat;
    background-size: 100% 100%;
  }

  .lesson-item:nth-child(1){left: 278px;top: 13px;}
  .lesson-item:nth-child(2){right: 308px;top: 67px;}
  .lesson-item:nth-child(3){right: 215px;top: 275px;}
  .lesson-item:nth-child(4){right: 363px;top: 477px;}
  .lesson-item:nth-child(5){left: 286px;top: 474px;}
  .lesson-item:nth-child(6){left: 142px;top: 238px;}

  // 亮点优势
  .advantage{
    background-color: #FAFAFA;
    width: 100%;
    padding-bottom: 40px;
  }
  .advantage-title{
    padding: 40px 0;
    font-size: 24px;
  }
  .advantage-inner{
    width: 1200px;
    margin: 0 auto;
  }
  .advantage-inner-item{
    width: 285px;
    height: 400px;
    margin-right: 20px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    background-color: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .advantage-inner-item img{
    width: 64px;
    height: 64px;
    border-radius: 50%;
    margin-bottom: 20px;
  }
  .advantage-inner-item span{
    font-size: 24px;
    margin-bottom: 7px;
  }
  .advantage-inner-item .line{
    width: 162px;
    height: 3px;
    background-color: #5A3ACF;
    margin-bottom: 20px;
  }
  .advantage-inner-item p{
    font-size: 14px;
    width: 100%;
    overflow: hidden;
  }
</style>
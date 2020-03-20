<template>
  <div>
      <headerAsideMenu/>
      <div class="wisdomPlatform-container">
          <div class="wp-header"></div>
          <div class="wp-systemModule">
              <div class="center-box">
                  <div class="text-box">
                      <span class="up-text">系统模块</span>
                      <span class="down-text">system module</span>
                  </div>
              </div>
          </div>
          <div class="wp-coreFunction">
              <div class="cf-header">
                  <div class="cf-titie">
                      <span>核/心/功/能</span>
                  </div>
                  <div class="line"></div>
              </div>
              <div class="cf-box">
                    <div class="cf-item" v-for="(item, index) in cfList" :key="index" @mouseenter="enterHandle(index)">
                        <div class="cf-inner">
                        <img src="../../assets/wisdomPlatform/cf-icon1.png" alt="">
                        <p class="cf-name">智能化教学</p>
                        <p class="cf-content">亚卓教育利用AR技术来配合学生学习课程内容，学生更好的理解，更直观的感受。</p>
                        </div>
                    </div>
                    <!-- <div class="cf-item">
                        <div class="cf-inner">
                        <img src="../../assets/wisdomPlatform/cf-icon1.png" alt="">
                        <p class="cf-name">一体化管理</p>
                        <p class="cf-content">亚卓教育利用AR技术来配合学生学习课程内容，学生更好的理解，更直观的感受。</p>
                        </div>
                    </div>
                    <div class="cf-item">
                        <div class="cf-inner">
                        <img src="../../assets/wisdomPlatform/cf-icon1.png" alt="">
                        <p class="cf-name">素材库</p>
                        <p class="cf-content">亚卓教育利用AR技术来配合学生学习课程内容，学生更好的理解，更直观的感受。</p>
                        </div>
                    </div>
                    <div class="cf-item">
                        <div class="cf-inner">
                        <img src="../../assets/wisdomPlatform/cf-icon1.png" alt="">
                        <p class="cf-name">选择式备课</p>
                        <p class="cf-content">亚卓教育利用AR技术来配合学生学习课程内容，学生更好的理解，更直观的感受。</p>
                        </div>
                    </div>
                    <div class="cf-item">
                        <div class="cf-inner">
                        <img src="../../assets/wisdomPlatform/cf-icon1.png" alt="">
                        <p class="cf-name">生涯教育</p>
                        <p class="cf-content">亚卓教育利用AR技术来配合学生学习课程内容，学生更好的理解，更直观的感受。</p>
                        </div>
                    </div>
                    <div class="cf-item">
                        <div class="cf-inner">
                        <img src="../../assets/wisdomPlatform/cf-icon1.png" alt="">
                        <p class="cf-name">大数据中心</p>
                        <p class="cf-content">亚卓教育利用AR技术来配合学生学习课程内容，学生更好的理解，更直观的感受。</p>
                        </div>
                    </div> -->
                    <!-- <transition name="fade"> -->
                    <div ref="cfHover" class="cf-item" :class="{ cfHover: isShow }" v-show="isShow" @mouseleave="outHandle">
                        <div class="cf-inner">
                        <img src="../../assets/wisdomPlatform/cf-icon1.png" alt="">
                        <p class="cf-name">生涯教育</p>
                        <p class="cf-content">亚卓教育利用AR技术来配合学生学习课程内容，学生更好的理解，更直观的感受。</p>
                        </div>
                    </div>
                    <!-- </transition> -->
              </div>
          </div>
          <div class="wp-specialAdvantage">
              <div class="sa-header">
                  <div class="sa-titie">
                      <span>特/色/优/势</span>
                  </div>
                  <div class="line"></div>
              </div>
              <div class="sa-box">
                  <div class="sa-box-left">
                      <!-- <div class="left-title">
                          <div class="">
                              <img src="" alt="">
                              <span>优势</span>
                          </div>
                      </div> -->
                      <ul>
                          <li class="left-title">
                              <!-- <div class="little-icon"></div> -->
                              <img src="../../assets/wisdomPlatform/推广优势.png" alt="">
                              <span>优势</span>
                              <div class="line"></div>
                          </li>
                          <li>
                              <!-- <div class="little-icon"></div> -->
                              <img src="../../assets/wisdomPlatform/操作.png" alt="">
                              <span>操作简单</span>
                          </li>
                          <li>
                              <!-- <div class="little-icon"></div> -->
                              <img src="../../assets/wisdomPlatform/交互演示动画.png" alt="">
                              <span>交互教学</span>
                          </li>
                          <li>
                              <!-- <div class="little-icon"></div> -->
                              <img src="../../assets/wisdomPlatform/安全.png" alt="">
                              <span>安全稳定</span>
                          </li>
                          <li>
                              <!-- <div class="little-icon"></div> -->
                              <img src="../../assets/wisdomPlatform/整体全部计划.png" alt="">
                              <span>一站式</span>
                          </li>
                      </ul>
                  </div>
                  <div class="sa-box-right"></div>
              </div>
          </div>
      </div>
      <backTop/>
      <tail/>
  </div>
</template>

<script>
export default {
    data () {
        return {
            isShow: false,
            cfList: [1,2,3,4,5,6]
        }
    },
    methods: {
        enterHandle (index) {
            this.isShow = true
            this.currentIndex = index
            let flag_x = index % 3
            let flag_y = parseInt(index / 3)
            let x = 2 * flag_x * 200 + 'px'
            let y = (2 * flag_y) * 150 + 'px'
            this.$refs.cfHover.style.top = y
            this.$refs.cfHover.style.left = x
            console.log(index)
            console.log('flag_x', flag_x)
            console.log('flag_y', flag_y)
            console.log('top:', this.$refs.cfHover.style.top)
            console.log('left', this.$refs.cfHover.style.left)

        },
        outHandle () {
            this.isShow = false
        }
    }

}
</script>

<style scoped lang="less">
.wisdomPlatform-container{
    min-width: 1200px;
    .wp-header{
        height: 600px;
        background-image: url(../../assets/wisdomPlatform/横线.png);
        background-size: 100% 100%;
    }
    .wp-systemModule{
        height: 600px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #F4F4F4;
        .center-box{
            position: relative;
            width: 584px;
            height: 558px;
            background-image: url(../../assets/wisdomPlatform/center-box.png);
            .text-box{
                display: flex;
                flex-direction: column;
                align-items: center;
                position: absolute;
                top: 38%;
                left: 31%;
                .up-text{
                    font-size:35px;
                    font-family:Source Han Sans CN;
                    font-weight:500;
                    color:rgba(51,51,51,1);
                    line-height:30px;
                    margin-bottom: 8px;
                }
                .down-text{
                    font-size:20px;
                    font-family:Source Han Sans CN;
                    font-weight:500;
                    color:rgba(51,51,51,1);
                    line-height:22px;
                    letter-spacing: 3px;
                }
            }
        }
    }
    .wp-coreFunction{
        height: 737px;
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
        .cf-header{
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            height: 50px;
            width: 1200px;
            margin-bottom: 20px;
            .line{
                border-top: 1px solid rgba(221,221,221,1);
            }
            .cf-titie{
                width: 160px;
                position: absolute;
                top: 8px;
                left: 50%;
                transform: translate(-50%);
                background-color: #fff;
                font-size:24px;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(51,51,51,1);
                text-align: center;
            }
        }
        .cf-box{
            position: relative;
            width: 1200px;
            display: flex;
            flex-wrap: wrap;
            .cf-item{
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
                align-content: center;
                width: 400px;
                height: 300px;
                border:1px solid rgba(213,213,213,1);
                background-color: #fff;
                transition: all .5s;
                &:nth-child(n+4){
                    border-top: none;
                }
                &:nth-child(3n+2){
                    border-left: none;
                    border-right: none;
                }
                .cf-inner{
                    width: 320px;
                    height: 280px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    border-top: 4px solid #007AB7;
                    img{
                        margin-top: 30px;
                    }
                    .cf-name{
                        margin: 10px 0 55px;
                        font-size:20px;
                        font-family:Microsoft YaHei;
                        font-weight:bold;
                        color:rgba(51,51,51,1);
                    }
                    .cf-content{
                        width: 100%;
                        font-size:16px;
                        font-family:Microsoft YaHei;
                        font-weight:400;
                        color:rgba(68,68,68,1);
                        overflow: hidden;
                        text-overflow:ellipsis;
                    }
                }
            }
            // .fade-enter-active, .fade-leave-active{
            //     transition: all .5s;
            // }
            // .fade-enter, .fade-leave-to{
            //     opacity: 0;
            // }
            .cfHover{
                position: absolute;
                z-index: 2;
                width: 440px;
                height: 330px;
                box-shadow: 0 0 20px #333;
                transform: translate(-15px, -15px);
            }
        }
    }
    .wp-specialAdvantage{
        height: 683px;
        background-color: #F4F4F4;
        height: 737px;
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
        .sa-header{
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            height: 50px;
            width: 1200px;
            margin-bottom: 20px;
            .line{
                border-top: 1px solid rgba(221,221,221,1);
            }
            .sa-titie{
                width: 160px;
                position: absolute;
                top: 8px;
                left: 50%;
                transform: translate(-50%);
                background-color: #F4F4F4;
                font-size:24px;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(51,51,51,1);
                text-align: center;
            }
        }
        .sa-box{
            position: relative;
            width: 1200px;
            display: flex;
            padding: 0 50px 0 50px;
            .sa-box-left{
                flex: 6;
                ul{
                    list-style:none;
                    li{
                        margin-bottom: 10px;
                        // .little-icon{
                        //     width: 24px;
                        //     height: 30px;
                        // }
                        img{
                            width: 24px;
                            // height: 30px;
                            margin-right: 5px;
                            vertical-align: middle;
                        }
                        span{
                            width:106px;
                            height:25px;
                            font-size:26px;
                            font-family:Adobe Heiti Std;
                            font-weight:normal;
                            color:rgba(51,51,51,1);
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            vertical-align: middle;
                        }
                    }
                }
                .left-title{
                    margin-bottom: 50px;
                    .line{
                        width: 130px;
                        border-top: 10px solid #2F2E41;
                        margin-top: 5px;
                    }
                }
            }
            .sa-box-right{
                flex: 4;
                width: 508px;
                height: 524px;
                background-image: url(../../assets/wisdomPlatform/sa-img1.png);
            }
        }
    }
}
</style>
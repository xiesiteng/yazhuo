<template>
  <div class="app">
   <div class="curriculum">
      <div class="Etitle">
        <div class="Exhibitiontitle">专／家／讲／坛</div>
        <div class="introduction">我们一起来推进教育信息化建设</div>
      </div>
      <div class="class">
        
        <div class="box">
            <div class="video">
                <video id="casesharingvideo" class="videoplayer"  controls loop="loop">
                <source
                :src='url'
                type="video/mp4"
                />
                </video>
            </div>
            <div class="name">
                <div :style="{color:(index==click?style.color:'#000000'),
                height:(index == click?style.height: '60px'),
                'background-color': (index==click?style.backgroundcolor:'#FBFBFB')}"
                 class="classname" v-for="(items, index) in namelist" :key="index" @click="choose(index)"
                 >
                  <div class="downclass">
                    <div class="downclaass">
                      <div class="downclassname" 
                      :style="{'font-size': (index==click?style.size:'18px'),
                      }">{{items.name}}</div>
                      <div class="downclasscontent">{{items.teacher}}</div>
                    </div>
                  </div>
                <div class="icon" :style=" {display:(index == click ? 'block' : 'none')} ">
                  <!-- <i class="iconfont iconjiantou1"></i> -->
                  <div class="expert">专家简介：</div>
                 <div class="teacherintroduce">{{items.introduce}}</div>
                </div>
                </div>
                <div class="next">
                    <div class="nextimg" @click="change()">
                    <img class="img" src="@/assets/icon/向上.png" alt="">
                    </div>
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
  name: "expertforum",
  components: {},
  data() {
    return {
      list: [],
      ind:[0],
      title:[],
      url:"http://vfx.mtime.cn/Video/2019/03/18/mp4/190318214226685784.mp4",
      type:'',
      namelist:[],
      click:0,
    //   课程标题改变的样式
      style:{
          height:"136px",
          color:"#000000",
          backgroundcolor:"#F1F1F1",
          fontsize:{},
          display:'block',
          size:'22px',
      },
    };
  },
  created() {
    // this.getmessage();
  },

  methods: {
  //   getmessage() {
  //     var that = this;
  //     Axios.get(
  //       "https://mock.aarnio.cn/mock/5e4a4a71a7e3066df43697b8/example/casesharing",
  //       {
  //         params: {}, // 参数
  //         timeout: 3000 // 配置
  //       }
  //     ).then(res => {
  //       that.list = res.data.data[0].Education;
  //       // console.log(res.data.data)
  //       // console.log(that.list[1])
  //       that.type = that.list[that.ind].type;
  //       // console.log(that.list[0].type);
  //       that.namelist = that.list[that.ind].list;

  //     });
  //   },
  //   // 改变左边播放的内容
  //   choose(index){
  //       var that = this;
  //       that.click = index;
  //       let player = document.querySelector('#casesharingvideo') 
  //       that.url = that.list[that.ind].list[index].url;
  //       player.src = that.url
  //       player.play()
  //   },
  //   change(){
  //       var that = this;
  //       that.ind == 0 ? that.ind=1 : that.ind=0
  //       that.getmessage();
  //   }
  // }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
.curriculum {
    height: 476px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .Etitle {
      margin: 20px 0 20px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .Exhibitiontitle {
        width: 184px;
        height: 44px;
        font-size: 24px;
        color: #333333;
      }
      .introduction {
        width: 219px;
        height: 14px;
        font-size: 14px;
        color: #777777;
      }
    }
    .class{
        text-align: center;
        width: 1200px;
        .subheading{
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            .type{
                height: 50px;
                width: 160px;
                color: #ffffff;
                font-size: 22px;
                background-color: #007AB7;
                display: flex;
                justify-content: center;
                align-items: center;
                .iconfont{
                    margin-left: 8px;
                    width: 15px;
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }
        .box{
            display: flex;
            justify-content: center;
            align-items: center;
            .video{
                width: 500px;
                height: 306px;
                color: #FFFFFF;
                font-size: 22px;
                .videoplayer{
                    width: 500px;
                    height: 306px;
                    object-fit: fill;
                }
            }
            .name{
                width: 700px;
                height: 308px;
                border-top: 1px solid rgba(0, 0, 0, 0.1);
                border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                border-right: 1px solid rgba(0, 0, 0, 0.1);
                .classname{
                    padding-left: 22px;
                    height:60px;
                    background-color: #FBFBFB;
                    color: #333333;
                    .icon{
                      .expert{
                        text-align: left;
                        color: #555555;
                        font-size: 18px;
                        font-weight:bold;
                        margin-left: 20px;
                      }
                      .teacherintroduce{
                          display: flex;
                          align-items: center;
                          height: 56px;
                        font-size: 18px;
                        color: #999999;
                        text-align: left;
                        margin-left: 20px;
                      }
                        .iconfont{
                            width: 22px;
                            height: 42px;
                            margin-right: 12px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            color: #007AB7;
                            font-weight: 600;
                            font-size: 42px;
                    }
                    }
                    .downclass{
                      .downclaass{
                        display: flex;
                        align-items: center;
                        .downclassname{
                        line-height:58px; height:58px;
                        font-size: 18px;
                        color: #333333;
                    }
                      .downclasscontent{
                        width: 210px;
                        color: #666666;
                        font-size: 18px;
                    }
                      }
                      
                    }
                    
                    
                }
                .next{
                        height: 60px;
                        display: flex;
                        align-content: center;
                        justify-content: flex-end;
                        background-color: #FBFBFB;
                        .nextimg{
                            height: 60px;
                            width: 66px;
                            display: flex;
                            align-items: center;
                            align-items: center;
                            .img{
                                height: 27px;
                            }
                        }
                    }
            }
        }
    }

  }
</style>

<template>
  <div class="app">
    <div class="curriculum">
      <div class="Etitle">
        <div class="Exhibitiontitle">课/程/展/示</div>
        <div class="introduction">内容涵盖基教和职教两大产品体系</div>
      </div>
      <div class="class">
        <div class="subheading">
            <div class="type" @click="change()">{{type}}
                <i class="iconfont iconqiehuan"></i>
            </div>
        </div>
        <div class="box">
            <div class="video">
                <video id="video" class="videoplayer"  controls loop="loop">
                <source
                :src='url'
                type="video/mp4"
                />
                </video>
            </div>
            <div class="name">
                <div :style="{color:(index==click?style.color:'#ffffff') ,background:(index == click?style.backgroundcolor: items.color)}"
                 class="classname" :class="{'active' : click == index}" v-for="(items, index) in namelist" @click="choose(index)"
                 >
                <div class="icon" :style=" {display:(index == click ? 'block' : 'none')} "><i class="iconfont iconjiantou1"></i></div>{{items.name}} 
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Axios from "axios";

export default {
  name: "curriculum",
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
          color:"#000000",
          backgroundcolor:"#ffffff",
          fontsize:{},
          display:'block',
      },
    };
  },
  created() {
    this.getmessage();
  },

  methods: {
    getmessage() {
      var that = this;
      Axios.get(
        "https://mock.aarnio.cn/mock/5e4a4a71a7e3066df43697b8/example/curriculum",
        {
          params: {}, // 参数
          timeout: 3000 // 配置
        }
      ).then(res => {
        that.list = res.data.data[0].Education;
        // console.log(res.data.data)
        // console.log(that.list[1])
        that.type = that.list[that.ind].type;
        // console.log(that.list[0].type);
        that.namelist = that.list[that.ind].list;

      });
    },
    // 改变左边播放的内容
    choose(index){
        var that = this;
        that.click = index;
        let player = document.querySelector('#video') 
        that.url = that.list[that.ind].list[index].url;
        player.src = that.url
        player.play()
    },
    change(){
        var that = this;
        that.ind == 0 ? that.ind=1 : that.ind=0
        that.getmessage();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
.app {
//   height: 653px;
  .curriculum {
    height: 654px;
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
        width: 134px;
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
                // flex-direction: column-reverse;
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
                width: 580px;
                height: 460px;
                color: #FFFFFF;
                font-size: 22px;
                .videoplayer{
                    object-fit: fill;
                    width: 580px;
                    height: 460px;
                }
            }
            .name{
                width: 620px;
                height: 461px;
                border-top: 1px solid rgba(0, 0, 0, 0.1);
                border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                border-right: 1px solid rgba(0, 0, 0, 0.1);
                .classname{
                    padding-left: 22px;
                    width:597px;
                    height:92px;
                    background-color: #0C7EBF;
                    // color: #FFFFFF;
                    // font-size: 20px;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    .icon{
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
                    
                }
            }
        }
    }

  }
}
</style>
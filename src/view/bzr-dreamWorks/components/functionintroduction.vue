<template>
  <div class="app">
    <div class="famousteacher" :style="{backgroundImage:'url('+bg+')',backgroundSize:'100% 100%'}">
      <div class="Etitle">
        <div class="Exhibitiontitle">亮 / 点 / 及 / 优 / 势</div>
        <div class="introduction">我们的产品功能优势</div>
      </div>
      <div class="class">
        <div class="box">
          <div class="middle">
            <div class="list" v-for="(items ,index) in list" :key="index"
            @mouseenter="mouseenter(index)"
            @mouseleave="mouseleave(index)"
            :style="{
              background:(index == choose?'#007AB7':''),
              width:(index == choose?'300px':'220px'),
              }"
            >
              <div class="content"
              :style="{
                'background-color':'#3855B1;',
                width:'220px',
                display:'flex',
                'flex-direction': 'column',
                'justify-content': 'flex-start',
              }">
                <!-- <img style="index: -3;" :src='items.picture' alt=""> -->
                <div class="title"
                :style="{
              'text-align': (index== choose?'start':'center'),
              'align-items': (index == choose?'flex-start':'center'),
                }">
                  <div class="titleleft">
                    <div class="icon">
                      <!-- <i class="iconfont iconjiantou1"></i> -->
                      <img class="img" v-show="(index == choose)?false:true" :src="items.picture" alt="">
                      <img class="img" v-show="(index == choose)?true:false" :src="items.picturechoose" alt="">
                      <img src="" alt="">
                    </div>
                  </div>
                  <div class="titlemiddle">
                    <div class="titlecontent"
                    :style="{color:(index == choose?'#ffffff':'#000000')}">{{items.title}}</div>
                  </div>
                  <div class="titleright"
                  :style="{'align-items': (index == choose?'flex-start':'center'),
                  'justify-content': (index == choose?'flex-start':'center'),
                  margin:(index == choose?'20px':'20px')}">
                    <div class="titlerightin"
                    :style="{width:(index==choose?'136px':'46px')}"></div>
                  </div>
                </div>
                <div class="introduce"> 
                  <div class="introducelist" v-show="(index == choose)?false:true" v-for="(item, ind) in items.list" :key="ind">
                    {{item}}
                  </div>
                  <div class="troduceanother"
                    :style="{'align-items':index == choose?'flex-start':'center'}"
                   v-show="(index == choose)?true:false">
                    {{items.content}}
                  </div>
                </div>
                <div class="intr" v-show="false">{{items.content}}</div>
              </div>
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
  name: "functionintroduction",
  components: {},
  data() {
    return {
      list: [],
      picture: [],
      page: 0,
      length: 0,
      show:true,
      choose:0,
      bg:'',
    };
  },
  created() {
    this.getmessage();
  },

  methods: {
    getmessage() {
      var that = this;
      Axios.get(
        "https://mock.aarnio.cn/mock/5e4a4a71a7e3066df43697b8/example/bzrfunctionintroduction",
        {
          params: {}, // 参数
          timeout: 3000 // 配置
        }
      ).then(res => {
        that.list = res.data.data.famous[that.page];
        that.length = res.data.data.famous.length;
        that.picture = res.data.data.famous[0];
        that.bg = res.data.data.bg;
        console.log(that.picture[0].picture);
      });
    },
    turnnext() {
      let that = this;
      if (that.page + 1 < that.length) {
        that.page++;
      } else {
        that.page = 0;
      }
      that.getmessage();
    },
    previous() {
      var that = this;
      if (that.page > 0) {
        that.page--;
      } else {
        that.page = that.length - 1;
      }
      that.getmessage();
    },
    mouseenter(index){
      var that = this;
      that.choose = index;
      that.show = true;
      console.log(that.choose)
      

    },
    mouseleave(index){
      var that = this;
      that.show = false;
      // that.choose = 0;
      console.log(that.choose)

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
.app {
  height: 472px;
  .famousteacher {
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
        // width: 184px;
        height: 44px;
        font-size: 24px;
        color: #333333;
      }
      .introduction {
        // width: 219px;
        height: 14px;
        font-size: 14px;
        color: #777777;
      }
    }
    .class {
      text-align: center;
      width: 1200px;
      .box {
        display: flex;
        justify-content: center;
        align-items: center;
        .turnleft {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 80px;
          width: 80px;
          .left {
            width: 60px;
            height: 60px;
            transform: rotate(180deg);
            -ms-transform: rotate(180deg); /* Internet Explorer */
            -moz-transform: rotate(180deg); /* Firefox */
            -webkit-transform: rotate(180deg); /* Safari 和 Chrome */
            -o-transform: rotate(180deg); /* Opera */
          }
        }
        .middle {
          width: 1200px;
          display: flex;
          justify-content: center;
          align-items: center;
          .list {
            width: 220px;
            height: 340px;
            // margin: 0 20px 0 20px;
            border: 1px solid rgba(250, 250, 250, 1);
            // background-image: url(https://lxf-1256064321.cos.ap-chengdu.myqcloud.com/picture/%E8%83%8C%E6%99%AF1.png);
            .picture {
              display: flex;
              // justify-content: flex-end;
              align-items: flex-end;
              // width: 285px;
              // height: 138px;
              .teacher {
                // width: 285px;
                height: 40px;
                font-size: 18px;
                background-color: rgba(0, 0, 0, 0.5);
                display: flex;
                justify-content: flex-start;
                align-items: center;
                color: #ffffff;
                .teachername {
                  margin-left: 10px;
                }
              }
            }
            .content {
              .title {
                
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .titleleft{
                  height: 92px;
                  width: 82px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  .icon{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 30px;
                    width: 40px;
                  }

                }
                .titleright{
                  width: 200px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  .titlerightin{
                    // margin-left: 20px;
                    // width: 46px;
                    height: 1px;
                    background-color: #DDDDDD;
                    transition: all 0.5s;
                  }
                }
                .titlemiddle {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  .titlecontent {
                    width: 120px;
                    color: #333333;
                    font-size: 18px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 18px;
                    color: #333333;
                    height: 40px;
                  }
                }
              }

              .introduce {
                // text-align: start;
                margin-left: 12px;
                color: #666666;
                .introducelist{
                  height: 32px;
                  font-size: 14px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  color: #666666;
                }
                .troduceanother{
                  font-size: 12px;
                  color: #ffffff;
                }
              }
              .intr {
                margin-left: 12px;
                height: 54px;
                // width: 264px;
                color: #999999;
                font-size: 14px;
                text-align: start;
              }
            }
          }
          .list:hover{
            transform: scale(1.0);
            // transition: all 0.6s;
            box-shadow:0px 2px 4px 0px #2B2B2B;
          }
        }
        .turnright {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 80px;
          width: 80px;
          .right {
            width: 60px;
            height: 60px;
          }
        }
      }
    }
  }
}
</style>
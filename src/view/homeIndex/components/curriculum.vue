<template>
  <div class="app">
    <div class="curriculum">
      <!-- 标题 开始 -->
      <div class="titles">
        <i></i>
        <span>精品课程展示</span>
        <i></i>
      </div>
      <!-- 标题 结束 -->
      <div class="class">
        <!-- tab切换 开始 -->
        <div class="boxHead">
          <div
            class="tablink"
            @click="changeTab(index)"
            v-for="(items,index) in typeList"
            :key="index"
          >{{items.type}}</div>
        </div>
        <!-- tab切换 结束 -->
        <div class="boxBody">
          <!-- 左侧 开始 -->
          <div class="leftVideo anisca" @click="opean()">
            <!-- <video id="video" class="videoplayer" controls loop="loop">
              <source :src="url" type="video/mp4" />
            </video>-->
            <div class="videoplayer">
              <img class="img" :src="poster" />
            </div>
            <div class="videoplaybtn">
              <img src="http://huangqinchao.host3v.vip/yazhuo/playbtn.png" />
            </div>
          </div>
          <!-- 左侧 结束 -->
          <!-- 右侧 开始 -->
          <div class="rightList">
            <div
              :style="{color:(index==click?style.color:'#ffffff') ,background:(index == click?style.backgroundcolor: items.color)}"
              class="classname ellipsis"
              :class="{'active' : click == index}"
              v-for="(items, index) in namelist"
              :key="index"
              @mouseover="choose(index)"
            >
              <div class="icon ellipsis" :style=" {display:(index == click ? 'block' : 'none')} ">
                <i class="iconfont iconjiantou1"></i>
              </div>
              {{items.name}}
            </div>
          </div>
          <!-- 右侧 结束 -->
        </div>
      </div>
    </div>
    <div v-show="popup">
      <!--这里是要展示的内容层-->
      <div class="mock">
        <video id="video" class="videoplayer" controls loop="loop" :poster="poster">
          <source :src="url" type="video/mp4" />
        </video>
      </div>
      <!--这里是半透明背景层-->
      <div class="over" @click="closemock"></div>
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
      getData: "",
      ind: [0],
      title: [],
      url: "",
      poster: "",
      typeList: [], //tab切换
      namelist: [],
      click: 0,
      popup: 0,
      choose2: 0, //tab切换索引
      //   课程标题改变的样式
      style: {
        color: "#000000",
        backgroundcolor: "#ffffff",
        fontsize: {},
        display: "block"
      }
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
        that.getData = res.data.data[0].Education; //获取数据
        console.log(res.data.data); //获取数据
        that.typeList = that.getData; //tab切换
        // console.log(that.getData);//tab切换
        that.namelist = that.getData[that.ind].list;
        that.url = that.getData[that.ind].list[0].url;
        that.poster = that.getData[that.ind].list[0].picture;
        // console.log(res.data.data);
      });
    },
    // 改变左边播放的内容
    choose(index) {
      var that = this;
      that.click = index;
      let player = document.querySelector("#video");
      player.src = that.url;
      // player.play();
      that.url = that.getData[that.ind].list[index].url;
      that.poster = that.getData[that.ind].list[index].picture;
      console.log(that.poster);
    },
    // tab切换
    changeTab(index) {
      this.choose2 = index;
      this.getmessage();
      console.log(index);
    },
    opean() {
      // this.popup = 1;
    },
    closemock() {
      // this.popup = 0;
      // this.errormessage = "";
    }
  }
};
</script>

<style scoped lang="less">
.app {
  .curriculum {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: -pink;
    .titles {
      width: 100%;
      text-align: center;
      color: #333333;
      font-size: 24px;
      background: -orange;
      padding: 30px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        padding: 0 50px;
      }
      i {
        display: inline-block;
        width: 480px;
        height: 1px;
        background: rgba(221, 221, 221, 1);
      }
    }
    .class {
      text-align: center;
      width: 1200px;
      .boxHead {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        .tablink {
          height: 50px;
          width: 160px;
          color: #ffffff;
          font-size: 22px;
          background: #007ab7;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          &:hover {
            background: #1997d6;
          }
          .iconfont {
            margin-left: 8px;
            width: 15px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
      .boxBody {
        display: flex;
        justify-content: center;
        align-items: center;
        .leftVideo {
          width: 580px;
          height: 460px;
          color: #ffffff;
          font-size: 22px;
          position: relative;
          .videoplayer {
            object-fit: fill;
            width: 580px;
            height: 460px;
            .img {
              width: 580px;
              height: 460px;
            }
          }
          .videoplaybtn {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: inline-block;
            width: 100px;
            height: 100px;
          }
        }
        .rightList {
          width: 620px;
          height: 461px;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          border-right: 1px solid rgba(0, 0, 0, 0.1);
          .classname {
            cursor: pointer;
            padding-left: 22px;
            height: 92px;
            background: #0c7ebf;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .icon {
              .iconfont {
                width: 22px;
                height: 42px;
                margin-right: 12px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #007ab7;
                font-weight: 600;
                font-size: 42px;
              }
            }
          }
        }
      }
    }
  }
  .rule {
    position: absolute;
    width: 0.82rem;
    height: 0.36rem;
    top: 0.08rem;
    right: 0rem;
    background: #111111;
  }
  .mock {
    position: fixed;
    font-size: 48px;
    height: 600px;
    width: 1200px;
    background: #ffffff;
    color: #007ab7;
    border-radius: 0.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
  }
  .over {
    position: fixed;
    width: 100%;
    height: 100%;
    opacity: 0.7;
    filter: alpha(opacity=70);
    top: 0;
    left: 0;
    z-index: 999;
    background: #111111;
  }
}
</style>
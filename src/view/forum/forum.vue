<template>
  <div class="app">
    <div class="title"></div>
    <div class="content">
      <div class="menu">
        <div class="box">
          <div class="boxtitle" v-for="(items, index) in list" :key="index">
            <div
              class="name"
              @click="mouseenter(index)"
              :style="{borderLeft:index == 0?'none':'1px solid #DDDDDD',
                            color:index == choose?'#007AB7':'#333333'}"
            >{{items.title}}</div>
          </div>
        </div>
      </div>
      <div class="comment">
        <div class="headimg">
          <div class="picture">
            <img class="img" :src="userinfo.picture" alt />
          </div>
          <div class="name">{{userinfo.name}}</div>
        </div>
        <div class="putcomment">
          <div class="input">
            <textarea
              class="inp"
              name="inp"
              id
              cols="30"
              rows="10"
              maxlength="300"
              @input="descInput"
              v-model="desc"
            ></textarea>
            <div class="data">
              <div class="num">
                还可输入
                <div class="number">{{num}}</div>字
              </div>
              <div class="button">
                <button class="btn">马上发布</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="commentlist" v-for="(item, ind) in content[page]" :key="ind">
        <div class="headimg">
          <img class="img" :src="item.picture" alt />
        </div>
        <div class="text">
          <div class="up">
            <div class="name">
              <div class="username">{{item.name}}</div>
              <div class="fabulous">
                  <div class="fabulousnum">{{item.num}}</div>
                  <div class="icon">
                      <img :src="item.fabulous == 1?fabulous.active:fabulous.notactive" alt="" class="icon">
                  </div>
              </div>
            </div>
            <div class="usercomment">{{item.text}}</div>
          </div>
          <div class="time">{{item.time}}</div>
        </div>
      </div>
    </div>
    <div class="page">
        <div class="uppage" @click="uppage">上一页</div>
        <div class="pagenum">
            <div class="page2">{{page}}</div>
            <div class="page1">{{page+1}}</div>
            <div class="page3">{{page+2}}</div>
        </div> 
        <div class="downpage" @click="downpage">下一页</div>
    </div>
  </div>
</template>

<script lang="js">
import Axios from "axios";

export default {
  name: "ggbasicclass",
  components: {},
  data() {
    return {
        list:{},
        choose:0,
        userinfo:{},
        num:300,
        desc:'',
        content:[],
        fabulous:{},
        page:0,
    };
  },
  created() {
      this.getmessage();
  },

  methods: {
      getmessage() {
      var that = this;
      Axios.get(
        "https://mock.aarnio.cn/mock/5e4a4a71a7e3066df43697b8/example/forum",
        {
          params: {}, // 参数
          timeout: 3000 // 配置
        }
      ).then(res => {
        that.list = res.data.data.famous;
        that.userinfo = res.data.data.userinfo;
        that.content = that.list[that.choose].content;
        that.fabulous = res.data.data.fabulous
      });
    },
    mouseenter(index){
        this.choose = index;
        this.content = this.list[this.choose].content;
    },
    descInput(){
        this.num = 300 - this.desc.length;
    },
    uppage(){
        this.page == 0?this.page-0:this.page--;
    },
    downpage(){
        var n = this.page+1;
        n  < this.list[this.choose].content.length?this.page++:this.page+0;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
.title {
  height: 600px;
  background-image: url(https://lxf-1256064321.cos.ap-chengdu.myqcloud.com/banner/%E8%AE%BA%E5%9D%9B%E7%A4%BE%E5%8C%BA.png);
  background-size: 100% 100%;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .menu {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: -70px;
    .box {
      width: 1200px;
      height: 144px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #ffffff;
      .boxtitle {
        width: 240px;
        .name {
          color: #333333;
          font-size: 24px;
          text-align: center;
        }
      }
    }
  }
  .comment {
    height: 260px;
    width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #dddddd;
    .headimg {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .picture {
        .img {
          width: 60px;
          height: 60px;
          border-radius: 40px;
        }
      }
      .name {
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #007ab7;
      }
    }
    .putcomment {
      width: 920px;
      height: 160px;
      .input {
        .inp {
          width: 920px;
          height: 120px;
          font-size: 18px;
        }
        .data {
          height: 50px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .num {
            color: #999999;
            font-size: 12px;
            display: flex;
            justify-content: center;
            align-items: center;
            .number {
              font-size: 12px;
              color: #007ab7;
            }
          }
          .button {
            .btn {
              width: 80px;
              height: 30px;
              color: #ffffff;
              background-color: #007ab7;
            }
          }
        }
      }
    }
  }
  .commentlist {
    width: 1000px;
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #DDDDDD;
    .headimg {
      .img {
        width: 60px;
        height: 60px;
        border-radius: 40px;
      }
    }
    .text {
      .up {
        width: 920px;
        .name {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .username {
            font-size: 12px;
            color: #007ab7;
          }
          .fabulous {
            color: #007ab7;
            font-size: 12px;
            display: flex;
            justify-content: center;
            align-items: center;
            .fabulousnum{
                width: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .icon{
                width: 18px;
                height: 16px;
            }
          }
        }
        .usercomment {
          color: #333333;
          font-size: 12px;
          height: 40px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
      }
      .time {
        color: #999999;
        font-size: 12px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
    }
  }
}
.app {
    .page{
        display: flex;
        justify-content: center;
        align-items: center;
        .uppage{
            width: 100px;
            height: 40px;
            color: #ffffff;
            background-color: #007AB7;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .pagenum{
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0px 10px;
            .page1{
                width: 20px;
                height: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #007AB7;
            }
            .page2,.page3{
                width: 40px;
                height: 40px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
        }
        .downpage{
            width: 100px;
            height: 40px;
            color: #ffffff;
            background-color: #007AB7;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}
</style>
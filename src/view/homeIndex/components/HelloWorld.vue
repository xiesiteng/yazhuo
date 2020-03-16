<template>
  <div class="content">
    <div class="title">核/心/功/能/展/示</div>
    <div class="list">
      <div class="box" v-for="(items, index) in list" :key="index">
        <div class="line" :style="{backgroundColor:items.color}"></div>
        <div class="boxnext">
          <div class="logo">
            <img :src="items.picture" alt />
          </div>
          <div class="name">{{items.title}}</div>
          <div class="introduce">{{items.content}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "ecology",
  components: {},
  computed: {},
  beforeCreate() {},
  created() {
    this.getmessage();
  },
  data() {
    return {
      list: [],
    };
  },
  methods: {
    getmessage() {
      var that = this;
      Axios.get(
        "https://mock.aarnio.cn/mock/5e4a4a71a7e3066df43697b8/example/HelloWorld",
        {
          params: {}, // 参数
          timeout: 3000 // 配置
        }
      ).then(res => {
        that.list = res.data.data.list;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.content {
  height: 750px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title {
    display: flex;
    align-content: center;
    justify-content: center;
    text-align: center;
    margin-top: 40px;
    color: #333333;
    font-size: 24px;
    font-family: Microsoft YaHei;
    height: 60px;
    width: 300px;
  }
  .list {
    width: 1310px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .box:hover {
      z-index: 10;
      // 变大
      transform: scale(1.1);
      transition: all 0.6s;
      color: red;
      // height: 330px;
      // width: 440px;
      box-shadow: 0px 2px 10px 1px #555555;

      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(213, 213, 213, 1);
      .boxnext {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .logo {
          margin: 34px 0 20px 0;
          width: 80px;
          height: 80px;
        }
        .name {
          color: #333333;
          font-size: 20px;
          font-weight: bold;
        }
        .introduce {
          width: 300px;
          height: 120px;
          color: #444444;
          font-size: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .line {
        margin: 10px 40px 0 40px;
        width: 320px;
        height: 4px;
        background: rgba(0, 183, 155, 1);
      }
    }
    .box {
      height: 300px;
      width: 400px;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(213, 213, 213, 1);
      .boxnext {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .logo {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 34px 0 20px 0;
          width: 80px;
          height: 80px;
        }
        .name {
          color: #333333;
          font-size: 20px;
          font-weight: bold;
        }
        .introduce {
          width: 300px;
          height: 120px;
          color: #444444;
          font-size: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .line {
        margin: 10px 40px 0 40px;
        width: 320px;
        height: 4px;
        // background: rgba(0, 183, 155, 1);
      }
    }
  }
}
</style>

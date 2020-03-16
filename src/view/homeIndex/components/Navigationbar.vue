<template>
  <div class="app">
    <div class="title">
        <div class="logo" ><img :src="logoimg" alt=""></div>
        <div class="menu" v-for="(items, index) in menu">
          <div class="menu1" @mouseenter="mouseover(index)" @mouseleave="mouseout(index)">
            <div class=test>{{items.title}}</div>
          <!-- <div class="textlist" v-for="(item, ind) in menu2[index]">{{item}}</div> -->
          </div>
          <div class="test1" v-show="show && index == current"></div>
          <div class="menu2" v-show="show && index == current">
            <div class="list" v-for="(item , ind) in items.list">  
                {{item}}
            </div>
          </div>
        </div>

        <div class="login">{{login}}</div>
      </div>
      <!-- <div class="title2">
        <div class="nonelogo"></div> 
        <div class="menu2" v-for="(item, ind) in menu2">
          <div class="textlist" >
            <div v-for="(text ,num) in menu2[ind]">{{text}}</div>
          </div>
      </div>   
      <div class="login"></div>
      </div> -->
      
  </div>
</template>

<script lang="ts">
import Axios from "axios";

export default {
  name: 'Navigationbar',
  components: {
  },
  data() {
      return{
        login: '',
        title: {},
        logoimg: '',
        menu: [],
        showline: 'true',
        show: 'true',
        current: null,//提示显示的是哪一个
        index: 1,
      };
    },
    created() {
      this.getmessage();
    },

    methods: {
      getmessage(){
        var that = this
         Axios.get('https://mock.aarnio.cn/mock/5e4a4a71a7e3066df43697b8/example/title', {
              params: {}, // 参数
              timeout: 3000 // 配置
            }).then((res) => {
              // that.title = res.data.data;
              that.menu = res.data.data.menu
              that.logoimg = res.data.data.logoimg
              console.log(that.menu)
              if (!res.data.data.user) {
                that.login = '登录';
              } else {
                that.login = res.data.data.user.name
              }
          }) 
          // 判断是否登录
      },
      //鼠标移入菜单
      mouseover(index){
        console.log("1232131231")
        let that = this;
        that.show = true;
        setTimeout(() => {
        that.current = index;
        that.index = index;
        console.log("index是"+that.index)
        }, 300);
        // that.line = 'test1';
        // if(index == that.current){
        //   that.line = 'test1';
        // }
      },
      mouseout(index){
        console.log("鼠标移出")
        let that = this;
        // that.line = 'test';
        that.show = false;
        that.current =null;
      }

    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
.logo{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 40px;
  height: 80px;
  width: 330px;
}
.title {
  color: #ffffff;
  font-size: 18px;
  width: 100%;
  // height: 80px;
  // background:rgba(0,0,0,0.1);
  color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  // align-items: center;
}

.menu{
  display: flex;
  /* justify-content: space-between; */
  flex-direction: column;
  align-items: center;
}

.menu2::after{
			content: '';
			border: 8px solid #ffffff00;
			border-top: 8px solid #ffffff;
			position: absolute;
			top: -10px;
      left: 60px;

}
.test  {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 160px;
  font-size: 16px;
  color: #ffffff;
}
.test1{
  width: 160px;
  height: 1px;
  border-bottom: 1px solid #ffffff;
}
.textlist{
  background-color: #ffffff;
	padding: 5px 8px;
	// display: inline-block;
	border-radius: 4px;
	margin:10px 0 10px 10px;
	position: relative;
}
.menu2{
  transition:all 0.4s linear;
  width: 124px;
  color: black;
  background-color: #ffffff;
	padding: 5px 8px;
	display: inline-block;
	border-radius: 4px;
	margin:10px 10px 10px 10px;
	position: relative;
}
.login{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 40px;
  height: 80px;
  width: 100px;
}
</style>
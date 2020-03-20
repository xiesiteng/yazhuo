<template>
  <div class="main">
    <div class="myswiper flex-center">
      <div class="left-arrow flex-center" @click="pre()">前</div>
      <div class="right-arrow flex-center" @click="next()">后</div>
      <!-- 轮播内容 -->
      <div class="myswiper-inner-wrap">
        <div class="myswiper-inner" id="slide">
          <div 
            :class="['myswiper-item', current == index ? 'myswiper-item-active' : '']"
            v-for="(item, index) in list" :key="index"
            >
              <img :src="item.url" alt="" class="myswiper-item-head">
              <p class="myswiper-item-name">{{item.name}}</p>
              <p class="myswiper-item-title">{{item.title}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return{
      list: [
        {url: 'http://huangqinchao.host3v.vip/yazhuo/zhuajia.jpg', name: '专家0', title: '教授 博士 研究生导师'},
        {url: 'http://huangqinchao.host3v.vip/yazhuo/zhuajia.jpg', name: '专家1', title: '教授 博士 研究生导师'},
        {url: 'http://huangqinchao.host3v.vip/yazhuo/zhuajia.jpg', name: '专家2', title: '教授 博士 研究生导师'},
        {url: 'http://huangqinchao.host3v.vip/yazhuo/zhuajia.jpg', name: '专家3', title: '教授 博士 研究生导师'},
        {url: 'http://huangqinchao.host3v.vip/yazhuo/zhuajia.jpg', name: '专家4', title: '教授 博士 研究生导师'},
        {url: 'http://huangqinchao.host3v.vip/yazhuo/zhuajia.jpg', name: '专家5', title: '教授 博士 研究生导师'},
        {url: 'http://huangqinchao.host3v.vip/yazhuo/zhuajia.jpg', name: '专家6', title: '教授 博士 研究生导师'},
        {url: 'http://huangqinchao.host3v.vip/yazhuo/zhuajia.jpg', name: '专家7', title: '教授 博士 研究生导师'},
        {url: 'http://huangqinchao.host3v.vip/yazhuo/zhuajia.jpg', name: '专家8', title: '教授 博士 研究生导师'},
        {url: 'http://huangqinchao.host3v.vip/yazhuo/zhuajia.jpg', name: '专家9', title: '教授 博士 研究生导师'},
        {url: 'http://huangqinchao.host3v.vip/yazhuo/zhuajia.jpg', name: '专家10', title: '教授 博士 研究生导师'},
        {url: 'http://huangqinchao.host3v.vip/yazhuo/zhuajia.jpg', name: '专家11', title: '教授 博士 研究生导师'},
        {url: 'http://huangqinchao.host3v.vip/yazhuo/zhuajia.jpg', name: '专家12', title: '教授 博士 研究生导师'},
        {url: 'http://huangqinchao.host3v.vip/yazhuo/zhuajia.jpg', name: '专家13', title: '教授 博士 研究生导师'},
        {url: 'http://huangqinchao.host3v.vip/yazhuo/zhuajia.jpg', name: '专家14', title: '教授 博士 研究生导师'},
        {url: 'http://huangqinchao.host3v.vip/yazhuo/zhuajia.jpg', name: '专家15', title: '教授 博士 研究生导师'},
        {url: 'http://huangqinchao.host3v.vip/yazhuo/zhuajia.jpg', name: '专家16', title: '教授 博士 研究生导师'},
        {url: 'http://huangqinchao.host3v.vip/yazhuo/zhuajia.jpg', name: '专家17', title: '教授 博士 研究生导师'},
        {url: 'http://huangqinchao.host3v.vip/yazhuo/zhuajia.jpg', name: '专家18', title: '教授 博士 研究生导师'},
        {url: 'http://huangqinchao.host3v.vip/yazhuo/zhuajia.jpg', name: '专家19', title: '教授 博士 研究生导师'},
        {url: 'http://huangqinchao.host3v.vip/yazhuo/zhuajia.jpg', name: '专家20', title: '教授 博士 研究生导师'},
      ],
      current: 0,
      count: 1, // 纪录超出宽度的item移动数量
      nextValue: 0,
      preValue: 0,
      
    }
  },
  mounted () {
    // document.getElementById("slide").style.transform = "translateX(" + this.slideValue +"px)"
    
  },
  methods:{
    // 下一个
    next () {
      // console.log('join', this.current, this.count)
      // 获取类名为'myswiper-inner'的div
      let slide = document.getElementById("slide")
      if (this.current < this.count*5 - 1){
        this.current++
      } else{
        this.nextValue = this.count*(-1200)
        slide.style.transform = "translateX(" + this.nextValue + "px)"
        this.current = this.count*5
        this.count++
      }
      if (this.current == this.list.length) {
        slide.style.transform = "translateX(" + 0 + "px)"
        this.current = 0
        this.count = 1
      }
    },
    // 前一个
    pre () {
      let slide = document.getElementById("slide")
      if (this.current == 0){
        slide.style.transform = "translateX(" + 0 + "px)"
        this.current = 0
        this.count = 1
        return false
      }
      // console.log(this.count, this.current)
      if (this.current == 5) {
        // this.current >= 4 && this.current <= 9
        console.log(this.count, this.nextValue)
        slide.style.transform = "translateX(" + 0 + "px)"
        // slide.style.transform = "translateX(" + (this.nextValue + (this.count - 1)*(1200)) + "px)"
        this.count--
        this.current = this.count*5 - 1
        console.log(222)
        return false
      }
      // this.current--
      if (this.current == (this.count - 1)*5) {
        // 每页第一个倒退
        console.log(333, this.nextValue, this.count)
        slide.style.transform = "translateX(" + (this.nextValue + (1)*(1200)) + "px)"
        this.count--
        this.current = this.count*5 - 1
        
      }else if (this.current >= this.count*5 - 5 && this.current <= this.count*5 - 1){
        // 每一页倒退
        this.current--
        console.log(111)
      }
      
      
    }
  }
}
</script>

<style lang="less" scoped>
  .myswiper{
    width: 1200px;
    height: 350px;
    position: relative;
    margin-top: 50px;
    // padding: 0 20px;
    // box-sizing: border-box;
    .left-arrow{
      width: 40px;
      height: 90px;
      background-color: peru;
      position: absolute;
      top: 130px;
      left: -60px;
      cursor: pointer;
    }
    .right-arrow{
      width: 40px;
      height: 90px;
      background-color: palevioletred;
      position: absolute;
      top: 130px;
      right: -60px;
      cursor: pointer;
    }
    .myswiper-inner-wrap{
      width: 1200px;
      overflow: hidden;
        .myswiper-inner{
        display: flex;
        align-items: center;
        transform: translateX(0);
        .myswiper-item-active{
          box-shadow: 0px 0px 8px 6px rgba(0,0,0, .2);
          transform: scale(1.05);
        }
        .myswiper-item{
          min-width: 196px;
          width: 196px;
          height: 270px;
          background: url('http://huangqinchao.host3v.vip/yazhuo/zhuanjiabg.png') no-repeat;
          background-size: 100% 100%;
          margin: 22px;
          position: relative;
          transition: all .3s ease-in-out;
          .myswiper-item-head{
            width: 122px;
            height: 122px;
            border-radius: 50%;
            position: relative;
            top: 48px;
            left: 50%;
            transform: translateX(-50%);
          }
          .myswiper-item-name{
            position: absolute;
            width: 100%;
            color: #333;
            font-size: 20px;
            text-align: center;
            top: 190px;
            font-weight: 700;
          }
          .myswiper-item-title{
            position: absolute;
            width: 100%;
            color: #333;
            font-size: 16px;
            text-align: center;
            top: 225px;
            color: #666;
          }
        }
      }
    }
    
  }
</style>